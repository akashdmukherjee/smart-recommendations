
import React, { useState } from 'react';
import { Target, TrendingUp, CheckCircle, Circle } from 'lucide-react';
import { Progress } from './ui/progress';

interface RecommendationCardProps {
  recommendation: {
    id: number;
    title: string;
    priority: string;
    action: string;
    why: string;
    goal: string;
    metrics: Record<string, string>;
  };
}

export const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Extract progress percentage from metrics if available
  const getProgressValue = () => {
    const metricsValues = Object.values(recommendation.metrics);
    // Simple logic to derive progress - in real app this would come from actual data
    return isCompleted ? 100 : Math.floor(Math.random() * 40) + 10;
  };

  const getPriorityColor = () => {
    switch (recommendation.priority) {
      case '🟢': return 'bg-green-500';
      case '🟡': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Priority indicator bar */}
      <div className={`h-1 ${getPriorityColor()}`}></div>
      
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 pr-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {recommendation.title}
            </h3>
          </div>
          <button
            onClick={() => setIsCompleted(!isCompleted)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
              isCompleted 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            {isCompleted ? <CheckCircle size={16} /> : <Circle size={16} />}
            {isCompleted ? 'Completed' : 'Mark Done'}
          </button>
        </div>
        
        {/* Content sections */}
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <Target size={16} className="text-blue-600" />
              <h4 className="font-medium text-gray-900">Action</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{recommendation.action}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-purple-600" />
              <h4 className="font-medium text-gray-900">Why</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{recommendation.why}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Target size={16} style={{ color: '#0EB0C6' }} />
              <h4 className="font-medium text-gray-900">Goal</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">{recommendation.goal}</p>
            
            {/* Progress bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Progress</span>
                <span>{getProgressValue()}%</span>
              </div>
              <Progress value={getProgressValue()} className="h-2" />
            </div>
          </div>
          
          {/* Metrics */}
          <div className="flex flex-wrap gap-2 pt-2">
            {Object.entries(recommendation.metrics).map(([key, value]) => (
              <span 
                key={key} 
                className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border"
                style={{ 
                  backgroundColor: '#DCF5EC', 
                  color: '#0EB0C6',
                  borderColor: '#0EB0C6'
                }}
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
