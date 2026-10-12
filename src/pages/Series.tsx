import { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { seriesList, videos, categories } from '../data/dummyData';
import { Play } from 'lucide-react';
import Modal from '../components/Modal';
import YouTubePlayerModal, { TEMP_YOUTUBE_ID } from '../components/YouTubePlayerModal';
import './Series.css';

export default function Series() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const selectedEpisodeId = location.state?.selectedEpisodeId;
  const series = seriesList.find(s => s.id === id);
  const selectedEpisodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedEpisodeRef.current) {
      // Small delay to ensure Modal's scrollTop=0 has finished
      setTimeout(() => {
        selectedEpisodeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    }
  }, [selectedEpisodeId]);

  if (!series) {
    return (
      <Modal>
        <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
          <h2>Series not found</h2>
          <button onClick={() => navigate(-1)} className="btn btn-primary" style={{ marginTop: '2rem' }}>Close</button>
        </div>
      </Modal>
    );
  }

  const category = categories.find(c => c.id === series.categoryId);
  
  // Sort episodes by episodeNumber
  const episodes = videos
    .filter(v => v.seriesId === series.id)
    .sort((a, b) => (a.episodeNumber || 0) - (b.episodeNumber || 0));

  return (
    <Modal title={series.title}>
      <div style={{ paddingBottom: '4rem' }}>
        <div 
          style={{ 
            width: '100%', 
            aspectRatio: '16/9',
            position: 'relative',
            backgroundColor: '#000',
          }}
        >
          {/* Background image without heavy opacity */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${series.backdropUrl || series.coverUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
          
          {/* Gradient strictly at the bottom for text readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, var(--color-bg-primary) 0%, rgba(10,10,10,0.8) 15%, rgba(10,10,10,0) 40%)',
          }}></div>

          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            right: '2rem',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            height: '100%'
          }}>
            <h1 className="modal-hero-title">
              {series.title}
            </h1>
            
            <div className="modal-hero-meta">
              <span style={{ color: '#4ade80' }}>95% Match</span>
              <span>2024</span>
              <span>{series.episodeCount} Episodes</span>
              <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>HD</span>
            </div>
          </div>
        </div>

        <div className="modal-body-padding">
          <div className="modal-buttons">
            {episodes.length > 0 && (
              <button 
                onClick={() => setIsPlaying(true)} 
                className="btn btn-primary" 
                style={{ backgroundColor: 'white', color: 'black', padding: '10px 24px', fontWeight: 600 }}
              >
                <Play fill="currentColor" size={20} />
                Watch Episode 1
              </button>
            )}
          </div>

          <div className="modal-metadata-layout">
            <div style={{ flex: '2', fontSize: '1.05rem', lineHeight: '1.6', color: '#e5e5e5' }}>
              <p>{series.description}</p>
            </div>
            
            <div style={{ flex: '1', fontSize: '0.9rem', color: '#a3a3a3', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <span style={{ color: '#737373' }}>Cast: </span>
                <span>Kerala Artists</span>
              </div>
              <div>
                <span style={{ color: '#737373' }}>Category: </span>
                {category ? (
                  <Link to={`/categories/${category.slug}`} style={{ color: '#e5e5e5' }}>{category.title}</Link>
                ) : (
                  <span>Cultural</span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="modal-body-padding" style={{ paddingTop: 0 }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            Episodes
          </h2>
        
        {episodes.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {episodes.map(episode => {
              const isSelected = selectedEpisodeId === episode.id;
              return (
              <div 
                key={episode.id} 
                onClick={() => setIsPlaying(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsPlaying(true);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Play episode ${episode.episodeNumber || ''}: ${episode.title}`}
                className={`episode-row ${isSelected ? 'episode-selected' : ''}`}
                ref={isSelected ? selectedEpisodeRef : null}
              >
                <div className="episode-thumbnail-container">
                  {episode.episodeNumber && <div className="episode-large-number">{episode.episodeNumber}</div>}
                  <div className="episode-thumbnail">
                    <img src={episode.thumbnailUrl} alt={episode.title} loading="lazy" />
                    <div className="video-card-overlay">
                      <Play fill="currentColor" size={32} className="play-icon" />
                    </div>
                    {episode.duration && <span className="episode-thumbnail-duration">{episode.duration}</span>}
                  </div>
                </div>
                <div className="episode-info">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                    <h3 className="episode-title">
                      {episode.title}
                    </h3>
                  </div>
                  {episode.description && (
                    <p className="episode-desc text-multiline-truncate">{episode.description}</p>
                  )}
                </div>
              </div>
            )})}
          </div>
        ) : (
          <p style={{ color: 'var(--color-text-secondary)' }}>No episodes available yet.</p>
        )}
      </div>
    </div>

    {isPlaying && (
      <YouTubePlayerModal 
        videoId={TEMP_YOUTUBE_ID} 
        onClose={() => setIsPlaying(false)} 
      />
    )}
    </Modal>
  );
}
