
import React, { useState } from 'react';
import { TrendingUp, CheckCircle, Target, Clock, Users, Music, Heart, Mic, HandHeart, BarChart2, Sparkles, ChevronDown, Lightbulb } from 'lucide-react';
import { Badge } from './ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

interface RecommendationCardProps {
  recommendation: {
    id: number;
    title: string;
    priority: string;
    action: string;
    why: string;
    goal: string;
    metrics: Record<string, string>;
    timeframe: 'short-term' | 'long-term';
    categories: readonly ('social media' | 'release management' | 'fan engagement' | 'live performance' | 'collaboration opportunities' | 'growth levers' | 'content optimization')[];
  };
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'social media': return <Users size={12} />;
    case 'release management': return <Music size={12} />;
    case 'fan engagement': return <Heart size={12} />;
    case 'live performance': return <Mic size={12} />;
    case 'collaboration opportunities': return <HandHeart size={12} />;
    case 'growth levers': return <BarChart2 size={12} />;
    case 'content optimization': return <Sparkles size={12} />;
    default: return <Target size={12} />;
  }
};

const getCategoryLabel = (category: string) => {
  switch (category) {
    case 'social media': return 'Social Media';
    case 'release management': return 'Release Management';
    case 'fan engagement': return 'Fan Engagement';
    case 'live performance': return 'Live Performance';
    case 'collaboration opportunities': return 'Collaboration';
    case 'growth levers': return 'Growth Levers';
    case 'content optimization': return 'Content Optimization';
    default: return category;
  }
};

const getTimeframeIcon = (timeframe: string) => {
  return timeframe === 'short-term' ? <Clock size={12} /> : <TrendingUp size={12} />;
};

const getTimeframeLabel = (timeframe: string) => {
  return timeframe === 'short-term' ? 'Short-term' : 'Long-term';
};

export const RecommendationCard = ({ recommendation }: RecommendationCardProps) => {
  const [isCompleted, setIsCompleted] = useState(false);
  
  // Extract progress percentage from metrics if available
  const getProgressValue = () => {
    const metricsValues = Object.values(recommendation.metrics);
    // Simple logic to derive progress - in real app this would come from actual data
    return isCompleted ? 100 : Math.floor(Math.random() * 40) + 10;
  };

  const getProgressColor = () => {
    const progress = getProgressValue();
    if (progress >= 70) return 'bg-green-400';
    if (progress >= 40) return 'bg-yellow-400';
    return 'bg-orange-400';
  };

  const maxVisibleTags = 3;
  const visibleCategories = recommendation.categories.slice(0, maxVisibleTags - 1); // -1 to account for timeframe tag
  const remainingCategories = recommendation.categories.slice(maxVisibleTags - 1);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        {/* Tags section */}
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="secondary" className="flex items-center gap-1 text-xs font-normal">
            {getTimeframeIcon(recommendation.timeframe)}
            {getTimeframeLabel(recommendation.timeframe)}
          </Badge>
          {visibleCategories.map((category) => (
            <Badge key={category} variant="secondary" className="flex items-center gap-1 text-xs font-normal">
              {getCategoryIcon(category)}
              {getCategoryLabel(category)}
            </Badge>
          ))}
          {remainingCategories.length > 0 && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Badge variant="secondary" className="flex items-center gap-1 text-xs font-normal cursor-pointer hover:bg-gray-200">
                  +{remainingCategories.length}
                  <ChevronDown size={10} />
                </Badge>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white border border-gray-200 shadow-lg">
                {remainingCategories.map((category) => (
                  <DropdownMenuItem key={category} className="flex items-center gap-2 text-xs">
                    {getCategoryIcon(category)}
                    {getCategoryLabel(category)}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>

        {/* Goal section */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Target size={16} className="text-gray-600" />
            <p className="text-base font-semibold text-gray-900">{recommendation.goal}</p>
          </div>
          
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Progress</span>
              <span>{getProgressValue()}%</span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-200">
              <div 
                className={`h-full transition-all duration-500 ease-out ${getProgressColor()}`}
                style={{ width: `${getProgressValue()}%` }}
              />
            </div>
          </div>
        </div>
        
        {/* Insight section */}
        <div className="bg-purple-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-purple-600" />
            <h4 className="text-sm font-semibold text-gray-900">Insight</h4>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">{recommendation.why}</p>
        </div>
        
        {/* Recommendation section */}
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={16} className="text-blue-600" />
            <h4 className="text-sm font-semibold text-gray-900">Recommendation</h4>
          </div>
          {/* Action section with circle button */}
          <div className="flex items-center gap-3">
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
            <p className="text-sm text-gray-700 flex-1 leading-6">
              {recommendation.action}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
