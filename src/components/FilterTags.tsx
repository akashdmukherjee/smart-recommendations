
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

  const handleTimeframeToggle = (value: string) => {
    if (selectedTimeframes.includes(value)) {
      onTimeframeChange(selectedTimeframes.filter(t => t !== value));
    } else {
      onTimeframeChange([...selectedTimeframes, value]);
    }
  };

  const handleCategoryToggle = (value: string) => {
    if (selectedCategories.includes(value)) {
      onCategoryChange(selectedCategories.filter(c => c !== value));
    } else {
      onCategoryChange([...selectedCategories, value]);
    }
  };

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {/* Timeframe filters */}
      {timeframes.map((timeframe) => (
        <button
          key={timeframe}
          onClick={() => handleTimeframeToggle(timeframe)}
          className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white border transition-colors ${
            selectedTimeframes.includes(timeframe)
              ? 'border-gray-300 bg-gray-100 text-gray-900'
              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {getTimeframeIcon(timeframe)}
          {getTimeframeLabel(timeframe)}
        </button>
      ))}

      {/* Category filters */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryToggle(category)}
          className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-white border transition-colors ${
            selectedCategories.includes(category)
              ? 'border-gray-300 bg-gray-100 text-gray-900'
              : 'border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {getCategoryIcon(category)}
          {getCategoryLabel(category)}
        </button>
      ))}
    </div>
  );
};
