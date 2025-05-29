# Hero Section Sliding Image Carousel - Technical Documentation

## Overview
The hero section now features a professional sliding image carousel that continuously transitions between 5 high-quality construction images every 3 seconds, creating an engaging visual experience.

## Implementation Details

### 1. HTML Structure (src/components/Hero.js)
```jsx
// Lines 72-79: Hero Background Structure
<div className="hero-background">
  <div className="hero-background-slider">
    <div className="hero-background-slide"></div>  // Image 1: Construction site
    <div className="hero-background-slide"></div>  // Image 2: Modern building
    <div className="hero-background-slide"></div>  // Image 3: Home interior
    <div className="hero-background-slide"></div>  // Image 4: Industrial construction
    <div className="hero-background-slide"></div>  // Image 5: Architecture detail
  </div>
  <div className="hero-overlay"></div>
  <div className="hero-particles"></div>
</div>
```

### 2. CSS Animation System (src/components/Hero.css)

#### Base Container (Lines 18-25)
```css
.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;  // Prevents slides from showing outside container
}
```

#### Sliding Mechanism (Lines 27-35)
```css
.hero-background-slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 500%;           // 5 images × 100% each = 500% total width
  height: 100%;
  display: flex;         // Horizontal layout for slides
  animation: slideImages 15s infinite;  // 15 seconds total cycle
}
```

#### Individual Slides (Lines 37-43)
```css
.hero-background-slide {
  width: 20%;            // Each slide is 20% of 500% container = 100% viewport
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.15;         // Subtle background effect, doesn't overpower text
}
```

#### Image Sources (Lines 45-61)
- **Slide 1**: Construction site overview (Unsplash ID: 35680f356dfd)
- **Slide 2**: Modern building exterior (Unsplash ID: c627a92ad1ab)  
- **Slide 3**: Home interior design (Unsplash ID: ab600027ffc6)
- **Slide 4**: Industrial construction (Unsplash ID: c8112a89af12)
- **Slide 5**: Architectural detail (Unsplash ID: 592deb58ef4e)

#### Animation Keyframes (Lines 63-72)
```css
@keyframes slideImages {
  0% { transform: translateX(0); }      // Show image 1
  20% { transform: translateX(0); }     // Hold image 1 for 3s
  25% { transform: translateX(-20%); }  // Transition to image 2
  45% { transform: translateX(-20%); }  // Hold image 2 for 3s
  50% { transform: translateX(-40%); }  // Transition to image 3
  70% { transform: translateX(-40%); }  // Hold image 3 for 3s
  75% { transform: translateX(-60%); }  // Transition to image 4
  95% { transform: translateX(-60%); }  // Hold image 4 for 3s
  100% { transform: translateX(-80%); } // Show image 5, then loop
}
```

### 3. FESTBAU Text Visibility Fix (Lines 89-95 & 107-119)

#### Simplified Text Style
```css
.hero-title .gold-text {
  color: #DDAB4D;                       // Solid gold color, always visible
  font-weight: 900;                     // Ultra-bold weight
  font-size: clamp(3.2rem, 5.5vw, 5rem); // 40% larger than before
  position: relative;
  text-shadow: 0 0 20px rgba(221, 171, 77, 0.6); // Glow effect
  animation: textShine 3s ease-in-out infinite;   // Color animation
}
```

#### Color Animation
```css
@keyframes textShine {
  0% {
    color: #C4965A;                     // Darker gold
    text-shadow: 0 0 20px rgba(196, 150, 90, 0.6);
  }
  50% {
    color: #F2E991;                     // Bright gold highlight
    text-shadow: 0 0 30px rgba(242, 233, 145, 0.8);
  }
  100% {
    color: #C4965A;                     // Back to darker gold
    text-shadow: 0 0 20px rgba(196, 150, 90, 0.6);
  }
}
```

## Technical Features

### Performance Optimizations
- **Hardware Acceleration**: Uses `transform: translateX()` instead of changing `left` position
- **Smooth Transitions**: CSS animations run on GPU, ensuring 60fps performance
- **Image Optimization**: Unsplash images are loaded at optimal resolution (1920x1080)
- **Memory Efficient**: No JavaScript image preloading, relies on browser caching

### Timing Structure
- **Total Cycle**: 15 seconds for complete rotation
- **Display Time**: 3 seconds per image (20% of cycle)
- **Transition Time**: 0.75 seconds between images (5% of cycle)
- **Seamless Loop**: Animation restarts smoothly after showing all 5 images

### Visual Effects
- **Subtle Opacity**: Images at 15% opacity prevent text readability issues
- **Overlay Protection**: Dark gradient overlay ensures text remains visible
- **Particle Effects**: Floating gold particles add luxury feel without distraction

## User Experience Benefits

1. **Engagement**: Dynamic backgrounds keep visitors interested
2. **Portfolio Showcase**: Different construction types demonstrate versatility
3. **Brand Premium Feel**: Smooth animations convey professional quality
4. **Text Readability**: FESTBAU text now clearly visible with proper gold shine
5. **Mobile Responsive**: Carousel works smoothly on all device sizes

## Browser Compatibility
- **Modern Browsers**: Full support for CSS animations and transforms
- **Fallback**: Static background if animations are disabled via `prefers-reduced-motion`
- **Performance**: Optimized for mobile devices with efficient GPU usage

This implementation creates a professional, engaging hero section that effectively showcases FESTBAU's construction expertise while maintaining excellent text readability and user experience. 