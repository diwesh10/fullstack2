import React, { useEffect, useState } from "react";
import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const getSession = (key, fallback) => {
  const data = sessionStorage.getItem(key);
  return data ? JSON.parse(data) : fallback;
};

const Home = ({ liked, setLiked, watchLater, setWatchLater }) => {
  const handleLike = (id) => {
    const updated = liked.includes(id)
      ? liked.filter((vid) => vid !== id)
      : [...liked, id];
    setLiked(updated);
    sessionStorage.setItem("liked", JSON.stringify(updated));
  };

  const handleWatchLater = (id) => {
    if (!watchLater.includes(id)) {
      const updated = [...watchLater, id];
      setWatchLater(updated);
      sessionStorage.setItem("watchLater", JSON.stringify(updated));
    }
  };

  useEffect(() => {
    setLiked(getSession("liked", []));
    setWatchLater(getSession("watchLater", []));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            isLiked={liked.includes(video.id)}
            isWatchLater={watchLater.includes(video.id)}
            onLike={handleLike}
            onWatchLater={handleWatchLater}
          />
        ))}
      </div>
    </div>
  );
};

export default Home; 