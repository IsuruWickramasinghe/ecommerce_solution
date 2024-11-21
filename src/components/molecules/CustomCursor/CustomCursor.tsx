'use client';

import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y,
      }}
      className="pointer-events-none fixed z-[1001] size-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d16527] opacity-30 transition-transform duration-150 ease-out"
    />
  );
};

export default CustomCursor;
