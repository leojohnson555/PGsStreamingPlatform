import { useParams, Link } from 'react-router-dom';
import { categories, videos } from '../data/dummyData';
import VideoCard from '../components/VideoCard';

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);

  if (!category) {
    return (
      <div className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
        <h2>Category not found</h2>
        <Link to="/explore" className="btn btn-primary" style={{ marginTop: '2rem' }}>Explore Categories</Link>
      </div>
    );
  }

  const categoryVideos = videos.filter(v => v.categoryIds.includes(category.id));

  return (
    <div style={{ paddingBottom: '4rem' }}>
      <div style={{ 
        position: 'relative',
        height: '40vh',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '3rem'
      }}>
        {category.imageUrl && (
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${category.imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1
          }}></div>
        )}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0) 25%), linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.6) 100%)',
          zIndex: -1
        }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{category.title}</h1>
          <p style={{ fontSize: '1.2rem', color: '#e5e5e5', maxWidth: '600px' }}>{category.description}</p>
        </div>
      </div>

      <div className="container">
        {categoryVideos.length > 0 ? (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {categoryVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--color-text-secondary)' }}>
            <p>No videos available in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
