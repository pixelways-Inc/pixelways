'use client';

import { useState, useEffect } from 'react';

const PDFViewer = ({ pdfUrl, memberName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          closeModal();
        }
      }
      if (e.key === 'F11' && isModalOpen) {
        e.preventDefault();
        toggleFullscreen();
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isModalOpen, isFullscreen]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setIsFullscreen(false);
  };
  
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <>
      {/* CV Button */}
      <button
        onClick={openModal}
        className="btn btn-primary mt-3"
        style={{
          backgroundColor: '#FC5546',
          border: 'none',
          padding: isMobile ? '8px 16px' : '10px 20px',
          borderRadius: '5px',
          color: 'white',
          textDecoration: 'none',
          display: 'inline-block',
          cursor: 'pointer',
          fontSize: isMobile ? '14px' : '16px',
          width: isMobile ? '100%' : 'auto'
        }}
      >
        <i className="fas fa-file-pdf" style={{ marginRight: '8px' }}></i>
        View CV
      </button>

      {/* PDF Modal */}
      {isModalOpen && (
        <div
          className="pdf-modal-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: isFullscreen ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.8)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background-color 0.3s ease'
          }}
          onClick={isFullscreen ? undefined : closeModal}
        >
          <div 
            className="pdf-modal-content" 
            style={{
              backgroundColor: 'white',
              borderRadius: isFullscreen ? '0' : '10px',
              padding: isFullscreen ? '10px' : (isMobile ? '15px' : '20px'),
              width: isFullscreen ? '100vw' : (isMobile ? '95vw' : '85vw'),
              maxWidth: isFullscreen ? 'none' : (isMobile ? 'none' : '1200px'),
              height: isFullscreen ? '100vh' : (isMobile ? '90vh' : '85vh'),
              maxHeight: isFullscreen ? 'none' : '90vh',
              overflow: 'hidden',
              position: 'relative',
              transition: 'all 0.3s ease'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: isFullscreen ? '10px' : (isMobile ? '15px' : '20px'),
                borderBottom: '1px solid #eee',
                paddingBottom: isFullscreen ? '8px' : (isMobile ? '10px' : '15px'),
                flexWrap: 'wrap',
                gap: '10px'
              }}
            >
              <h3 style={{ 
                margin: 0, 
                color: '#333', 
                fontSize: isMobile ? '18px' : '22px',
                flex: '1 1 auto'
              }}>
                {memberName}'s CV
              </h3>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {/* Download Button */}
                <a
                  href={pdfUrl}
                  download={`${memberName.replace(/\s+/g, '_')}_CV.pdf`}
                  style={{
                    backgroundColor: '#28a745',
                    color: 'white',
                    padding: isMobile ? '6px 12px' : '8px 15px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontSize: isMobile ? '12px' : '14px'
                  }}
                >
                  <i className="fas fa-download" style={{ marginRight: '5px' }}></i>
                  {isMobile ? 'Download' : 'Download'}
                </a>
                
                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    padding: isMobile ? '6px 12px' : '8px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: isMobile ? '12px' : '14px'
                  }}
                >
                  <i className={`fas ${isFullscreen ? 'fa-compress' : 'fa-expand'}`} style={{ marginRight: '5px' }}></i>
                  {isFullscreen ? (isMobile ? 'Exit' : 'Exit Fullscreen') : (isMobile ? 'Full' : 'Fullscreen')}
                </button>
                
                {/* Close Button */}
                <button
                  onClick={closeModal}
                  style={{
                    backgroundColor: '#dc3545',
                    color: 'white',
                    border: 'none',
                    padding: isMobile ? '6px 12px' : '8px 15px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: isMobile ? '12px' : '14px'
                  }}
                >
                  <i className="fas fa-times" style={{ marginRight: '5px' }}></i>
                  Close
                </button>
              </div>
            </div>

            {/* PDF Embed */}
            <div 
              style={{
                width: '100%',
                height: isFullscreen ? 'calc(100vh - 80px)' : (isMobile ? '65vh' : '70vh'),
                border: '1px solid #ddd',
                borderRadius: '5px',
                overflow: 'hidden'
              }}
            >
              <iframe
                src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none'
                }}
                title={`${memberName} CV`}
              />
            </div>

            {/* Fallback for browsers that don't support iframe */}
            <div 
              style={{
                textAlign: 'center',
                marginTop: '20px',
                color: '#666'
              }}
            >
              <p>
                If the PDF doesn't load, you can{' '}
                <a 
                  href={pdfUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#FC5546' }}
                >
                  open it in a new tab
                </a>{' '}
                or{' '}
                <a 
                  href={pdfUrl} 
                  download={`${memberName.replace(/\s+/g, '_')}_CV.pdf`}
                  style={{ color: '#FC5546' }}
                >
                  download it directly
                </a>.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PDFViewer;
