import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Video } from '../data/types';
import YouTubePlayerModal, { TEMP_YOUTUBE_ID } from './YouTubePlayerModal';
import './Hero.css';

interface HeroProps {
  videos: Video[];
}

export default function Hero({ videos }: HeroProps) {
  const location = useLocation();
  const bgLocation = location.state?.backgroundLocation || location;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videos.length <= 1 || isPaused) return;

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    }, 6000);

    return () => clearTimeout(timer);
  }, [videos.length, isPaused, currentIndex]);

  if (!videos || videos.length === 0) return null;

  const currentVideo = videos[currentIndex];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  return (
    <div className="hero-section">
      {videos.map((video, index) => (
        <div 
          key={video.id} 
          className={`hero-bg ${index === currentIndex ? 'active' : ''}`}
        >
          <img 
            src={video.backdropUrl || video.thumbnailUrl} 
            alt={video.title} 
            className="hero-image"
            style={{ objectPosition: video.backdropPosition || 'center center' }}
          />
        </div>
      ))}
      <div className="hero-gradient"></div>
      
      <div className="container hero-content">
        <span className="hero-category">Featured Selection</span>
        <h1 className="hero-title">{currentVideo.title}</h1>
        <p className="hero-description text-multiline-truncate">{currentVideo.description}</p>
        
        <div 
          className="hero-actions"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <button onClick={() => setIsPlaying(true)} className="btn btn-primary">
            <Play fill="currentColor" size={20} />
            Watch Now
          </button>
          {currentVideo.seriesId ? (
            <Link to={`/series/${currentVideo.seriesId}`} state={{ backgroundLocation: bgLocation }} className="btn btn-secondary">
              <Info size={20} />
              View Series
            </Link>
          ) : (
            <Link to="/explore" className="btn btn-secondary">
              <Info size={20} />
              Explore Collection
            </Link>
          )}
        </div>
      </div>

      {videos.length > 1 && (
        <>
          <button 
            className="hero-nav prev" 
            onClick={handlePrevious} 
            aria-label="Previous featured item"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            className="hero-nav next" 
            onClick={handleNext} 
            aria-label="Next featured item"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <ChevronRight size={32} />
          </button>
          
          <div 
            className="hero-indicators"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {videos.map((_, index) => (
              <button
                key={index}
                className={`hero-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {isPlaying && (
        <YouTubePlayerModal 
          videoId={TEMP_YOUTUBE_ID} 
          onClose={() => setIsPlaying(false)} 
        />
      )}
    </div>
  );
}
