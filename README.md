# Vugar Construction - Modern Website

A complete modernization of the Vugar Construction website built with React 18, Framer Motion, and Three.js. Features a stunning 3D preloader, smooth page transitions, and a professional black & gold design theme.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The application will be available at `http://localhost:3000`

## ✨ Key Features

### 🎨 Design & UI
- **Black & Gold Theme**: Professional color palette with `#0a0a0a`, `#1a1a1a`, `#ffd700`
- **Clean Typography**: Inter and Poppins fonts for modern, readable text
- **3D Effects**: Hover animations with rotateX transforms and glare effects
- **Responsive Design**: Mobile-first approach with breakpoints at 768px and 480px

### 🎭 Animations & Interactions
- **3D Preloader**: Rotating golden cube with Three.js and progress bar
- **Framer Motion**: Smooth page transitions and scroll-triggered animations
- **Hover Effects**: Cards lift with 3D transforms and glowing borders
- **Intersection Observer**: Elements animate when scrolled into view

### 🧭 Navigation & Routing
- **React Router**: Full SPA with proper page routing
- **Dropdown Menus**: Service categories with smooth hover animations
- **Mobile Navigation**: Responsive hamburger menu with backdrop blur
- **Active States**: Visual indicators for current page/section

### 📱 Pages & Structure
- **Home Page**: Hero, About, Services overview, Clients, Contact
- **Service Pages**: Commercial, Residential, Additional Services, Project Management
- **Portfolio Page**: Project showcases (expandable)
- **Contact Page**: Contact information and forms

## 🛠 Technical Stack

### Core Technologies
- **React 18.2.0**: Latest React with concurrent features
- **Framer Motion 10.16.4**: Advanced animations and page transitions
- **React Router DOM 6.8.1**: Client-side routing
- **Three.js 0.150.1**: 3D graphics for preloader
- **@react-three/fiber 8.12.0**: React renderer for Three.js
- **@react-three/drei 9.65.0**: Useful helpers for Three.js

### Development Tools
- **React Scripts 5.0.1**: Build tooling and development server
- **React Icons 4.8.0**: Icon library
- **React Intersection Observer 9.5.2**: Scroll-triggered animations
- **ESLint**: Code quality and consistency

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Preloader.js     # 3D loading screen
│   ├── Navbar.js        # Navigation with dropdowns
│   ├── Hero.js          # Landing section
│   ├── About.js         # Company information
│   ├── Services.js      # Services overview with tabs
│   ├── Clients.js       # Client showcase
│   ├── Contact.js       # Contact information
│   └── Footer.js        # Site footer
├── pages/               # Route components
│   ├── HomePage.js      # Main landing page
│   ├── CommercialPage.js # Commercial construction
│   ├── ResidentialPage.js # Residential services
│   ├── AdditionalServicesPage.js
│   ├── ProjectManagementPage.js
│   ├── PortfolioPage.js
│   └── ContactPage.js
├── App.js              # Main app with routing
├── App.css             # Global styles and variables
└── index.js            # React DOM entry point
```

## 🎯 Component Breakdown

### Preloader Component
- **3D Rotating Cube**: Golden metallic cube with Three.js
- **Progress Animation**: Smooth loading bar with shimmer effect
- **Glare Effects**: Rotating background gradients
- **Auto-dismiss**: Transitions to main app after completion

### Navigation System
- **Fixed Header**: Backdrop blur with gold accent border
- **Dropdown Menus**: Service categories with smooth animations
- **Mobile Responsive**: Collapsible menu with hamburger icon
- **Active States**: Visual feedback for current page

### Hero Section
- **Animated Typography**: Staggered text animations
- **Particle Background**: Floating gold particle effects
- **Call-to-Action**: Phone and portfolio buttons with hover effects
- **Real Content**: Actual company description from website

### Services Overview
- **Tabbed Interface**: Interactive service category switching
- **Smooth Transitions**: AnimatePresence for content changes
- **Service Cards**: 3D hover effects with feature highlights
- **Real Data**: Actual services from Vugar Construction

## 🎨 Styling System

### CSS Variables
```css
:root {
  --primary-black: #0a0a0a;
  --secondary-black: #1a1a1a;
  --accent-black: #2a2a2a;
  --gold: #ffd700;
  --gold-light: #ffed4a;
  --gold-dark: #b8860b;
  --white: #ffffff;
  --gray-light: #f8f9fa;
}
```

### Animation Variants
- **Page Transitions**: Smooth opacity and Y-axis movements
- **Stagger Children**: Sequential element animations
- **Hover States**: Scale and lift transformations
- **Loading States**: Progress and shimmer animations

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px-1199px (adjusted grid)
- **Mobile**: 480px-767px (single column)
- **Small Mobile**: <480px (compact layout)

## 🔧 Customization Guide

### Colors
Update CSS variables in `src/App.css`:
```css
:root {
  --primary-black: #your-color;
  --gold: #your-accent;
}
```

### Fonts
Change font imports in `public/index.html` and update variables:
```css
--font-primary: 'YourFont', sans-serif;
```

### Content
- Update company info in `src/components/Hero.js`
- Modify services in `src/components/Services.js`
- Add projects in service pages under `src/pages/`

## 🚀 Performance Features

### Optimization
- **Code Splitting**: React.lazy for route-based splitting
- **Image Optimization**: WebP format with fallbacks
- **CSS Optimization**: Minimal unused styles
- **Bundle Analysis**: React Scripts built-in analyzer

### Loading Strategy
- **Preloader**: Engaging 3D loading experience
- **Progressive Enhancement**: Core content loads first
- **Intersection Observer**: Animations only when visible
- **Reduced Motion**: Respects user accessibility preferences

## 🔍 SEO & Accessibility

### SEO Optimization
- **Meta Tags**: Comprehensive Open Graph and Twitter cards
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Clean URLs**: React Router with meaningful paths
- **Performance**: Fast loading and Core Web Vitals optimization

### Accessibility Features
- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: ARIA labels and semantic markup
- **Reduced Motion**: Respects `prefers-reduced-motion`
- **Color Contrast**: WCAG AA compliant color ratios
- **Focus Management**: Visible focus indicators

## 🐛 Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Three.js Warnings**
- Deprecated warnings are normal and don't affect functionality
- Update to latest versions when available

**Animation Performance**
- Reduce motion complexity on lower-end devices
- Use `will-change` CSS property sparingly

### Development Tips
- Use React DevTools for component debugging
- Enable Framer Motion DevTools for animation debugging
- Test on multiple devices and browsers
- Monitor bundle size with `npm run build`

## 📞 Contact Information

**Vugar Construction**
- Phone: (548) 333-1419
- Email: info@vugarconstruction.com
- Location: Cambridge, ON
- Website: vugarconstruction.com

## 📄 License

This project is proprietary to Vugar Construction. All rights reserved.

---

Built with ❤️ using React, Framer Motion, and Three.js 