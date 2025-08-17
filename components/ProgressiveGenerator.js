"use client";

import React, { useEffect, useState } from 'react';
import { Loader, CheckCircle, AlertCircle } from 'lucide-react';

const ProgressiveGenerator = ({ initialWebsite, onWebsiteUpdate }) => {
  const [currentWebsite, setCurrentWebsite] = useState(initialWebsite);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [completedPages, setCompletedPages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Start progressive generation if there are planned pages
    const hasPlanned = initialWebsite && initialWebsite.plannedPages && initialWebsite.plannedPages.length > 0;
    const hasTasks = initialWebsite && Array.isArray(initialWebsite.tasks) && initialWebsite.tasks.length > 0;
    if (initialWebsite && (hasPlanned || hasTasks) && !initialWebsite.isComplete) {
      
      console.log('Starting progressive generation for pages:', initialWebsite.plannedPages, 'tasks:', initialWebsite.tasks);
      startProgressiveGeneration();
    }
  }, [initialWebsite]);

  const startProgressiveGeneration = async () => {
  const hasPlanned = currentWebsite && currentWebsite.plannedPages && currentWebsite.plannedPages.length > 0;
  const hasTasks = currentWebsite && Array.isArray(currentWebsite.tasks) && currentWebsite.tasks.length > 0;
  if (!currentWebsite || (!hasPlanned && !hasTasks)) {
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      await generateNextPage();
    } catch (error) {
      console.error('Progressive generation failed:', error);
      setError(error.message);
      setIsGenerating(false);
    }
  };

  const generateNextPage = async () => {
    const pendingTasks = (currentWebsite.tasks || []).filter(t => (t.status || 'pending') !== 'done');
    const remainingPages = pendingTasks.length > 0
      ? pendingTasks.map(t => t.path)
      : (currentWebsite.plannedPages || []);

    if (remainingPages.length === 0) {
      setIsGenerating(false);
      console.log('All pages generated successfully!');
      return;
    }

    const nextPage = remainingPages[0];
    const files = currentWebsite.files || [];
    const normalize = (p) => (p || '').trim().toLowerCase();
    const fileExists = (p) => files.some(f => normalize(f.path) === normalize(p));

    // Skip-call optimization: if file already exists, mark task done and advance
    if (fileExists(nextPage)) {
      console.log(`Skipping generation for ${nextPage} as file already exists`);
      let updatedWebsite = { ...currentWebsite };
      // If using tasks, mark this task as done
      if (Array.isArray(updatedWebsite.tasks) && updatedWebsite.tasks.length > 0) {
        updatedWebsite = {
          ...updatedWebsite,
          tasks: updatedWebsite.tasks.map(t => ({
            ...t,
            status: normalize(t.path) === normalize(nextPage) ? 'done' : (t.status || 'pending')
          }))
        };
      }
      // If using plannedPages, remove it from planned list
      if (Array.isArray(updatedWebsite.plannedPages) && updatedWebsite.plannedPages.length > 0) {
        updatedWebsite = {
          ...updatedWebsite,
          plannedPages: updatedWebsite.plannedPages.filter(p => normalize(p) !== normalize(nextPage))
        };
      }
      // Update completion state based on tasks or plannedPages
      const remaining = Array.isArray(updatedWebsite.tasks) && updatedWebsite.tasks.length > 0
        ? updatedWebsite.tasks.filter(t => (t.status || 'pending') !== 'done').length
        : (updatedWebsite.plannedPages || []).length;
      updatedWebsite.isComplete = remaining === 0;

      setCurrentWebsite(updatedWebsite);
      setCompletedPages(prev => prev.includes(nextPage) ? prev : [...prev, nextPage]);
      // Persist and notify parent
      try { sessionStorage.setItem('generatedWebsite', JSON.stringify(updatedWebsite)); } catch (_) {}
      if (onWebsiteUpdate) onWebsiteUpdate(updatedWebsite);

      if (updatedWebsite.isComplete) {
        setIsGenerating(false);
        setCurrentPage(null);
        console.log('Progressive generation completed (skip path)!');
        return;
      }
      // Continue to next after a short delay
      setTimeout(() => {
        generateNextPage();
      }, 300);
      return;
    }
    setCurrentPage(nextPage);

    console.log(`Generating page: ${nextPage}`);

    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          generateNextPage: true,
          pageToGenerate: nextPage,
          existingWebsite: currentWebsite,
          prompt: `Generate the ${nextPage} page for this website`
        }),
      });

      const data = await response.json();

      if (data.success && data.website) {
        console.log(`Successfully generated ${nextPage}`);
        
        // Update current website state
        setCurrentWebsite(data.website);
        setCompletedPages(prev => [...prev, nextPage]);
        
        // Update parent component
        if (onWebsiteUpdate) {
          onWebsiteUpdate(data.website);
        }

        // Update sessionStorage with the new website
        sessionStorage.setItem('generatedWebsite', JSON.stringify(data.website));

        // Check if generation is complete
  const noPlanned = !data.website.plannedPages || data.website.plannedPages.length === 0;
  const tasksDone = Array.isArray(data.website.tasks) ? data.website.tasks.every(t => (t.status || 'pending') === 'done') : false;
  if (data.website.isComplete || (noPlanned && tasksDone)) {
          setIsGenerating(false);
          setCurrentPage(null);
          console.log('Progressive generation completed!');
        } else {
          // Continue with next page after a short delay
          setTimeout(() => {
            generateNextPage();
          }, 2000); // 2 second delay between generations
        }
      } else {
        throw new Error(data.error || 'Failed to generate page');
      }
    } catch (error) {
      console.error(`Error generating ${nextPage}:`, error);
      setError(`Failed to generate ${nextPage}: ${error.message}`);
      setIsGenerating(false);
      setCurrentPage(null);
    }
  };

  const retryGeneration = () => {
    setError(null);
    startProgressiveGeneration();
  };

  // Don't render anything if no progressive generation is needed
  if (!initialWebsite || 
      !initialWebsite.plannedPages || 
      initialWebsite.plannedPages.length === 0 || 
      initialWebsite.isComplete) {
    return null;
  }

  const totalPages = Array.isArray(initialWebsite.tasks) && initialWebsite.tasks.length > 0
    ? initialWebsite.tasks.length
    : (initialWebsite.plannedPages || []).length;
  const generatedPages = Array.isArray(currentWebsite?.tasks)
    ? (currentWebsite.tasks.filter(t => (t.status || 'pending') === 'done').length)
    : completedPages.length;
  const progress = totalPages > 0 ? (generatedPages / totalPages) * 100 : 0;

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg border p-4 max-w-sm z-50">
      <div className="flex items-center gap-3 mb-2">
        {isGenerating ? (
          <Loader size={20} className="animate-spin text-blue-600" />
        ) : error ? (
          <AlertCircle size={20} className="text-red-500" />
        ) : (
          <CheckCircle size={20} className="text-green-500" />
        )}
        
        <div className="flex-1">
          <div className="text-sm font-medium">
            {isGenerating ? 'Generating Pages...' : 
             error ? 'Generation Failed' : 
             'Pages Generated'}
          </div>
          <div className="text-xs text-gray-500">
            {isGenerating && currentPage ? `Creating ${currentPage}` :
             error ? 'Click to retry' :
             `${generatedPages}/${totalPages} completed`}
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

  {/* Tasks list (read-only) */}
  <div className="mt-2 mb-1 text-[11px] font-semibold text-gray-700">Tasks</div>
  <div className="text-[11px] text-gray-600 max-h-44 overflow-auto pr-1">
        {(currentWebsite?.tasks && currentWebsite.tasks.length > 0
          ? currentWebsite.tasks
          : (initialWebsite.plannedPages || []).map(p => ({ path: p, status: 'pending' }))
        ).map((task) => (
          <div key={task.path} className="flex items-center gap-2 py-1">
            { (task.status || 'pending') === 'done' ? (
              <CheckCircle size={12} className="text-green-500" />
            ) : currentPage === task.path ? (
              <Loader size={12} className="animate-spin text-blue-600" />
            ) : (
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            )}
            <span className={(task.status || 'pending') === 'done' ? 'text-green-600' : ''}>{task.title || task.path}</span>
          </div>
        ))}
      </div>

      {error && (
        <button
          onClick={retryGeneration}
          className="mt-2 w-full text-xs bg-red-100 text-red-700 px-2 py-1 rounded hover:bg-red-200 transition-colors"
        >
          Retry Generation
        </button>
      )}
    </div>
  );
};

export default ProgressiveGenerator;
