import { Link, useLocation } from 'react-router-dom';
import { Layers } from 'lucide-react';
import type { Series } from '../data/types';
import './SeriesCard.css';

interface SeriesCardProps {
  series: Series;
}

export default function SeriesCard({ series }: SeriesCardProps) {
  const location = useLocation();
  const bgLocation = location.state?.backgroundLocation || location;

  return (
    <Link to={`/series/${series.id}`} state={{ backgroundLocation: bgLocation }} className="series-card">
      <div className="series-card-thumbnail">
        <img src={series.coverUrl} alt={series.title} loading="lazy" />
        <div className="series-card-overlay">
          <div className="series-icon-container">
            <Layers fill="currentColor" size={24} className="series-icon" />
          </div>
        </div>
        <div className="series-badge">Series</div>
      </div>
      <div className="series-card-info">
        <h3 className="series-title text-truncate">{series.title}</h3>
        <p className="series-meta">{series.episodeCount} Episodes</p>
      </div>
    </Link>
  );
}
