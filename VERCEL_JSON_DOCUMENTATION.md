# Vercel.json Configuration Documentation

## Overview
The `vercel.json` file configures how our Vugar Construction website deploys on Vercel's platform. This file ensures proper routing for our single-page React application and optimizes static asset delivery.

## File Location
```
📁 Project Root
└── vercel.json
```

## Complete Configuration

### Lines 1-3: Version and Build Setup
```json
{
  "version": 2,
  "builds": [
```
**Purpose**: Declares Vercel platform version 2 and starts build configuration array

### Lines 4-9: Static Build Configuration  
```json
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "build"
      }
    }
```
**Purpose**: 
- **Line 5**: Tells Vercel to use `package.json` as the build source
- **Line 6**: Uses Vercel's static build preset for React apps
- **Line 8**: Specifies that built files are in the `build` directory (React's default)

### Lines 10-11: Routes Array Start
```json
  ],
  "routes": [
```
**Purpose**: Ends builds array and starts routing configuration

### Lines 12-17: Static Asset Caching
```json
    {
      "src": "/static/(.*)",
      "headers": {
        "cache-control": "public, max-age=31536000, immutable"
      }
    },
```
**Purpose**:
- **Line 13**: Matches all files in `/static/` directory (CSS, JS, images)
- **Line 15**: Sets cache headers for 1 year (31536000 seconds)
- **Immutable**: Tells browsers these files never change

### Lines 18-21: SPA Routing Fallback
```json
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
```
**Purpose**:
- **Line 19**: Matches ANY route pattern
- **Line 20**: Redirects all routes to `index.html` for React Router to handle

### Line 22: Close Configuration
```json
  ]
}
```

## Why This Configuration is Important

### 🔄 Single Page Application (SPA) Support
React Router handles navigation client-side, but when users visit `/commercial` directly or refresh the page, the server needs to serve `index.html` instead of looking for a `/commercial` file.

### ⚡ Performance Optimization
Static assets get cached for 1 year, meaning faster loading for returning visitors. The browser only downloads these files once.

### 🚀 Vercel Integration
This config tells Vercel exactly how to:
1. Build our React app (`npm run build`)
2. Serve static files from the `build` folder
3. Handle routing for our multi-page navigation

## Routes Handled by This Configuration

### Direct Routes (All redirect to index.html):
- `/` → Home page
- `/commercial` → Commercial services  
- `/residential` → Residential services
- `/project-management` → Project management
- `/additional-services` → Additional services
- `/portfolio` → Portfolio showcase
- `/contact` → Contact page
- `/quote` → Quote request

### Static Assets (Cached for 1 year):
- `/static/css/*.css` → Stylesheets
- `/static/js/*.js` → JavaScript bundles  
- `/static/media/*` → Images and fonts

## Deployment Flow

### 1. Build Process
```bash
npm run build
# Creates optimized production build in /build folder
```

### 2. Vercel Deployment
```bash
# Vercel reads vercel.json
# Runs npm run build automatically
# Configures routing rules
# Deploys to CDN
```

### 3. Live Website
- Users visit any URL
- Vercel serves index.html
- React Router takes over navigation
- Static assets load with optimal caching

## Benefits for Vugar Construction Website

### ✅ SEO Friendly
Each page has proper meta tags and can be crawled by search engines

### ✅ Fast Loading
Static asset caching reduces bandwidth and improves load times

### ✅ Reliable Routing  
Direct links to any page work correctly (shareable URLs)

### ✅ Production Ready
Optimized for Vercel's global CDN network

## Troubleshooting

### 404 Errors on Routes
If `/commercial` shows 404 instead of the commercial page:
- Check `vercel.json` is in project root
- Verify the `"dest": "/index.html"` route exists
- Ensure React Router is properly configured

### Static Assets Not Caching
If images/CSS reload on every visit:
- Check the `/static/(.*)` route is present
- Verify cache headers are set correctly
- Clear browser cache to test

---

**This configuration ensures our Vugar Construction website works perfectly on Vercel!** ⚡ 