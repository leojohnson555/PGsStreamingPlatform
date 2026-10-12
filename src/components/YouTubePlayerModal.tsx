import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import './YouTubePlayerModal.css';

export const TEMP_YOUTUBE_ID = '3rTnBSKoG-c';

interface YouTubePlayerModalProps {
  videoId: string;
  onClose: () => void;
}

export default function YouTubePlayerModal({ videoId, onClose }: YouTubePlayerModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent background scrolling
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalStyle;
    };
  }, [onClose]);

  const modalContent = (
    <div className="yt-modal-overlay" onClick={onClose}>
      <div className="yt-modal-header">
        <button className="yt-modal-close" onClick={onClose} aria-label="Close player">
          <X size={24} />
        </button>
      </div>
      <div className="yt-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="yt-modal-content">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div className="yt-modal-fallback">
            Having trouble playing? <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
