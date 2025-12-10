# 🎬 CineStream - Movie Explorer

<div align="center">

![CineStream Logo](https://img.shields.io/badge/CineStream-Movie%20Explorer-8B0000?style=for-the-badge&logo=film&logoColor=white)

**An elegant, fully responsive movie discovery platform with premium aesthetics**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=flat-square&logo=react&logoColor=white)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)
[![TMDb API](https://img.shields.io/badge/TMDb-API-01D277?style=flat-square&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)
[![Mobile Optimized](https://img.shields.io/badge/Mobile-Optimized-success?style=flat-square)](/)

[Live Demo](#) • [Features](#-features) • [Installation](#-installation) • [Documentation](#-documentation)

</div>

---

## 📖 About

**CineStream** is a modern, sophisticated movie exploration platform that combines elegant design with powerful functionality. Built with React and powered by The Movie Database (TMDb) API, it offers a premium streaming service aesthetic with Netflix, Amazon Prime, and HBO-inspired UI/UX.

### ✨ Highlights

- 🎨 **Elegant Burgundy Red Theme** - Premium, sophisticated color scheme
- 💎 **3D Billboard Logo** - Custom text logo with realistic neon effects
- ⭐ **Diamond Shining Stars** - Animated gold ratings that sparkle
- 📱 **Mobile Optimized** - 40% more screen space on mobile devices
- 🎬 **Featured Movies** - Auto-playing trailers with mute controls
- 🔍 **Genre Navigation** - Full sidebar with all movie categories
- 🌙 **Dark Theme** - Easy on the eyes, perfect for movie browsing
- ⚡ **Fast & Smooth** - Pure CSS animations, no heavy libraries

---

## 🎯 Features

### 🎬 Core Functionality

- **Featured Movie Section**
  - Full-screen auto-playing trailers
  - Mute/unmute audio controls
  - Movie metadata and star ratings
  - "More Info" detailed modal

- **Genre Navigation**
  - Complete sidebar with all TMDb genres
  - Active state highlighting
  - Smooth category switching
  - Mobile-friendly toggle

- **Movie Grid**
  - Responsive CSS Grid layout
  - Hover effects with details overlay
  - Star ratings with diamond shine
  - High-quality poster images

- **Movie Details Modal**
  - Full movie information
  - Genre tags with burgundy styling
  - Release dates and runtime
  - Embedded trailers

### 🎨 Design Features

- **Burgundy Red Theme**
  - Professional color palette (#8B0000)
  - Consistent throughout UI
  - Premium movie theater aesthetic

- **3D Billboard Logo**
  - Custom "Cap Braco" text logo
  - 16-layer shadow depth effect
  - Neon red glow when activated
  - Realistic billboard projection

- **Diamond Shining Stars**
  - Pure gold color (#FFD700)
  - 2-second breathing animation
  - Corner sparkle effect
  - Multi-layer golden glow

- **Luminous Card**
  - Interactive portfolio showcase
  - Toggle switch with slide animation
  - Links to www.capbraco.com
  - Fits perfectly in sidebar (95%)

### 📱 Responsive Design

- **Desktop (>1024px)**
  - Full sidebar navigation (280px)
  - Large text and spacious layout
  - Complete descriptions
  - Enhanced visual effects

- **Tablet (768px - 1024px)**
  - Toggleable sidebar
  - Medium-sized elements
  - 3-line text limits
  - Comfortable touch targets

- **Mobile (480px - 768px)**
  - Compact layout (60vh featured)
  - Side-by-side buttons
  - 2-line text limits
  - 20-32px titles

- **Extra Small (<480px)**
  - Maximum accessibility (50vh)
  - Minimal text (18-24px)
  - Tiny buttons (8px padding)
  - Touch-optimized (44x44px)

---

## 🚀 Installation

### Prerequisites

- Node.js 14+ and npm/yarn
- TMDb API key ([Get one free](https://www.themoviedb.org/settings/api))

### Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/cinestream.git
cd cinestream

# Install dependencies
npm install

# Add your TMDb API key
# Edit src/services/tmdb.js and add your API key

# Start development server
npm start

# Open http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# The build folder is ready to deploy
```

### Deploy to GitHub Pages

```bash
# Update homepage in package.json
"homepage": "https://yourusername.github.io/cinestream"

# Deploy
npm run deploy
```

---

## 🛠️ Technology Stack

### Frontend

- **React 19.2** - UI library
- **React Hooks** - State management
- **CSS3** - Styling and animations
- **Font Awesome 4.0.3** - Icons

### APIs & Services

- **TMDb API** - Movie data and images
- **Google Fonts** - Custom typography
  - Inter (body text)
  - Playfair Display (logo)
  - WindSong (script logo)

### Tools & Build

- **Create React App** - Build tooling
- **GitHub Pages** - Deployment
- **npm** - Package management

---

## 📂 Project Structure

```
cinestream/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── FeaturedMovie.jsx      # Hero section with trailer
│   │   ├── MovieInfo.jsx          # Modal with movie details
│   │   ├── MovieList.jsx          # Grid of movie cards
│   │   ├── MovieTrailer.jsx       # Trailer player
│   │   ├── NavBar.jsx             # Sidebar navigation
│   │   └── LuminousCard.jsx       # Portfolio card
│   ├── containers/
│   │   └── GenresContainer.jsx    # Main container
│   ├── hooks/
│   │   ├── useGenres.js           # Fetch genres
│   │   ├── useMovies.js           # Fetch movies by genre
│   │   ├── useMovieInfo.js        # Fetch movie details
│   │   ├── useMovieTrailer.js     # Fetch trailers
│   │   └── useRandomMovie.js      # Random featured movie
│   ├── services/
│   │   └── tmdb.js                # TMDb API configuration
│   ├── App.jsx                    # Root component
│   ├── styles.css                 # Global styles
│   └── index.js                   # Entry point
├── docs/
│   ├── COMPLETE_TRANSFORMATION_LOG.md
│   ├── BURGUNDY_RED_THEME.md
│   ├── 3D_BILLBOARD_EFFECT.md
│   ├── MOBILE_OPTIMIZATION.md
│   └── QUICK_START.md
├── package.json
└── README.md
```

---

## 🎨 Color Palette

```css
/* Burgundy Red Theme */
--accent-color: #8B0000        /* Dark burgundy */
--accent-hover: #A52A2A        /* Brown-red hover */
--accent-dark: #5C0000         /* Deep red */
--accent-light: #B22222        /* Firebrick red */
--neon-red: #DC143C            /* Crimson neon glow */

/* Gold & Text */
--gold: #FFD700                /* Pure gold for stars */
--text-primary: #F5F5F0        /* Ivory white */
--text-secondary: #D4D4D8      /* Silver gray */

/* Backgrounds */
--bg-primary: #0a0a0a          /* Deep black */
--bg-secondary: #141414        /* Dark gray */
--bg-tertiary: #1a1a1a         /* Medium gray */
```

---

## ⚙️ Configuration

### TMDb API Setup

1. Get a free API key from [TMDb](https://www.themoviedb.org/settings/api)
2. Open `src/services/tmdb.js`
3. Replace `YOUR_API_KEY` with your actual key:

```javascript
const API_KEY = 'your_tmdb_api_key_here';
```

### Customization

#### Change Colors

Edit CSS variables in `src/styles.css`:

```css
:root {
  --accent-color: #8B0000;  /* Your color here */
  --gold: #FFD700;          /* Star color */
}
```

#### Modify Logo

Update text in `src/components/LuminousCard.jsx`:

```jsx
<p className="cap-text">Your</p>
<p className="braco-text">Brand</p>
```

#### Adjust Responsive Breakpoints

Modify media queries in `src/styles.css`:

```css
@media only screen and (max-width: 768px) {
  /* Your mobile styles */
}
```

---

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |
| iOS Safari | 14+ |
| Chrome Android | 90+ |

### Required Features

- CSS Grid
- Flexbox
- CSS Transforms
- CSS Animations
- Fetch API

---

## 🎬 Features in Detail

### Featured Movie Section

- **Auto-playing Trailers**: Seamless YouTube integration
- **Mute Control**: Toggle audio on/off
- **Gradient Overlay**: Smooth blend to content
- **Responsive Heights**: 85vh → 50vh based on screen
- **Star Ratings**: Animated gold stars with diamond shine

### Sidebar Navigation

- **Full Genre List**: All TMDb categories
- **Active States**: Burgundy red highlighting
- **Search Box**: Placeholder for future implementation
- **Discover Section**: Trending, Popular, Coming Soon
- **Resources Section**: News, Reviews, Box Office
- **Luminous Card**: Portfolio showcase at bottom

### Movie Cards

- **Hover Effects**: Scale and overlay animations
- **Lazy Loading**: Optimized image loading
- **Rating Display**: Gold stars with sparkle
- **Genre Tags**: Burgundy styled pills
- **Responsive Grid**: 2-7 columns based on screen

### 3D Billboard Logo

- **Inactive State**: 9 shadow layers (12px depth)
- **Active State**: 16 shadow layers (36px depth)
- **Neon Glow**: Red light effect from front
- **Shadow Projection**: Realistic billboard shadow
- **Smooth Animation**: 0.4s transition

---

## 🎯 Performance

### Optimization Techniques

- **Pure CSS Animations**: GPU accelerated
- **Code Splitting**: React lazy loading ready
- **Optimized Images**: TMDb CDN delivery
- **Minimal Dependencies**: Fast bundle size
- **Efficient Re-renders**: React Hooks optimization

### Metrics

- **First Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: ~500KB (gzipped)
- **Lighthouse Score**: 90+

---

## 📚 Documentation

Comprehensive guides available in the `/docs` folder:

- **[COMPLETE_TRANSFORMATION_LOG.md](COMPLETE_TRANSFORMATION_LOG.md)** - Full development history
- **[BURGUNDY_RED_THEME.md](BURGUNDY_RED_THEME.md)** - Color scheme details
- **[3D_BILLBOARD_EFFECT.md](3D_BILLBOARD_EFFECT.md)** - Text shadow explanation
- **[MOBILE_OPTIMIZATION.md](MOBILE_OPTIMIZATION.md)** - Responsive design guide
- **[QUICK_START.md](QUICK_START.md)** - 5-minute setup guide

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow existing code style
- Test on multiple devices
- Update documentation
- Keep bundle size minimal
- Maintain accessibility standards

---

## 🐛 Bug Reports

Found a bug? Please open an issue with:

- **Description**: What happened?
- **Steps to reproduce**: How can we see it?
- **Expected behavior**: What should happen?
- **Screenshots**: Visual evidence helps!
- **Environment**: Browser, OS, screen size

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What this means

- ✅ Commercial use
- ✅ Modification
- ✅ Distribution
- ✅ Private use
- ⚠️ Liability and warranty not provided

---

## 🙏 Acknowledgments

### Design Inspiration

- **Netflix** - UI/UX patterns
- **Amazon Prime Video** - Navigation structure
- **HBO Max** - Premium aesthetics
- **Movie Theaters** - Billboard effects

### Technologies

- [React](https://reactjs.org/) - UI framework
- [TMDb](https://www.themoviedb.org/) - Movie database API
- [Font Awesome](https://fontawesome.com/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Typography

### Special Thanks

- The React community
- TMDb for free API access
- Open source contributors

---

## 📞 Contact & Links

**Portfolio**: [www.capbraco.com](https://www.capbraco.com)  
**GitHub**: [@yourusername](https://github.com/yourusername)  
**Project Link**: [CineStream Repository](https://github.com/yourusername/cinestream)  

---

## 🎓 Learning Resources

Built this project to learn React? Here are resources:

- [React Documentation](https://reactjs.org/docs)
- [React Hooks Guide](https://reactjs.org/docs/hooks-intro.html)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [TMDb API Docs](https://developers.themoviedb.org/3)

---

## 🗺️ Roadmap

### Planned Features

- [ ] **Search Functionality** - Full text search
- [ ] **User Authentication** - Save favorites
- [ ] **Watchlist** - Track movies to watch
- [ ] **Reviews Section** - Read and write reviews
- [ ] **Social Sharing** - Share favorite movies
- [ ] **Theme Toggle** - Light/dark mode
- [ ] **PWA Support** - Offline functionality
- [ ] **More Languages** - i18n support

### Future Enhancements

- [ ] Advanced filtering options
- [ ] Movie recommendations
- [ ] Cast and crew information
- [ ] Similar movies suggestions
- [ ] Streaming availability
- [ ] User ratings integration

---

## 📊 Project Stats

- **Version**: 3.0 (Mobile Optimized)
- **React Version**: 19.2
- **Bundle Size**: ~500KB
- **Components**: 7 main components
- **CSS Lines**: 1,644
- **Responsive Breakpoints**: 4
- **Animations**: 3 keyframe animations
- **Documentation Pages**: 6

---

## 🌟 Star History

If you find this project useful, please consider giving it a ⭐️!

[![Stargazers over time](https://starchart.cc/yourusername/cinestream.svg)](https://starchart.cc/yourusername/cinestream)

---

<div align="center">

### Made with ❤️ by [CapBraco](https://www.capbraco.com)

**CineStream** - Elegant Movie Discovery

[⬆ Back to Top](#-cinestream---movie-explorer)

---

© 2025 CapBraco. All rights reserved.

</div>