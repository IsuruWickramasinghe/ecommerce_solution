'use client';

// VideoModal.js
import React from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl }:any) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative w-[90%] max-w-[800px] rounded bg-white p-4">
        <button onClick={onClose} className="absolute right-2 top-2 text-gray-600 hover:text-gray-900">
          ✖
        </button>
        <iframe
          width="100%"
          height="450"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoModal;
