import { Link, useLocation } from 'react-router-dom';
import { Play } from 'lucide-react';
import type { Video } from '../data/types';
import './VideoCard.css';

interface VideoCardProps {
  video: Video;
  showEpisode?: boolean;
}

export default function VideoCard({ video, showEpisode = false }: VideoCardProps) {
  const location = useLocation();
  const bgLocation = location.state?.backgroundLocation || location;
  const isModal = !!location.state?.backgroundLocation;

  const targetPath = video.seriesId ? `/series/${video.seriesId}` : `/watch/${video.id}`;
  const targetState = { 
    backgroundLocation: bgLocation,
    selectedEpisodeId: video.seriesId ? video.id : undefined
  };

  return (
    <Link to={targetPath} state={targetState} replace={isModal} className="video-card">
      <div className="video-card-thumbnail">
        <img src={video.thumbnailUrl} alt={video.title} loading="lazy" />
        <div className="video-card-overlay">
          <Play fill="currentColor" size={32} className="play-icon" />
        </div>
        {video.duration && (
          <div className="video-duration">{video.duration}</div>
        )}
      </div>
      <div className="video-card-info">
        {showEpisode && video.episodeNumber && (
          <span className="episode-badge">Episode {video.episodeNumber}</span>
        )}
        <h3 className="video-title text-truncate">{video.title}</h3>
        {showEpisode && video.description && (
          <p className="video-meta text-multiline-truncate" style={{ marginTop: '4px' }}>
            {video.description}
          </p>
        )}
        {video.seriesId && !showEpisode && (
          <p className="video-meta">Part of a series</p>
        )}
      </div>
    </Link>
  );
}
