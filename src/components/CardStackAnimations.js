import { useEffect } from 'react';

const CardStackAnimations = () => {
  useEffect(() => {
    const handleScroll = () => {
      const serviceCards = document.querySelectorAll('.service-card');
      
      serviceCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate if card is in viewport
        const isInViewport = rect.top < windowHeight && rect.bottom > 0;
        
        if (isInViewport) {
          // Calculate scroll progress for this card
          const cardTop = rect.top;
          const progress = Math.max(0, Math.min(1, (windowHeight - cardTop) / windowHeight));
          
          // Set stacking index based on scroll position
          let stackIndex = Math.floor((1 - progress) * 6);
          stackIndex = Math.max(0, Math.min(5, stackIndex));
          
          // Apply the stacking data attribute
          card.setAttribute('data-stack-index', stackIndex);
        } else {
          // Reset when out of viewport
          card.removeAttribute('data-stack-index');
        }
      });
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial call
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default CardStackAnimations; 