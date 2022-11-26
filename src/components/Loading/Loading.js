import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center h-screen justify-center">
  <div className="border-4 border-dotted border-black animate-spin inline-block w-16 h-16 rounded-full" role="status">
  </div>
</div>
    );
};

export default Loading;