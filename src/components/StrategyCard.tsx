
import React, { useState } from 'react';

interface StrategyCardProps {
  strategy: {
    id: number;
    title: string;
    goal: string;
    actions: Array<{
      action: string;
      why: string;
    }>;
  };
}

export const StrategyCard = ({ strategy }: StrategyCardProps) => {
  const [completedActions, setCompletedActions] = useState<number[]>([]);

  const toggleAction = (index: number) => {
    setCompletedActions(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border-l-4" 
         style={{ borderLeftColor: '#0EB0C6' }}>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-3" style={{ color: '#0EB0C6' }}>
          🎯 Goal: {strategy.title}
        </h3>
        <p className="text-gray-700 leading-relaxed">{strategy.goal}</p>
      </div>
      
      <div className="space-y-4">
        {strategy.actions.map((actionItem, index) => (
          <div key={index} className="border rounded-lg p-4 hover:shadow-sm transition-shadow duration-200"
               style={{ borderColor: '#DCF5EC' }}>
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-medium text-gray-800 mb-2">✅ Action:</h4>
                <p className="text-gray-600 leading-relaxed mb-3">{actionItem.action}</p>
                <h4 className="font-medium text-gray-700 mb-2">📊 Why:</h4>
                <p className="text-gray-600 leading-relaxed">{actionItem.why}</p>
              </div>
              <button
                onClick={() => toggleAction(index)}
                className={`ml-4 px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                  completedActions.includes(index)
                    ? 'bg-green-100 text-green-800 border border-green-200'
                    : 'bg-gray-100 text-gray-600 border border-gray-200 hover:border-gray-300'
                }`}
              >
                {completedActions.includes(index) ? '✅ Done' : 'Mark Done'}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 text-right">
        <span className="text-sm text-gray-500">
          {completedActions.length} of {strategy.actions.length} actions completed
        </span>
      </div>
    </div>
  );
};
