
import React, { useState } from 'react';

interface RecommendationCardProps {
  recommendation: {
    id: number;
    title: string;
    priority: string;
    action: string;
    why: string;
    goal: string;
    metrics: any;
  };
}

export const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-200 border-l-4" 
         style={{ borderLeftColor: '#0EB0C6' }}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex-1 pr-4">
          {recommendation.priority} {recommendation.title}
        </h3>
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            isCompleted 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-gray-300'
          }`}
        >
          {isCompleted ? '✅ Done' : 'Mark Done'}
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-gray-700 mb-2">✅ Action:</h4>
          <p className="text-gray-600 leading-relaxed">{recommendation.action}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700 mb-2">📊 Why:</h4>
          <p className="text-gray-600 leading-relaxed">{recommendation.why}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-gray-700 mb-2">🎯 Goal:</h4>
          <p className="text-gray-600 leading-relaxed">{recommendation.goal}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {Object.entries(recommendation.metrics).map(([key, value]) => (
            <span key={key} className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{ backgroundColor: '#DCF5EC', color: '#0EB0C6' }}>
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
