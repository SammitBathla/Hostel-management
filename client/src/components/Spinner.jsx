import React from 'react';

const LoadingSpinner = ({ isLoading }) => {
  return (
    <div className={`fixed top-0 left-0 w-screen h-screen flex justify-center items-center ${isLoading ? 'block' : 'hidden'}`}>
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

export default LoadingSpinner;
