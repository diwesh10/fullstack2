import React from "react";
import { videos } from "../data/dummyVideos";
import VideoCard from "../components/VideoCard";

const WatchLater = ({ watchLater, setWatchLater, liked, setLiked }) => {
  const handleRemove = (id) => {
    const updated = watchLater.filter((vid) => vid !== id);
    setWatchLater(updated);
    sessionStorage.setItem("watchLater", JSON.stringify(updated));
  };

  const handleLike = (id) => {
    const updated = liked.includes(id)
      ? liked.filter((vid) => vid !== id)
      : [...liked, id];
    setLiked(updated);
    sessionStorage.setItem("liked", JSON.stringify(updated));
  };

  const filtered = videos.filter((video) => watchLater.includes(video.id));

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Watch Later</h2>
      {filtered.length === 0 ? (
        <p className="text-gray-500">No videos in Watch Later.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              isLiked={liked.includes(video.id)}
              isWatchLater={true}
              onLike={handleLike}
              onRemove={handleRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchLater; 