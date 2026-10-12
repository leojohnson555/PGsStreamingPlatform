import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { videos, categories } from '../data/dummyData';
import VideoCard from '../components/VideoCard';
import { Search as SearchIcon, X } from 'lucide-react';

export default function Search() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') navigate(-1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    
    return videos.filter(video => {
      const matchTitle = video.title.toLowerCase().includes(lowerQuery);
      const matchDesc = video.description.toLowerCase().includes(lowerQuery);
      const categoryMatch = video.categoryIds.some(catId => {
        const cat = categories.find(c => c.id === catId);
        return cat && cat.title.toLowerCase().includes(lowerQuery);
      });
      return matchTitle || matchDesc || categoryMatch;
    });
  }, [query]);

  return (
    <div className="modal-overlay">
      {/* Close button top right */}
      <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', zIndex: 1100 }}>
        <button 
          onClick={() => navigate(-1)} 
          style={{ 
            color: 'white', 
            background: 'rgba(0,0,0,0.5)', 
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          className="hover-opacity"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px', width: '100%' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto 3rem auto' }}>
          <div style={{ position: 'relative', display: 'flex', gap: '1rem', backgroundColor: 'var(--color-bg-card)', borderRadius: '8px', border: '1px solid var(--color-border)', padding: '4px' }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <SearchIcon style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
              <input 
                type="text" 
                placeholder="Search videos" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                style={{
                  width: '100%',
                  padding: '16px 16px 16px 48px',
                  fontSize: '1.1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  color: 'var(--color-text-primary)',
                  outline: 'none'
                }}
              />
            </div>
            <button className="btn btn-brand" style={{ padding: '0 32px' }}>
              Search
            </button>
          </div>
        </div>

        {query && (
          <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.4rem', color: 'white' }}>
              {results.length > 0 ? `Results for "${query}"` : `No results found for "${query}"`}
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {results.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
