
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from './ui/toggle-group';
import { Badge } from './ui/badge';
import { Clock, TrendingUp, Users, Music, Heart, Mic, HandHeart, BarChart2, Sparkles } from 'lucide-react';

interface FilterTagsProps {
  selectedTimeframes: string[];
  selectedCategories: string[];
  onTimeframeChange: (values: string[]) => void;
  onCategoryChange: (values: string[]) => void;
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
    default: return null;
  }
};

const getTimeframeIcon = (timeframe: string) => {
  return timeframe === 'short-term' ? <Clock size={12} /> : <TrendingUp size={12} />;
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

const getTimeframeLabel = (timeframe: string) => {
  return timeframe === 'short-term' ? 'Short-term' : 'Long-term';
};

export const FilterTags = ({ 
  selectedTimeframes, 
  selectedCategories, 
  onTimeframeChange, 
  onCategoryChange 
}: FilterTagsProps) => {
  const timeframes = ['short-term', 'long-term'];
  const categories = [
    'social media',
    'release management', 
    'fan engagement',
    'live performance',
    'collaboration opportunities',
    'growth levers',
    'content optimization'
  ];

  return (
    <div className="mb-6 space-y-4">
      {/* Timeframe filters */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Timeframe</h3>
        <ToggleGroup type="multiple" value={selectedTimeframes} onValueChange={onTimeframeChange} className="justify-start">
          {timeframes.map((timeframe) => (
            <ToggleGroupItem
              key={timeframe}
              value={timeframe}
              variant="outline"
              size="sm"
              className="flex items-center gap-1 data-[state=on]:bg-blue-100 data-[state=on]:text-blue-800 data-[state=on]:border-blue-300"
            >
              {getTimeframeIcon(timeframe)}
              {getTimeframeLabel(timeframe)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Category filters */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Categories</h3>
        <ToggleGroup type="multiple" value={selectedCategories} onValueChange={onCategoryChange} className="justify-start flex-wrap">
          {categories.map((category) => (
            <ToggleGroupItem
              key={category}
              value={category}
              variant="outline"
              size="sm"
              className="flex items-center gap-1 data-[state=on]:bg-blue-100 data-[state=on]:text-blue-800 data-[state=on]:border-blue-300"
            >
              {getCategoryIcon(category)}
              {getCategoryLabel(category)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>
    </div>
  );
};
