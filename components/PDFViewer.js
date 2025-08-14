'use client';

import { useState, useEffect } from 'react';

const PDFViewer = ({ pdfUrl, memberName }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Drag and resize states
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeDirection, setResizeDirection] = useState('');
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [modalSize, setModalSize] = useState({ width: 900, height: 700 });
  const [initialMousePos, setInitialMousePos] = useState({ x: 0, y: 0 });
  const [initialSize, setInitialSize] = useState({ width: 0, height: 0 });

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

  // Drag functionality
  const handleMouseDown = (e) => {
    if (isMobile || isFullscreen) return;
    
    setIsDragging(true);
    setDragStart({
      x: e.clientX - modalPosition.x,
      y: e.clientY - modalPosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging && !isMobile && !isFullscreen) {
      setModalPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
    
    if (isResizing && !isMobile && !isFullscreen) {
      const deltaX = e.clientX - initialMousePos.x;
      const deltaY = e.clientY - initialMousePos.y;
      
      let newWidth = initialSize.width;
      let newHeight = initialSize.height;
      let newX = modalPosition.x;
      let newY = modalPosition.y;

      if (resizeDirection.includes('right')) {
        newWidth = Math.max(400, initialSize.width + deltaX);
      }
      if (resizeDirection.includes('left')) {
        newWidth = Math.max(400, initialSize.width - deltaX);
        newX = modalPosition.x + (initialSize.width - newWidth);
      }
      if (resizeDirection.includes('bottom')) {
        newHeight = Math.max(300, initialSize.height + deltaY);
      }
      if (resizeDirection.includes('top')) {
        newHeight = Math.max(300, initialSize.height - deltaY);
        newY = modalPosition.y + (initialSize.height - newHeight);
      }

      setModalSize({ width: newWidth, height: newHeight });
      if (resizeDirection.includes('left') || resizeDirection.includes('top')) {
        setModalPosition({ x: newX, y: newY });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
    setResizeDirection('');
  };

  // Resize functionality
  const handleResizeMouseDown = (e, direction) => {
    if (isMobile || isFullscreen) return;
    
    e.stopPropagation();
    setIsResizing(true);
    setResizeDirection(direction);
    setInitialMousePos({ x: e.clientX, y: e.clientY });
    setInitialSize({ ...modalSize });
  };

  // Add global mouse event listeners
  useEffect(() => {
    if (isDragging || isResizing) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragStart, modalPosition, initialMousePos, initialSize, resizeDirection]);

  // Reset position and size when opening modal
  const openModalWithReset = () => {
    setIsModalOpen(true);
    setModalPosition({ x: 0, y: 0 });
    setModalSize({ width: 900, height: 700 });
  };

  return (
    <>
      {/* CV Button */}
      <button
        onClick={openModalWithReset}
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
              width: isFullscreen ? '100vw' : (isMobile ? '95vw' : `${modalSize.width}px`),
              height: isFullscreen ? '100vh' : (isMobile ? '90vh' : `${modalSize.height}px`),
              maxWidth: isFullscreen ? 'none' : (isMobile ? 'none' : 'none'),
              maxHeight: isFullscreen ? 'none' : 'none',
              overflow: 'hidden',
              position: isFullscreen ? 'relative' : (isMobile ? 'relative' : 'fixed'),
              top: isFullscreen || isMobile ? 'auto' : `calc(50vh + ${modalPosition.y}px)`,
              left: isFullscreen || isMobile ? 'auto' : `calc(50vw + ${modalPosition.x}px)`,
              transform: isFullscreen || isMobile ? 'none' : 'translate(-50%, -50%)',
              transition: isDragging || isResizing ? 'none' : 'all 0.3s ease',
              cursor: isDragging ? 'grabbing' : 'default',
              minWidth: isMobile ? 'auto' : '400px',
              minHeight: isMobile ? 'auto' : '300px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div 
              onMouseDown={handleMouseDown}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: isFullscreen ? '10px' : (isMobile ? '15px' : '20px'),
                borderBottom: '1px solid #eee',
                paddingBottom: isFullscreen ? '8px' : (isMobile ? '10px' : '15px'),
                flexWrap: 'wrap',
                gap: '10px',
                cursor: (isMobile || isFullscreen) ? 'default' : 'grab',
                userSelect: 'none'
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
                height: isFullscreen 
                  ? 'calc(100vh - 80px)' 
                  : isMobile 
                    ? '65vh' 
                    : `${modalSize.height - 120}px`,
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

            {/* Resize Handles - Only show on desktop and not in fullscreen */}
            {!isMobile && !isFullscreen && (
              <>
                {/* Corner resize handles */}
                <div
                  onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-right')}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '20px',
                    height: '20px',
                    cursor: 'nw-resize',
                    backgroundColor: 'transparent'
                  }}
                />
                <div
                  onMouseDown={(e) => handleResizeMouseDown(e, 'bottom-left')}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '20px',
                    height: '20px',
                    cursor: 'ne-resize',
                    backgroundColor: 'transparent'
                  }}
                />
                <div
                  onMouseDown={(e) => handleResizeMouseDown(e, 'top-right')}
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    width: '20px',
                    height: '20px',
                    cursor: 'ne-resize',
                    backgroundColor: 'transparent'
                  }}
                />
                <div
                  onMouseDown={(e) => handleResizeMouseDown(e, 'top-left')}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '20px',
                    height: '20px',
                    cursor: 'nw-resize',
                    backgroundColor: 'transparent'
                  }}
                />
                
                {/* Edge resize handles */}
                <div
                  onMouseDown={(e) => handleResizeMouseDown(e, 'right')}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    right: '0',
                    width: '10px',
                    height: 'calc(100% - 40px)',
                    cursor: 'ew-resize',
                    backgroundColor: 'transparent'
                  }}
                />
                <div
                  onMouseDown={(e) => handleResizeMouseDown(e, 'left')}
                  style={{
                    position: 'absolute',
                    top: '20px',
                    left: '0',
                    width: '10px',
                    height: 'calc(100% - 40px)',
                    cursor: 'ew-resize',
                    backgroundColor: 'transparent'
                  }}
                />
                <div
                  onMouseDown={(e) => handleResizeMouseDown(e, 'bottom')}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '20px',
                    width: 'calc(100% - 40px)',
                    height: '10px',
                    cursor: 'ns-resize',
                    backgroundColor: 'transparent'
                  }}
                />
                <div
                  onMouseDown={(e) => handleResizeMouseDown(e, 'top')}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '20px',
                    width: 'calc(100% - 40px)',
                    height: '10px',
                    cursor: 'ns-resize',
                    backgroundColor: 'transparent'
                  }}
                />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default PDFViewer;
