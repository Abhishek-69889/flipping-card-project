import React from 'react';

const Loader = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
