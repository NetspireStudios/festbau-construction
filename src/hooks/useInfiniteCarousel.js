import { useEffect, useRef } from 'react';

export const useInfiniteCarousel = (items) => {
  const carouselRef = useRef(null);
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel || items.length === 0) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = carousel;
      const cardWidth = 320; // Match the mobile card width
      const gap = 24; // 1.5rem = 24px gap
      const itemWidth = cardWidth + gap;
      
      // Check if we're at the end (with small tolerance for floating point issues)
      if (scrollLeft >= scrollWidth - clientWidth - 10) {
        isScrollingRef.current = true;
        carousel.scrollTo({
          left: 0,
          behavior: 'smooth'
        });
        
        // Reset flag after animation
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
      
      // Check if we're at the beginning and scrolling backwards
      else if (scrollLeft <= 10) {
        isScrollingRef.current = true;
        carousel.scrollTo({
          left: scrollWidth - clientWidth,
          behavior: 'smooth'
        });
        
        // Reset flag after animation
        setTimeout(() => {
          isScrollingRef.current = false;
        }, 500);
      }
    };

    // Add scroll event listener
    carousel.addEventListener('scroll', handleScroll);
    
    // Handle touch interactions for better mobile experience
    let startX = 0;
    let scrollStart = 0;
    
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      scrollStart = carousel.scrollLeft;
    };
    
    const handleTouchMove = (e) => {
      if (!startX) return;
      
      const currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      carousel.scrollLeft = scrollStart + diff;
    };
    
    const handleTouchEnd = () => {
      startX = 0;
      scrollStart = 0;
      // Trigger scroll check after touch ends
      setTimeout(handleScroll, 100);
    };
    
    carousel.addEventListener('touchstart', handleTouchStart, { passive: true });
    carousel.addEventListener('touchmove', handleTouchMove, { passive: true });
    carousel.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      carousel.removeEventListener('scroll', handleScroll);
      carousel.removeEventListener('touchstart', handleTouchStart);
      carousel.removeEventListener('touchmove', handleTouchMove);
      carousel.removeEventListener('touchend', handleTouchEnd);
    };
  }, [items]);

  return carouselRef;
}; 