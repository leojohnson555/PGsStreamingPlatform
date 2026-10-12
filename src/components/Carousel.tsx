import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Carousel.css';

interface CarouselProps {
  title: string;
  children: React.ReactNode;
}

export default function Carousel({ title, children }: CarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth * 0.8 : clientWidth * 0.8;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-section">
      <div className="container">
        <div className="carousel-header">
          <h2 className="carousel-title">{title}</h2>
        </div>
      </div>
      
      <div className="carousel-container">
        <button 
          className="carousel-control left" 
          onClick={() => scroll('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft size={32} />
        </button>
        
        <div className="carousel-track hide-scrollbar" ref={scrollRef}>
          {children}
        </div>
        
        <button 
          className="carousel-control right" 
          onClick={() => scroll('right')}
          aria-label="Scroll right"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </div>
  );
}
