# Image Gallery Implementation Guide

## Overview

Your portfolio now has built-in image gallery sections on every case study page, plus support for images in project cards on the main page.

## Gallery Features

✨ **Responsive Grid**: Automatically adjusts from 4 columns on desktop to 1 on mobile  
✨ **Hover Effects**: Images scale up slightly on hover with shadow effects  
✨ **Labeled Placeholders**: Shows what type of image each spot should have  
✨ **Optimized**: Images load efficiently and maintain proper aspect ratios  

## Image Gallery HTML Structure

### Basic Placeholder Item
```html
<div class="gallery-item placeholder" data-label="Logo Design Concepts">
    🎨
</div>
```

### Image Item (How to Replace)
```html
<div class="gallery-item">
    <img src="images/my-logo-design.jpg" alt="Logo Design Concepts">
</div>
```

## Adding Images to Case Studies

### Step-by-Step

1. **Create an images folder** (optional but recommended):
   ```
   assets/images/
       ├── case-study-1/
       └── case-study-2/
   ```

2. **Update the HTML** in each case study:
   - Find all `<div class="gallery-item placeholder">` elements
   - Replace with your image path

3. **Example transformation**:

**Before:**
```html
<div class="gallery-item placeholder" data-label="Logo Design Concepts">
    🎨
</div>
<div class="gallery-item placeholder" data-label="Brand Guidelines">
    📋
</div>
```

**After:**
```html
<div class="gallery-item">
    <img src="assets/images/case-study-1/logo-concepts.jpg" alt="Logo Design Concepts">
</div>
<div class="gallery-item">
    <img src="assets/images/case-study-1/brand-guidelines.jpg" alt="Brand Guidelines">
</div>
```

## Case Study Hero Images

These large images appear at the very top of each case study:

### Before:
```html
<div class="case-study-hero placeholder">
    <strong>Add case study hero image here</strong>
</div>
```

### After:
```html
<div class="case-study-hero">
    <img src="assets/images/case-study-1/hero-image.jpg" alt="L'Oréal Brandstorm Hero">
</div>
```

## Project Card Images (Main Page)

On `index.html`, you can add images to the project preview cards:

### Before:
```html
<div class="project-image">
    <div class="placeholder-strategy">
        <h3>L'Oréal Brandstorm</h3>
        <p>Immersive Experience Design</p>
    </div>
</div>
```

### After:
```html
<div class="project-image">
    <img src="assets/images/case-study-1/thumb.jpg" alt="L'Oréal Brandstorm">
</div>
```

## CSS Classes for Styling

The gallery system uses these classes (already styled):

| Class | Purpose |
|-------|---------|
| `.gallery-section` | Container for the entire gallery |
| `.gallery-grid` | Grid layout for items |
| `.gallery-item` | Individual gallery item |
| `.gallery-item.placeholder` | Placeholder with emoji |
| `.case-study-hero` | Large hero image at top |
| `.case-study-hero.placeholder` | Placeholder hero |

## Image Best Practices

### File Sizes & Formats
- Use **JPEG** for photographs and mockups
- Use **PNG** for graphics or transparent elements
- Use **WebP** for modern browsers (with fallback)
- **Optimize**: Compress images using TinyPNG, Squoosh, or ImageOptim
- Target: Keep images under 500KB each

### Recommended Dimensions

| Image Type | Size | Aspect Ratio | File Size |
|------------|------|--------------|-----------|
| Hero Image | 1200×600px | 2:1 | <300KB |
| Gallery Item | 400×300px | 4:3 | <100KB |
| Project Thumb | 400×250px | 8:5 | <100KB |

### Alt Text Best Practices
```html
<!-- Good alt text -->
<img src="logo.jpg" alt="L'Oréal Multiverse Brand Logo Design">

<!-- Better alt text -->
<img src="logo.jpg" alt="Geometric multiverse logo featuring interconnected diamond shapes in navy and rose gold">

<!-- Too vague (avoid) -->
<img src="logo.jpg" alt="image">
```

## Folder Structure Recommendation

```
Amanda_Portfolio/
├── index.html
├── case-study-*.html
├── assets/
│   ├── images/
│   │   ├── case-study-1/
│   │   │   ├── hero.jpg
│   │   │   ├── logo-concepts.jpg
│   │   │   ├── brand-guidelines.jpg
│   │   │   └── design-system.jpg
│   │   ├── case-study-2/
│   │   ├── case-study-3/
│   │   └── case-study-4/
│   ├── css/
│   └── js/
└── README.md
```

## Example: Complete Case Study Gold Update

Here's what a fully updated case study gallery might look like:

```html
<!-- Hero Image -->
<div class="case-study-hero">
    <img src="assets/images/case-study-1/hero-multiverse.jpg" alt="L'Oréal Brandstorm Multiverse Campaign Hero Image">
</div>

<!-- ... rest of content ... -->

<!-- Image Gallery -->
<div class="gallery-section">
    <h3>Visual Work & Deliverables</h3>
    <div class="gallery-grid">
        <div class="gallery-item">
            <img src="assets/images/case-study-1/logo-concepts.jpg" alt="Three logo design concepts for Multiverse brand">
        </div>
        <div class="gallery-item">
            <img src="assets/images/case-study-1/brand-guidelines.pdf" alt="Brand guidelines document with color palette and typography">
        </div>
        <div class="gallery-item">
            <img src="assets/images/case-study-1/identity-system.jpg" alt="Complete visual identity system showing applications">
        </div>
        <div class="gallery-item">
            <img src="assets/images/case-study-1/packaging.jpg" alt="Premium packaging design featuring the brand identity">
        </div>
    </div>
</div>
```

## Image Gallery Styling

The galleries automatically have:
- ✨ **Hover Scale**: Images grow slightly on hover
- ✨ **Smooth Shadow**: Drop shadow expands on hover
- ✨ **Responsive Layout**: 4 columns → 2 columns → 1 column on smaller screens
- ✨ **Rounded Corners**: 8px border radius on all items
- ✨ **Border Accent**: Rose gold border on all items
- ✨ **Labeled Placeholders**: Data-label attribute shows on hover (before you add images)

## Troubleshooting

### Image not showing?
- Check the file path is correct (relative to index.html)
- Ensure the image file exists in the folder
- Check browser console (F12) for 404 errors

### Image looks stretched?
- Ensure your image is the recommended aspect ratio
- The CSS will crop/fit images to maintain proportions

### Image too small or too large?
- Check the recommended dimensions above
- The gallery items have fixed aspect ratios (4:3), images will be cropped if not perfect size

---

You're all set! Start adding your beautiful design work to showcase your portfolio. 🎨✨
