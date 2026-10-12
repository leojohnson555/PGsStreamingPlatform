import { useState } from 'react';
import { useParams, Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { Play } from 'lucide-react';
import { videos, categories } from '../data/dummyData';
import VideoCard from '../components/VideoCard';
import Modal from '../components/Modal';
import YouTubePlayerModal, { TEMP_YOUTUBE_ID } from '../components/YouTubePlayerModal';

export default function Watch() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const location = useLocation();
  const bgLocation = location.state?.backgroundLocation || location;
  const video = videos.find(v => v.id === id);

  if (!video) {
    return (
      <Modal>
        <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
          <h2>Video not found</h2>
          <button onClick={() => navigate(-1)} className="btn btn-primary" style={{ marginTop: '2rem' }}>Close</button>
        </div>
      </Modal>
    );
  }

  // Force episodes into their Series context
  if (video.seriesId) {
    return <Navigate to={`/series/${video.seriesId}`} state={{ backgroundLocation: bgLocation, selectedEpisodeId: video.id }} replace={true} />;
  }

  const category = video.categoryIds.length > 0 ? categories.find(c => c.id === video.categoryIds[0]) : null;

  // Only show other standalone videos as related
  const relatedVideos = videos
    .filter(v => v.categoryIds.some(cid => video.categoryIds.includes(cid)) && v.id !== video.id && !v.seriesId)
    .slice(0, 4);

  return (
    <Modal title={video.title}>
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
            backgroundImage: `url(${video.backdropUrl || video.thumbnailUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: video.backdropPosition || 'center',
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
              {video.title}
            </h1>
            
            <div className="modal-hero-meta">
              <span style={{ color: '#4ade80' }}>98% Match</span>
              {video.year && <span>{video.year}</span>}
              {video.duration && <span>{video.duration}</span>}
              <span style={{ backgroundColor: 'rgba(255,255,255,0.2)', padding: '2px 6px', borderRadius: '4px' }}>HD</span>
            </div>
          </div>
        </div>

        <div className="modal-body-padding">
          <div className="modal-buttons">
            <button 
              className="btn btn-primary" 
              style={{ backgroundColor: 'white', color: 'black', padding: '10px 24px', fontWeight: 600 }}
              onClick={() => setIsPlaying(true)}
            >
              <Play fill="currentColor" size={20} />
              Watch Now
            </button>
          </div>

          <div className="modal-metadata-layout">
            <div style={{ flex: '2', fontSize: '1.05rem', lineHeight: '1.6', color: '#e5e5e5' }}>
              <p>{video.description}</p>
            </div>
            
            <div style={{ flex: '1', fontSize: '0.9rem', color: '#a3a3a3', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <span style={{ color: '#737373' }}>Cast: </span>
                <span>Kerala Artists</span>
              </div>
              <div>
                <span style={{ color: '#737373' }}>Genres: </span>
                {category ? (
                  <Link to={`/categories/${category.slug}`} style={{ color: '#e5e5e5' }}>{category.title}</Link>
                ) : (
                  <span>Cultural, Documentary</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {relatedVideos.length > 0 && (
          <div className="modal-body-padding" style={{ paddingTop: 0 }}>
            <div style={{ marginTop: '1rem', borderTop: '1px solid var(--color-border)', paddingTop: '2rem' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Related Videos
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '1.5rem'
              }}>
                {relatedVideos.map(related => (
                  <VideoCard key={related.id} video={related} />
                ))}
              </div>
            </div>
          </div>
        )}
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
