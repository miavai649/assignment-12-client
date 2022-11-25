import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center">
  <div className="border-4 border-dotted animate-spin inline-block w-8 h-8 rounded-full" role="status">
  </div>
</div>
    );
};

export default Loading;