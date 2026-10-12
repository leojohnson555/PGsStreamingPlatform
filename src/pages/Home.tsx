import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import VideoCard from '../components/VideoCard';
import SeriesCard from '../components/SeriesCard';
import CategoryCard from '../components/CategoryCard';
import { videos, seriesList, categories } from '../data/dummyData';

export default function Home() {
  const heroVideos = [
    videos.find(v => v.id === 'v101'), 
    videos.find(v => v.id === 'v401'),
    videos.find(v => v.id === 'v501'),
  ].filter(Boolean) as typeof videos;

  const collections = [
    {
      id: 'coll1',
      title: 'Featured Collection',
      videoIds: ['v102', 'v202', 'v302', 'v402', 'v502', 'v602']
    },
    {
      id: 'coll2',
      title: 'Traditional Art Forms',
      videoIds: ['v103', 'v203', 'v303', 'v3']
    },
    {
      id: 'coll3',
      title: 'Agricultural Heritage',
      videoIds: ['v501', 'v503', 'v1', 'v5']
    },
    {
      id: 'coll4',
      title: 'Stories & Rituals',
      videoIds: ['v101', 'v301', 'v601', 'v603']
    },
    {
      id: 'coll5',
      title: 'Recently Added',
      videoIds: ['v2', 'v4', 'v6', 'v403', 'v201']
    }
  ];

  const firstCollection = collections[0];
  const remainingCollections = collections.slice(1);

  return (
    <div className="page-home">
      <Hero videos={heroVideos} />
      
      {/* Initial Video Row */}
      {firstCollection && (
        <Carousel key={firstCollection.id} title={firstCollection.title}>
          {firstCollection.videoIds
            .map(id => videos.find(v => v.id === id))
            .filter(Boolean)
            .map(video => (
              <div key={video!.id} className="carousel-video-item">
                <VideoCard video={video!} />
              </div>
            ))}
        </Carousel>
      )}

      {/* Series Row - after the first collection */}
      <Carousel title="Popular Series">
        {seriesList.map(series => (
          <div key={series.id} className="carousel-series-item">
            <SeriesCard series={series} />
          </div>
        ))}
      </Carousel>

      {/* Remaining Video Rows */}
      {remainingCollections.map(collection => (
        <Carousel key={collection.id} title={collection.title}>
          {collection.videoIds
            .map(id => videos.find(v => v.id === id))
            .filter(Boolean)
            .map(video => (
              <div key={video!.id} className="carousel-video-item">
                <VideoCard video={video!} />
              </div>
            ))}
        </Carousel>
      ))}

      <div className="container" style={{ margin: '2rem auto' }}>
        <h2 style={{ marginBottom: '1.5rem', fontSize: '1.4rem' }}>Explore by Category</h2>
        <div className="category-grid">
          {categories.map(category => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
