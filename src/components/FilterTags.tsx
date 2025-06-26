
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
    case 'social media': return <Users size={14} />;
    case 'release management': return <Music size={14} />;
    case 'fan engagement': return <Heart size={14} />;
    case 'live performance': return <Mic size={14} />;
    case 'collaboration opportunities': return <HandHeart size={14} />;
    case 'growth levers': return <BarChart2 size={14} />;
    case 'content optimization': return <Sparkles size={14} />;
    default: return null;
  }
};

const getTimeframeIcon = (timeframe: string) => {
  return timeframe === 'short-term' ? <Clock size={14} /> : <TrendingUp size={14} />;
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
    <div className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
      {/* Timeframe filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Timeframe</h3>
        <ToggleGroup type="multiple" value={selectedTimeframes} onValueChange={onTimeframeChange} className="justify-start gap-3">
          {timeframes.map((timeframe) => (
            <ToggleGroupItem
              key={timeframe}
              value={timeframe}
              variant="outline"
              size="default"
              className="flex items-center gap-2 px-4 py-2 bg-white border-gray-300 text-gray-700 data-[state=on]:bg-blue-600 data-[state=on]:text-white data-[state=on]:border-blue-600 hover:bg-gray-100 data-[state=on]:hover:bg-blue-700"
            >
              {getTimeframeIcon(timeframe)}
              {getTimeframeLabel(timeframe)}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      {/* Category filters */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
        <ToggleGroup type="multiple" value={selectedCategories} onValueChange={onCategoryChange} className="justify-start flex-wrap gap-3">
          {categories.map((category) => (
            <ToggleGroupItem
              key={category}
              value={category}
              variant="outline"
              size="default"
              className="flex items-center gap-2 px-4 py-2 bg-white border-gray-300 text-gray-700 data-[state=on]:bg-blue-600 data-[state=on]:text-white data-[state=on]:border-blue-600 hover:bg-gray-100 data-[state=on]:hover:bg-blue-700"
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
