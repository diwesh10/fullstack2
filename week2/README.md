# Mini YouTube Clone (Frontend Only)

A simple YouTube-inspired video app built with React and Tailwind CSS. This project demonstrates reusable components, state management, hooks, routing, and sessionStorage for simulating persistent data (likes and Watch Later).

## Features
- Responsive Navbar with site title, dummy search, and Watch Later count
- Video Feed (Home Page) with grid layout of video cards
- Like and Watch Later functionality (state saved in sessionStorage)
- Watch Later page to view and remove saved videos
- Timer showing time spent on the site
- Routing with `react-router-dom`
- Styled with Tailwind CSS
- Footer with your name and social links

## Folder Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── VideoCard.jsx
│   ├── Timer.jsx
├── pages/
│   ├── Home.jsx
│   └── WatchLater.jsx
├── data/
│   └── dummyVideos.js
├── App.jsx
├── index.js
├── index.css
```

## Setup Instructions

1. **Clone the repository**
   ```sh
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```

2. **Install dependencies**
   ```sh
   npm install
   npm install react-router-dom
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Configure Tailwind CSS**
   - Edit `tailwind.config.js`:
     ```js
     module.exports = {
       content: [
         "./src/**/*.{js,jsx,ts,tsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```
   - Ensure `src/index.css` contains:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Start the development server**
   ```sh
   npm start
   ```
   Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage
- Like videos and add them to Watch Later. State is saved in sessionStorage (resets on refresh).
- Navigate between Home and Watch Later using the Navbar.
- Timer shows how long you've spent on the site.

## Customization
- Add more videos in `src/data/dummyVideos.js`.
- Tweak styles using Tailwind utility classes.
- Add more features (dark mode, sidebar, etc.) as you wish!

## Credits
Made by Your Name © 2025

[GitHub](#) | [Twitter](#) 