import React from 'react';

const PanelXYZ = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Joke of the Day</h1>
        <p className="mt-4 text-lg text-center">
          A horse walks into a bar. The bartender looks up and says, "Why the long face?"
        </p>
      </div>
    </div>
  );
};

export default PanelXYZ;