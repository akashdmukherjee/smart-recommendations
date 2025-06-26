
import React from 'react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navigation = ({ activeTab, setActiveTab }: NavigationProps) => {
  return (
    <nav className="mb-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-1 bg-white rounded-full p-1 shadow-lg max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('short-term')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeTab === 'short-term'
                ? 'text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            style={{
              backgroundColor: activeTab === 'short-term' ? '#0EB0C6' : 'transparent'
            }}
          >
            🎯 Short-Term
          </button>
          <button
            onClick={() => setActiveTab('long-term')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
              activeTab === 'long-term'
                ? 'text-white shadow-md'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            style={{
              backgroundColor: activeTab === 'long-term' ? '#0EB0C6' : 'transparent'
            }}
          >
            🚀 Long-Term
          </button>
        </div>
      </div>
    </nav>
  );
};
