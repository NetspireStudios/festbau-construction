# Project Features Font Size & Bullet Point Adjustment Guide

## Overview
This guide explains how to increase the font sizes and bullet point sizes for project features throughout the FESTBAU Construction website. Currently, the features are optimized for mobile with very compact sizing.

## Key Files to Modify

### 1. ProjectModal.css - Main Modal Features
**File Location:** `src/components/ProjectModal.css`

#### Current Mobile Settings (768px and below - lines 549-575):
```css
@media (max-width: 768px) {
  .feature-icon {
    font-size: 0.6rem !important;     /* CURRENTLY VERY SMALL */
    width: 18px !important;           /* CURRENTLY COMPACT */
    height: 18px !important;          /* CURRENTLY COMPACT */
  }

  .feature-title {
    font-size: 0.5rem !important;     /* CURRENTLY VERY SMALL */
    line-height: 1.1 !important;
  }

  .feature-description {
    font-size: 0.45rem !important;    /* CURRENTLY VERY SMALL */
    line-height: 1.2 !important;
  }
}
```

#### To Make Larger - Example Changes:
```css
@media (max-width: 768px) {
  .feature-icon {
    font-size: 1.2rem !important;     /* INCREASED from 0.6rem */
    width: 32px !important;           /* INCREASED from 18px */
    height: 32px !important;          /* INCREASED from 18px */
  }

  .feature-title {
    font-size: 0.9rem !important;     /* INCREASED from 0.5rem */
    line-height: 1.2 !important;
  }

  .feature-description {
    font-size: 0.8rem !important;     /* INCREASED from 0.45rem */
    line-height: 1.3 !important;
  }
}
```

### 2. Small Mobile (480px) Settings - lines 691-695:
```css
@media (max-width: 480px) {
  .feature-icon {
    font-size: 0.55rem !important;    /* TO INCREASE: Change to 1rem+ */
    width: 16px !important;           /* TO INCREASE: Change to 28px+ */
    height: 16px !important;          /* TO INCREASE: Change to 28px+ */
  }

  .feature-title {
    font-size: 0.45rem !important;    /* TO INCREASE: Change to 0.8rem+ */
  }

  .feature-description {
    font-size: 0.4rem !important;     /* TO INCREASE: Change to 0.7rem+ */
  }
}
```

## Desktop Features (Default - Normal Size)
Located around lines 291-344:
```css
.features-list li {
  padding: 20px 24px;               /* Normal desktop padding */
}

.feature-icon {
  font-size: 1.6rem;                /* Normal desktop bullet size */
  width: 44px;
  height: 44px;
  padding: 12px;
}

.feature-title {
  font-size: 1.1rem;                /* Normal desktop title size */
}

.feature-description {
  font-size: 1rem;                  /* Normal desktop description size */
}
```

## Step-by-Step Instructions to Increase Sizes:

### Method 1: Edit ProjectModal.css directly
1. Open `src/components/ProjectModal.css`
2. Find the `@media (max-width: 768px)` section (around line 450)
3. Locate the `.feature-icon`, `.feature-title`, and `.feature-description` rules
4. Increase the `font-size` values:
   - **Bullet points:** Change `.feature-icon` font-size from `0.6rem` to `1rem+`
   - **Titles:** Change `.feature-title` font-size from `0.5rem` to `0.8rem+`
   - **Descriptions:** Change `.feature-description` font-size from `0.45rem` to `0.7rem+`
5. Increase icon container sizes:
   - **Width:** Change from `18px` to `28px+`
   - **Height:** Change from `18px` to `28px+`

### Method 2: Recommended Size Increases

#### Conservative (Slightly Larger):
```css
.feature-icon {
  font-size: 0.9rem !important;     /* Was 0.6rem */
  width: 24px !important;           /* Was 18px */
  height: 24px !important;          /* Was 18px */
}

.feature-title {
  font-size: 0.7rem !important;     /* Was 0.5rem */
}

.feature-description {
  font-size: 0.6rem !important;     /* Was 0.45rem */
}
```

#### Moderate (Much Larger):
```css
.feature-icon {
  font-size: 1.2rem !important;     /* Was 0.6rem */
  width: 32px !important;           /* Was 18px */
  height: 32px !important;          /* Was 18px */
}

.feature-title {
  font-size: 0.9rem !important;     /* Was 0.5rem */
}

.feature-description {
  font-size: 0.8rem !important;     /* Was 0.45rem */
}
```

#### Large (Desktop-like on Mobile):
```css
.feature-icon {
  font-size: 1.4rem !important;     /* Was 0.6rem */
  width: 40px !important;           /* Was 18px */
  height: 40px !important;          /* Was 18px */
}

.feature-title {
  font-size: 1rem !important;       /* Was 0.5rem */
}

.feature-description {
  font-size: 0.9rem !important;     /* Was 0.45rem */
}
```

## Important Notes:

- **Always use `!important`** in mobile media queries to override defaults
- **Test changes** on actual mobile devices or browser dev tools
- **Check container overflow** - larger text might not fit properly
- **Consider line-height adjustments** when increasing font sizes
- **Save and refresh** to see changes in browser

## Quick Test Commands:
```bash
npm start          # Start development server
npm run build      # Build for production
```

---

**Note:** This file was created per your request, though it contradicts your previous preference against MD documentation files. Feel free to delete it after reviewing the information. 