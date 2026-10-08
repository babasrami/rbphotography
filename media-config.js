/**
 * =========================================================================
 * RB PHOTOGRAPHY - MEDIA CONFIGURATION
 * =========================================================================
 * 
 * HOW TO CHANGE PHOTOS & VIDEOS:
 * -------------------------------------------------------------------------
 * 1. LOCAL FILES:
 *    Place your photos or videos in the "images/" folder of this project.
 *    Then write the path here, for example: "images/my-photo.jpg"
 * 
 * 2. WEB LINKS:
 *    You can also paste any web URL (https://...), such as from Cloudinary,
 *    Imgur, Google Photos, or any hosting service.
 *    Make sure every link is surrounded by quotes: "https://..."
 * 
 * 3. Save this file and refresh your page in the browser!
 * =========================================================================
 */

window.SITE_MEDIA = {
  // -----------------------------------------------------------------------
  // 1. HERO SLIDESHOW (Background of the top screen)
  // Recommended: 3 to 5 high-resolution horizontal/vertical photos (1600px+)
  // -----------------------------------------------------------------------
  heroSlides: [
    "https://res.cloudinary.com/rar7lstj/image/upload/IMG_20261006_161214.jpg",
    "https://res.cloudinary.com/rar7lstj/image/upload/1.jpg",
    "https://res.cloudinary.com/rar7lstj/image/upload/hero2.jpg",
  ],

  // -----------------------------------------------------------------------
  // 2. "WHAT I PHOTOGRAPH" COLLAGE (10 editorial photos)
  // Arranged across the collage section below the hero
  // -----------------------------------------------------------------------
  collage: [
    "https://res.cloudinary.com/rar7lstj/image/upload/RAM_2429.jpg", // 0: Top left wedding couple
    "https://res.cloudinary.com/rar7lstj/image/upload/RAM_2704.jpg", // 1: Top right portrait
    "https://res.cloudinary.com/rar7lstj/image/upload/RAM_1279.jpg", // 2: Mid-left couple
    "https://static.showit.co/400/GGFmQcrYOP1vQLyAQx7NVA/245374/miller-wedding-featured-0168.jpg", // 3: Mid-right detail
    "https://res.cloudinary.com/rar7lstj/image/upload/rwetwt.jpg", // 4: Lower center portrait
    "https://res.cloudinary.com/rar7lstj/image/upload/23523532.jpg", // 5: Lower right portrait
    "https://res.cloudinary.com/rar7lstj/image/upload/qeqweqw.jpg", // 6: Bottom left portrait
    "https://static.showit.co/400/ctnKdS21TVCwDLKFuFlASA/245374/contact-sheet-square.jpg", // 7: Film contact sheet strip
    "https://res.cloudinary.com/rar7lstj/image/upload/RAM_5434.jpg", // 8: Bottom right photo
  ],

  // -----------------------------------------------------------------------
  // 3. SEAMLESS PHOTO GRID (10 square photos, 2 rows of 5)
  // Recommended: 10 square or cropped images
  // -----------------------------------------------------------------------
  grid: [
    "https://static.showit.co/800/ljSTew8vTdyjX51XTsrCAQ/245374/pentax67-p400-california-0054.jpg",
    "https://static.showit.co/800/AFkkDcSVQx4hbILdgF1GfQ/245374/degitz-wedding-film-0074.jpg",
    "https://static.showit.co/800/-qBolNMuSyiZIE6yLxN7SQ/245374/3004302-r1-e011.jpg",
    "https://static.showit.co/800/YT8ktoJFyZ7uNBqI8zNheg/245374/rushton-wedding-6486.jpg",
    "https://static.showit.co/800/hZKXaKoVTlaSff8N0beZ0A/245374/fay-wedding-0775.jpg",
    "https://static.showit.co/800/Cqw_XJWy1KOR14dtW_B9GA/245374/roll-wedding-0261.jpg",
    "https://static.showit.co/800/vUrajhVZNHLTTSWA6p3lTg/245374/trotter-slideshow-0105.jpg",
    "https://static.showit.co/800/ZqYq2xqpqxovmfpP-ag9Pw/245374/miller-wedding-featured-0161.jpg",
    "https://static.showit.co/800/Trsc5jKFTUW8GKKqfQzabQ/245374/miller-wedding-featured-0080.jpg",
    "https://static.showit.co/800/F8vZBrMvwsrjruKpg78uvQ/245374/kostas-wedding-film-1141-small.jpg",
  ],

  // -----------------------------------------------------------------------
  // 4. "BEHIND THE CAMERA" / ABOUT PORTRAIT
  // Recommended: Vertical portrait of Rami Babas
  // -----------------------------------------------------------------------
  about: "https://res.cloudinary.com/rar7lstj/image/upload/me.png",

  // -----------------------------------------------------------------------
  // 5. SELECTED WORK / PORTFOLIO BANNER (3 featured images)
  // Left, Center large, Right
  // -----------------------------------------------------------------------
  portfolio: [
    "https://res.cloudinary.com/rar7lstj/image/upload/RAM_5624bw.jpg",
    "https://res.cloudinary.com/rar7lstj/image/upload/pl.jpg",
    "https://res.cloudinary.com/rar7lstj/image/upload/RAM_3644.jpg",
  ],

  // -----------------------------------------------------------------------
  // 6. TESTIMONIALS SECTION PHOTO
  // Main photo displayed beside the client reviews
  // -----------------------------------------------------------------------
  testimonial: "https://res.cloudinary.com/rar7lstj/image/upload/plbw.jpg",

  // -----------------------------------------------------------------------
  // 7. TIMELESS / NOSTALGIA BANNER
  // Full-width or large editorial film image
  // -----------------------------------------------------------------------
  nostalgia: "https://static.showit.co/800/wh2tXif8TwiT5ND0V7TTGw/245374/contact-sheet-tri-x-annie.jpg",

  // -----------------------------------------------------------------------
  // 8. PHYSICAL MEMORIES / HEIRLOOMS SECTION (4 images)
  // -----------------------------------------------------------------------
  heirlooms: [
    "https://static.showit.co/400/ZwC2TgBDRe2Fs51o16HCPg/shared/3004295-r1-e004.jpg",
    "https://static.showit.co/400/u9jt5-VWQyKIdHM130VaHw/shared/hickswedding-delta-p67-0493.jpg",
    "https://static.showit.co/800/5Pfn_PUMzHLkI5RgS7ty1Q/245374/dscf8461.jpg",
    "https://static.showit.co/800/1DC3iQJLSF-GB82D3z3xLA/shared/386112427_1386859642183418_4639392566103905489_nfull.jpg",
  ],

  // -----------------------------------------------------------------------
  // 9. EXPERIENCE SECTION (Banner, Left vertical, Center frame)
  // -----------------------------------------------------------------------
  experience: {
    banner: "https://static.showit.co/1600/lgL5CFq-Ry27s3gtf8pmTQ/shared/mamiya7-p800-ny-0275.jpg",
    left: "https://res.cloudinary.com/rar7lstj/image/upload/old.jpg",
    center: "https://res.cloudinary.com/rar7lstj/image/upload/88888.jpg",
  },

  // -----------------------------------------------------------------------
  // 10. BACKGROUND VIDEO & POSTER (Contact / "Let's talk about your day")
  // Replace with your own .mp4 video file or a still image poster
  // -----------------------------------------------------------------------
  videoSection: {
    videoSrc: "https://res.cloudinary.com/rar7lstj/image/upload/sasas.jpg",
    poster: "https://res.cloudinary.com/rar7lstj/image/upload/sasas.jpg",
  },

  // -----------------------------------------------------------------------
  // 11. FOOTER 3-IMAGE ROW
  // Three small vertical images beside the footer contact button
  // -----------------------------------------------------------------------
  footerPhotos: [
    "https://static.showit.co/200/to2yMKjsRLea8z7-Fzh-LA/shared/1012968-r1-033-15.jpg",
    "https://static.showit.co/400/RqM2xJN0Tm62TkYJ8J9lgQ/shared/basha-slideshow-0120.jpg",
    "https://static.showit.co/400/SPMUpo75TzabfzncZtmLUw/shared/leica-p800-mckinley-0181.jpg",
  ],
};
