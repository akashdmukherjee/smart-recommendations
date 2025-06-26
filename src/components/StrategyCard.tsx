
import React, { useState } from 'react';
import { Target, TrendingUp, CheckCircle, Circle, BarChart } from 'lucide-react';
import { Progress } from './ui/progress';

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

  const completionPercentage = (completedActions.length / strategy.actions.length) * 100;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100" style={{ backgroundColor: '#DCF5EC' }}>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white">
              <BarChart size={20} style={{ color: '#0EB0C6' }} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#0EB0C6' }}>
                {strategy.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">{strategy.goal}</p>
            </div>
          </div>
        </div>
        
        {/* Overall progress */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium text-gray-700">Overall Progress</span>
            <span className="text-gray-600">{Math.round(completionPercentage)}%</span>
          </div>
          <Progress value={completionPercentage} className="h-3" />
          <p className="text-xs text-gray-600">
            {completedActions.length} of {strategy.actions.length} actions completed
          </p>
        </div>
      </div>
      
      {/* Actions */}
      <div className="p-6">
        <div className="space-y-4">
          {strategy.actions.map((actionItem, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="bg-blue-50 rounded-lg p-3 mb-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Target size={14} className="text-blue-600" />
                        <h4 className="font-medium text-gray-900 text-sm">Action</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{actionItem.action}</p>
                    </div>
                    
                    <div className="bg-purple-50 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp size={14} className="text-purple-600" />
                        <h4 className="font-medium text-gray-700 text-sm">Why</h4>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{actionItem.why}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => toggleAction(index)}
                    className={`ml-4 flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      completedActions.includes(index)
                        ? 'bg-green-50 text-green-700 border border-green-200'
                        : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    {completedActions.includes(index) ? <CheckCircle size={16} /> : <Circle size={16} />}
                    {completedActions.includes(index) ? 'Done' : 'Mark Done'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
