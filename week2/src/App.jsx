import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Timer from "./components/Timer";
import Home from "./pages/Home";
import WatchLater from "./pages/WatchLater";

const getSession = (key, fallback) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

function App() {
  const [liked, setLiked] = useState(getSession("liked", []));
  const [watchLater, setWatchLater] = useState(getSession("watchLater", []));

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Navbar watchLaterCount={watchLater.length} />
        <Timer />
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  liked={liked}
                  setLiked={setLiked}
                  watchLater={watchLater}
                  setWatchLater={setWatchLater}
                />
              }
            />
            <Route
              path="/watch-later"
              element={
                <WatchLater
                  watchLater={watchLater}
                  setWatchLater={setWatchLater}
                  liked={liked}
                  setLiked={setLiked}
                />
              }
            />
          </Routes>
        </main>
        <footer className="bg-gray-900 text-white text-center py-4 mt-8">
          <div>Made by Your Name © 2025</div>
          <div className="mt-1">
            <a href="#" className="mx-2 hover:underline">GitHub</a>
            <a href="#" className="mx-2 hover:underline">Twitter</a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App; 