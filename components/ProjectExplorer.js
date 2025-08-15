"use client";

import React, { useEffect, useState } from 'react';
import { Folder, FileText, ChevronDown, ChevronRight } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const ProjectExplorer = ({ siteName }) => {
  const [entries, setEntries] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
    if (!siteName || !SUPABASE_URL || !SUPABASE_ANON_KEY) return;

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    const list = async () => {
      const { data, error } = await supabase.storage.from('sites').list(siteName, { limit: 1000, search: '' });
      if (error) {
        console.error('List error', error);
        setEntries([]);
      } else {
        setEntries(data || []);
      }
    };
    list();
  }, [siteName]);

  const toggle = (name) => setExpanded((e) => ({ ...e, [name]: !e[name] }));

  return (
    <div className="px-4 mb-6">
      <h3 className="text-gray-400 text-sm font-semibold mb-2">FILES {siteName ? `(${siteName})` : ''}</h3>
      {!siteName && (
        <div className="text-xs text-gray-500">Preview a site to load files.</div>
      )}
      {entries.map((item) => (
        <div key={item.name} className="text-sm text-gray-300">
          {item.metadata && item.metadata.eTag ? (
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-[#1e2951]">
              <FileText size={16} className="text-[#60a5fa]" />
              <span>{item.name}</span>
            </div>
          ) : (
            <div>
              <button onClick={() => toggle(item.name)} className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-[#1e2951] text-left">
                {expanded[item.name] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <Folder size={16} className="text-gray-400" />
                <span>{item.name}</span>
              </button>
              {expanded[item.name] && (
                <SubFolder siteName={siteName} folder={`${item.name}`} depth={1} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const SubFolder = ({ siteName, folder, depth }) => {
  const [entries, setEntries] = useState([]);
  const [expanded, setExpanded] = useState({});

  useEffect(() => {
    const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
    if (!siteName || !SUPABASE_URL || !SUPABASE_ANON_KEY) return;
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const list = async () => {
      const { data, error } = await supabase.storage.from('sites').list(`${siteName}/${folder}`, { limit: 1000, search: '' });
      if (error) {
        console.error('List error', error);
        setEntries([]);
      } else {
        setEntries(data || []);
      }
    };
    list();
  }, [siteName, folder]);

  const toggle = (name) => setExpanded((e) => ({ ...e, [name]: !e[name] }));
  const pad = { paddingLeft: `${depth * 12}px` };

  return (
    <div>
      {entries.map((item) => (
        <div key={`${folder}/${item.name}`} className="text-sm text-gray-300" style={pad}>
          {item.metadata && item.metadata.eTag ? (
            <div className="flex items-center gap-2 p-2 rounded-md hover:bg-[#1e2951]">
              <FileText size={16} className="text-[#60a5fa]" />
              <span>{item.name}</span>
            </div>
          ) : (
            <div>
              <button onClick={() => toggle(item.name)} className="w-full flex items-center gap-2 p-2 rounded-md hover:bg-[#1e2951] text-left">
                {expanded[item.name] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                <Folder size={16} className="text-gray-400" />
                <span>{item.name}</span>
              </button>
              {expanded[item.name] && (
                <SubFolder siteName={siteName} folder={`${folder}/${item.name}`} depth={depth + 1} />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectExplorer;
