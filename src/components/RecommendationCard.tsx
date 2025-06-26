
import React, { useState } from 'react';
import { TrendingUp, CheckCircle, Circle } from 'lucide-react';
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
        {/* Header with circle button and action text */}
        <div className="flex items-start gap-3 mb-4">
          <button
            onClick={() => setIsCompleted(!isCompleted)}
            className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
              isCompleted 
                ? 'bg-green-500 border-green-500 text-white' 
                : 'border-gray-300 hover:border-green-400'
            }`}
          >
            {isCompleted && <CheckCircle size={14} />}
          </button>
          <h3 className="text-lg font-semibold text-gray-900 flex-1">
            {recommendation.action}
          </h3>
        </div>
        
        {/* Content sections */}
        <div className="space-y-4">
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp size={16} className="text-purple-600" />
              <h4 className="font-medium text-gray-900">Why</h4>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{recommendation.why}</p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Goal</h4>
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
        </div>
      </div>
    </div>
  );
};
