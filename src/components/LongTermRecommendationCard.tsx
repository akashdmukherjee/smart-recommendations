import React, { useState } from 'react';
import { TrendingUp, Target, Clock, Users, Music, Heart, Mic, HandHeart, BarChart2, Sparkles, ChevronDown, Lightbulb, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from './ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';

interface LongTermRecommendationCardProps {
  recommendation: {
    id: number;
    title: string;
    goal: string;
    timeframe: 'long-term';
    categories: readonly ('social media' | 'release management' | 'fan engagement' | 'live performance' | 'collaboration opportunities' | 'growth levers' | 'content optimization')[];
    actionInsightPairs: Array<{
      action: string;
      insight: string;
    }>;
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

export const LongTermRecommendationCard = ({ recommendation }: LongTermRecommendationCardProps) => {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  
  const currentPair = recommendation.actionInsightPairs[currentPairIndex];
  const totalPairs = recommendation.actionInsightPairs.length;

  const goToPrevious = () => {
    setCurrentPairIndex(prev => 
      prev === 0 ? totalPairs - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentPairIndex(prev => 
      prev === totalPairs - 1 ? 0 : prev + 1
    );
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
            <TrendingUp size={12} />
            Long-term
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

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-3">{recommendation.title}</h3>

        {/* Goal section - matching short-term style but without progress bar */}
        <div className="bg-gray-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-gray-600 flex-shrink-0" />
            <p className="text-base font-semibold text-gray-900">{recommendation.goal}</p>
          </div>
        </div>
        
        {/* Carousel section */}
        <div className="relative">
          {/* Carousel navigation */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-600">
                {currentPairIndex + 1} of {totalPairs}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={goToPrevious}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                disabled={totalPairs <= 1}
              >
                <ArrowLeft size={16} className="text-gray-600" />
              </button>
              <button
                onClick={goToNext}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                disabled={totalPairs <= 1}
              >
                <ArrowRight size={16} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Current action-insight pair */}
          <div className="space-y-4">
            {/* Insight section */}
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={16} className="text-purple-600" />
                <h4 className="text-sm font-semibold text-gray-900">Insight</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{currentPair.insight}</p>
            </div>
            
            {/* Recommendation section */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb size={16} className="text-blue-600" />
                <h4 className="text-sm font-semibold text-gray-900">Recommendation</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{currentPair.action}</p>
            </div>
          </div>

          {/* Dots indicator */}
          {totalPairs > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {recommendation.actionInsightPairs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPairIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPairIndex ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
