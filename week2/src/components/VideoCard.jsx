import React from "react";

const VideoCard = ({ video, isLiked, isWatchLater, onLike, onWatchLater, onRemove }) => {
  return (
    <div className="bg-white rounded shadow p-3 flex flex-col hover:shadow-lg transition relative">
      <img src={video.thumbnail} alt={video.title} className="rounded mb-2 w-full h-40 object-cover" />
      <h3 className="font-semibold text-lg mb-1">{video.title}</h3>
      <p className="text-gray-600 text-sm mb-1">{video.channel}</p>
      <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
        <span>{video.views} views</span>
        <span>{video.time}</span>
      </div>
      <div className="flex gap-2 mt-auto">
        <button
          className={`px-2 py-1 rounded ${isLiked ? "bg-red-500 text-white" : "bg-gray-200"}`}
          onClick={() => onLike(video.id)}
        >
          ❤️ Like
        </button>
        {onWatchLater && (
          <button
            className={`px-2 py-1 rounded ${isWatchLater ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => onWatchLater(video.id)}
            disabled={isWatchLater}
          >
            ➕ Watch Later
          </button>
        )}
        {onRemove && (
          <button
            className="px-2 py-1 rounded bg-red-200 text-red-700"
            onClick={() => onRemove(video.id)}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoCard; 