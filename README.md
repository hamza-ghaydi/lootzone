# LootZone — Gaming Store & News Platform

<div align="center">
  <img src="./src/assets/images/lootzone.png" alt="LootZone Logo" width="200"/>
  
  ### A modern, premium gaming marketplace and news platform
  
  [Live Demo](https://lootzone.vercel.app/) · [Report Bug](https://github.com/hamza-ghaydi/lootzone/issues) · [Request Feature](https://github.com/hamza-ghaydi/lootzone/issues)
</div>

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Clipboard.png" alt="Clipboard" width="25" height="25" /> About The Project

LootZone is a modern gaming marketplace and news platform built with React and powered by the RAWG Video Games API. It delivers a high-end dark UI experience inspired by professional game stores, featuring trending games, detailed game pages, and gaming news — fully responsive across all devices.

### <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Glowing%20Star.png" alt="Star" width="25" height="25" /> Key Features

- **Game Discovery** - Browse trending, popular, and new release games
- **Advanced Search** - Search games by name and filter by category
- **Detailed Game Pages** - View screenshots, descriptions, and platform availability
- **Gaming News** - Stay updated with the latest gaming industry news
- **Premium UI** - Dark theme with gold accents and smooth animations
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Fast Performance** - Built with Vite for lightning-fast load times
- **Smooth Animations** - Modern hover effects and transitions

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Hammer%20and%20Wrench.png" alt="Tools" width="25" height="25" /> Built With

- **React (JSX)** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **RAWG Video Games API** - Game data source
- **Vercel** - Deployment platform

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/File%20Folder.png" alt="Folder" width="25" height="25" /> Project Structure

```
lootzone/
├── dist/                      # Production build
├── node_modules/              # Dependencies
├── public/                    # Static assets
├── src/
│   ├── assets/
│   │   ├── images/           # Image assets
│   ├── components/
│   │   ├── GameCard.jsx      # Game card component
│   │   ├── GameCarousel.jsx  # Carousel for games
│   │   ├── GameTabs.jsx      # Category tabs
│   │   ├── PriceBox.jsx      # Price display component
│   │   ├── Requirements.jsx  # System requirements
│   │   ├── Reviews.jsx       # User reviews section
│   │   ├── ScreenshotGallery.jsx  # Game screenshots
│   │   ├── ScrollToTop.jsx   # Scroll behavior handler
│   │   ├── SectionTitle.jsx  # Section headings
│   │   └── Toast.jsx         # Notification toasts
│   ├── constants/
│   │   ├── images.jsx        # Image imports
│   │   └── index.jsx         # Constants export
│   ├── context/
│   │   └── GameContext.jsx   # Global state management
│   ├── layouts/
│   │   ├── Footer.jsx        # Footer component
│   │   └── Navbar.jsx        # Navigation bar
│   ├── pages/
│   │   ├── Browse.jsx        # Browse games page
│   │   ├── Checkout.jsx      # Checkout page
│   │   ├── Contact.jsx       # Contact page
│   │   ├── GameDetails.jsx   # Game details page
│   │   ├── Home.jsx          # Homepage
│   │   ├── News.jsx          # Gaming news page
│   │   ├── NotFound.jsx      # 404 page
│   │   └── ThankYou.jsx      # Thank you page
│   ├── utils/
│   │   ├── api.js            # API configuration
│   │   └── format.js         # Utility functions
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.jsx              # App entry point
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Rocket.png" alt="Rocket" width="25" height="25" /> Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- RAWG API Key ([Get one here](https://rawg.io/apidocs))

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/hamza-ghaydi/lootzone.git
   cd lootzone
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Activities/Video%20Game.png" alt="Game" width="25" height="25" /> Usage

- **Homepage** - View featured games and latest releases
- **Browse** - Explore games by category (Action, RPG, Strategy, etc.)
- **Search** - Find specific games using the search bar
- **Game Details** - Click on any game to view detailed information
- **News** - Read the latest gaming industry news and updates

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Handshake.png" alt="Handshake" width="25" height="25" /> Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Memo.png" alt="Memo" width="25" height="25" /> License

Distributed under the MIT License. See `LICENSE` for more information.

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png" alt="Developer" width="25" height="25" /> Author

**Hamza Rhaidi**

- Portfolio: [hamza-rhaidi.vercel.app](https://hamza-rhaidi.vercel.app/)
- GitHub: [@hamza-ghaydi](https://github.com/hamza-ghaydi)
- LinkedIn: [HAMZA RHAIDI](https://linkedin.com/in/hamza-rhaidi)

---

## <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Folded%20Hands.png" alt="Thank You" width="25" height="25" /> Acknowledgments

- [RAWG Video Games Database](https://rawg.io/) - For the comprehensive game API
- [React Documentation](https://react.dev/) - For excellent framework documentation
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Vite](https://vitejs.dev/) - For the blazing fast build tool

---

<div align="center">
  
  Made with <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Red%20Heart.png" alt="Heart" width="15" height="15" /> by Hamza Rhaidi
  
  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Star.png" alt="Star" width="15" height="15" /> Star this repo if you found it helpful!
</div>
