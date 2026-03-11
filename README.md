# Amanda Rhee Design Portfolio 🎨

A modern, elegant portfolio website showcasing design work with a sophisticated navy and rose gold color scheme.

## 🎨 Color Scheme

Your portfolio now uses a modern, cohesive color palette:

- **Primary Navy**: `#1A365D` - Main brand color for headings and accents
- **Dark Navy**: `#0F1E3D` - Darker shade for depth
- **Rose Gold**: `#A87C7C` - Warm, elegant accent color (replaces the previous gold)
- **Light Rose**: `#C9A476` - Lighter shade for hover states and gradients
- **Background**: `#F8F7F5` - Soft off-white, replacing yellow gradients

## 📸 How to Add Images

### Adding Images to Case Studies

Each case study now has two places to add images:

#### 1. **Hero Image** (at the top of each case study)
Find this section at the top of each `case-study-X.html` file:
```html
<div class="case-study-hero placeholder">
    <strong>Add case study hero image here</strong>
</div>
```

Replace it with:
```html
<div class="case-study-hero">
    <img src="path/to/your/image.jpg" alt="Case study title">
</div>
```

#### 2. **Image Gallery** (in the "Visual Work & Deliverables" section)
Each case study has a gallery section with placeholder emojis:
```html
<div class="gallery-item placeholder" data-label="Logo Design Concepts">
    🎨
</div>
```

Replace with:
```html
<div class="gallery-item">
    <img src="path/to/your/image.jpg" alt="Logo Design Concepts">
</div>
```

### Adding Images to Project Cards

On the main `index.html` page, project cards have placeholder text. To add images:

Find this structure:
```html
<div class="project-image">
    <div class="placeholder-strategy">
        <h3>Project Name</h3>
        <p>Description</p>
    </div>
</div>
```

Simply replace the inner div with an img tag:
```html
<div class="project-image">
    <img src="path/to/your/image.jpg" alt="Project Name">
</div>
```

## 📁 Project Structure

```
Amanda_Portfolio/
├── index.html                 # Main portfolio page
├── case-study-1.html         # L'Oréal Brandstorm
├── case-study-2.html         # Headphone Drawings
├── case-study-3.html         # KASA Merch Design
├── case-study-4.html         # BYNANO Skincare
├── css/
│   └── main.css              # All styles (updated color scheme)
├── js/
│   └── main.js               # Navigation and modal functionality
└── README.md                 # This file
```

## 🖼️ Image Tips

- **Recommended image sizes:**
  - Hero images: `1200px × 600px` or wider (aspect ratio ~2:1)
  - Gallery items: `400px × 300px` (will be displayed in 4:3 aspect ratio)
  - Project card images: `400px × 250px` (will be displayed in 2:1 aspect ratio)

- **Image formats:** JPG, PNG, or WebP work great
- **Performance:** Optimize images before uploading (use Tinypng.com or similar)

## 💡 Using the New Color Scheme

In CSS, use the CSS variables for consistency:

```css
/* Example */
color: var(--primary-navy);        /* Main text/headings */
background: var(--rose-gold);      /* Accents */
border-color: var(--light-rose);   /* Subtle borders */
background: #F8F7F5;               /* Light backgrounds */
```

These variables are already used throughout the site!

## 🚀 Next Steps

1. **Prepare your images:**
   - Take photos or screenshots of your design work
   - Create mockups of the work (especially for KASA designs)
   - Optimize image file sizes

2. **Replace placeholders:**
   - Follow the image replacement instructions above
   - Update file paths to match your folder structure
   - Add meaningful alt text for accessibility

3. **Customization:**
   - Update the L'Oréal project to mention the "CHRONOS" logo
   - Add descriptions for KASA designs
   - Upload product photos and mockups when ready

## 📝 Notes

- All color variables are defined in `css/main.css` in the `:root` section
- The website is fully responsive (mobile-friendly)
- Gallery items have hover effects that scale and lift the images
- Case study hero images have a minimum height of 400px but will scale with content

## ✨ Features

✅ Modern navy & rose gold color scheme  
✅ Responsive design (mobile-friendly)  
✅ Image galleries with hover effects  
✅ Smooth transitions and animations  
✅ Professional typography (Playfair Display + Inter)  
✅ Accessibility-friendly (semantic HTML, alt text support)  
✅ Playing card design theme with diamond accents  

---

**Questions or need help?** The website is fully set up and ready for images. Just follow the image replacement instructions above!
