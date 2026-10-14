# How to Change Photos & Videos on RB Photography

You can easily replace any photo or video on your website at any time simply by copy-pasting your own photo files or links.

---

## ⚡ Quick 1-Minute Method: Using `media-config.js`

Open the file [`media-config.js`](file:///c:/Users/babas/Documents/my%20site%20Oct%202026/portfolio_test%20-v2/media-config.js) in your text editor.

You will see clean, labeled lists for each section of the site:

### 1. If using your own image/video files on your computer:
1. Copy your photos or videos into the `images/` folder inside your project.
2. Open `media-config.js`.
3. Change the path to your file name, for example:
   ```javascript
   about: "images/my-portrait.jpg",
   ```
   Or for the video:
   ```javascript
   videoSection: {
     videoSrc: "images/my-wedding-film.mp4",
     poster: "images/my-video-cover.jpg",
   },
   ```

### 2. If using links from the web:
You can paste any web URL directly:
```javascript
about: "https://your-website.com/photo.jpg",
```

---

## 📍 Where Each Photo Appears

| Section in `media-config.js` | What It Controls | Recommended Size / Aspect |
|---|---|---|
| `heroSlides` | The 5 full-screen photos in the top slideshow | High resolution (1600px+ width) |
| `collage` | The 9 editorial photos arranged in the "What I photograph" collage | Mix of portrait (3:4) & horizontal |
| `grid` | The 10 photos in the seamless 5-column photo grid | Square (1:1) or 4:5 ratio |
| `about` | The vertical portrait of Rami in "Behind the Camera" | Vertical portrait (4:5 / 3:4) |
| `portfolio` | The 3 featured series images under "Selected Work" | 1 vertical, 1 wide center, 1 vertical |
| `testimonial` | The large photo beside client reviews | High-quality portrait |
| `nostalgia` | The large image in the "Unrushed moments" film section | Large vertical or contact sheet |
| `heirlooms` | The 4 photos in the "Physical memories" section | 2 small details, 1 large left, 1 right |
| `experience` | The banner, left photo, and framed center photo in Experience | Wide banner + 2 photos |
| `videoSection` | Background video & poster image in "Let's talk about your day" | `.mp4` video + vertical/horizontal poster |
| `footerPhotos` | The 3 small photos in the center of the footer | 3 vertical photos (4:5) |

---

## 💡 Pre-loaded Photos Already in your `images/` folder

Your existing photography collection is already copied into [`images/`](file:///c:/Users/babas/Documents/my%20site%20Oct%202026/portfolio_test%20-v2/images):
- **Weddings**: `images/w01-960.webp` through `images/w07-960.webp`
- **Portraits**: `images/p01-960.webp` through `images/p04-960.webp`
- **Nature**: `images/n01-960.webp` through `images/n28-960.webp`
- **Architecture**: `images/a01-960.webp` through `images/a24-960.webp`

You can use any of these immediately in `media-config.js` by simply writing their path!
