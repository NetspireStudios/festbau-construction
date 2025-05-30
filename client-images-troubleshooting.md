# Client Images Not Loading on Vercel - Troubleshooting Guide

## Issue Description
Client logo images are present in the `/public/images/` folder but not displaying on the Vercel production site, while they work fine locally.

## Current Image Setup

### Images Present in `/public/images/`:
✅ **DQ.png** (22KB) - Dairy Queen logo
✅ **Barburrito.png** (21KB) - BarBurrito logo  
✅ **Quesada.png** (22KB) - Quesada logo
✅ **Doughbox.png** (28KB) - DoughBox logo
✅ **Eggmania.png** (28KB) - eggmaniac logo
✅ **Tokyosmoke.png** (14KB) - Tokyo Smoke logo

### Current Code in `src/components/Clients.js`:
```javascript
const clients = [
  {
    name: 'Dairy Queen',
    logo: '/images/DQ.png',
    alt: 'Dairy Queen Logo'
  },
  {
    name: 'BarBurrito',
    logo: '/images/Barburrito.png',
    alt: 'BarBurrito Logo'
  },
  // ... more clients
];
```

## Common Vercel Image Issues & Solutions

### 1. **Case Sensitivity Issue** (Most Likely)
**Problem**: Vercel runs on Linux (case-sensitive) while Windows development is case-insensitive.

**Solution A - Check File Names**:
Verify exact file names match the code:
- File: `DQ.png` → Code: `/images/DQ.png` ✅
- File: `Barburrito.png` → Code: `/images/Barburrito.png` ✅
- File: `Quesada.png` → Code: `/images/Quesada.png` ✅

**Solution B - Use Lowercase Names** (Recommended):
Rename all files to lowercase and update code:
```bash
# Rename files to lowercase
DQ.png → dq.png
Barburrito.png → barburrito.png
Quesada.png → quesada.png
Doughbox.png → doughbox.png
Eggmania.png → eggmania.png
Tokyosmoke.png → tokyosmoke.png
```

### 2. **Build Process Issue**
**Problem**: Images might not be included in Vercel build.

**Solution**: Add images to git and verify deployment:
```bash
git add public/images/*.png
git commit -m "Ensure client logos are included in deployment"
git push origin master
```

### 3. **Path Resolution Issue**
**Problem**: Vercel might need explicit public path reference.

**Solution**: Try alternative path formats:
```javascript
// Option 1: Relative path (current)
logo: '/images/DQ.png'

// Option 2: Explicit public path
logo: './images/DQ.png'

// Option 3: Process env path
logo: `${process.env.PUBLIC_URL}/images/DQ.png`
```

### 4. **MIME Type Issue**
**Problem**: Vercel might not serve PNG files correctly.

**Solution**: Add `vercel.json` configuration:
```json
{
  "headers": [
    {
      "source": "/images/(.*)",
      "headers": [
        {
          "key": "Content-Type",
          "value": "image/png"
        }
      ]
    }
  ]
}
```

## Recommended Fix Steps

### Step 1: Rename Files to Lowercase
```bash
# In public/images/ folder
mv DQ.png dq.png
mv Barburrito.png barburrito.png  
mv Quesada.png quesada.png
mv Doughbox.png doughbox.png
mv Eggmania.png eggmania.png
mv Tokyosmoke.png tokyosmoke.png
```

### Step 2: Update Code in `Clients.js`
```javascript
const clients = [
  {
    name: 'Dairy Queen',
    logo: '/images/dq.png',
    alt: 'Dairy Queen Logo'
  },
  {
    name: 'BarBurrito', 
    logo: '/images/barburrito.png',
    alt: 'BarBurrito Logo'
  },
  {
    name: 'Quesada Burritos & Tacos',
    logo: '/images/quesada.png',
    alt: 'Quesada Burritos & Tacos Logo'
  },
  {
    name: 'DoughBox Wood Fired Pizza',
    logo: '/images/doughbox.png',
    alt: 'DoughBox Wood Fired Pizza Logo'
  },
  {
    name: 'eggmaniac',
    logo: '/images/eggmania.png',
    alt: 'eggmaniac Logo'
  },
  {
    name: 'Tokyo Smoke',
    logo: '/images/tokyosmoke.png',
    alt: 'Tokyo Smoke Logo'
  }
];
```

### Step 3: Verify Git Tracking
```bash
git add public/images/
git status  # Verify all images are tracked
```

### Step 4: Test Deployment
```bash
git commit -m "Fix client logo paths for Vercel deployment"
git push origin master
```

## Debugging Commands

### Check Vercel Deployment Logs:
```bash
vercel logs
```

### Verify Image Accessibility:
Test direct URL access:
- https://yoursite.vercel.app/images/dq.png
- https://yoursite.vercel.app/images/barburrito.png

### Local Testing:
```bash
npm run build
npm run start  # Test production build locally
```

## Alternative Solutions

### Option 1: Use Base64 Encoding
Convert small logos to base64 and embed directly:
```javascript
const clients = [
  {
    name: 'Dairy Queen',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...',
    alt: 'Dairy Queen Logo'
  }
];
```

### Option 2: Use External CDN
Upload images to Cloudinary/ImageKit:
```javascript
const clients = [
  {
    name: 'Dairy Queen',
    logo: 'https://res.cloudinary.com/yourcloud/image/upload/dq.png',
    alt: 'Dairy Queen Logo'
  }
];
```

### Option 3: Use Next.js Image Component
If migrating to Next.js:
```javascript
import Image from 'next/image';

<Image
  src="/images/dq.png"
  alt="Dairy Queen Logo"
  width={120}
  height={80}
/>
```

## Status Tracking
- ❌ Images not loading on Vercel
- ⏳ Case sensitivity fix pending
- ⏳ File renaming needed
- ⏳ Code update required
- ⏳ Testing deployment pending 