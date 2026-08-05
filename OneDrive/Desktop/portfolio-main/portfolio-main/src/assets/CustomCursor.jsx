import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`body { cursor: none; }`}</style>

      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full bg-pink-500 shadow-lg "
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: "transform 50ms linear",
        }}
      />
    </>
  );
};

export default CustomCursor;
