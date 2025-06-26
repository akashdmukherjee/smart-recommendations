
import React from 'react';

export const Header = () => {
  return (
    <header className="py-8 text-center">
      <h1 className="text-4xl font-bold mb-2" style={{ color: '#0EB0C6' }}>
        Elijah Woods
      </h1>
      <div className="flex justify-center space-x-6 text-sm text-gray-600">
        <span>📊 102k Monthly Listeners</span>
        <span>👥 69k Spotify Followers</span>
        <span>📱 14.2k Instagram</span>
      </div>
    </header>
  );
};
