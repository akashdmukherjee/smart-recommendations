
import React, { useState, useMemo } from 'react';
import { RecommendationCard } from './RecommendationCard';
import { FilterTags } from './FilterTags';

export const ShortTermRecommendations = () => {
  const [selectedTimeframes, setSelectedTimeframes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const recommendations = [{
    id: 1,
    title: "Playlist Targeting Based on Affinity & Mood Matching",
    priority: "🟢",
    action: 'Submit "Late Night Circles" to the curator of "Chill After Dark."',
    why: '"Late Night Circles" is trending on "Evening Lo-Fi" (9k followers), which frequently feeds "Chill After Dark" (26k followers) — both have ambient/downtempo overlap.',
    goal: "Add +15k streams in 14 days",
    metrics: {
      streams: "+15k",
      followers: "69k → 71.5k",
      timeframe: "14 days"
    },
    timeframe: "short-term" as const,
    categories: ["release management", "growth levers"] as const
  }, {
    id: 2,
    title: "City Affinity-Based Content and Tour Planning",
    priority: "🟡",
    action: "Post IG Reels featuring fan DMs from Chicago, Austin, and Portland — include city-specific tags and visuals.",
    why: "These cities each have 1,000+ monthly listeners, high repeat plays, and above-average social engagement per follower.",
    goal: "Grow monthly listeners from 102k → 106k",
    metrics: {
      views: "+3k per city",
      listeners: "102k → 106k",
      tour: "Q4 regional"
    },
    timeframe: "short-term" as const,
    categories: ["social media", "fan engagement", "live performance"] as const
  }, {
    id: 3,
    title: "Brand Affinity Partnerships",
    priority: "🟡",
    action: "Post a TikTok featuring your track with Vans apparel and Red Bull branding — tag both.",
    why: "Over 50% of your audience follows Vans and Red Bull; both brands actively reshare artist content.",
    goal: "Achieve +8% engagement and +500 IG followers",
    metrics: {
      engagement: "+8%",
      followers: "+500",
      collab: "End of Q"
    },
    timeframe: "short-term" as const,
    categories: ["social media", "collaboration opportunities"] as const
  }, {
    id: 4,
    title: "Influencer Affinity & Social Collabs",
    priority: "🟡",
    action: "DM @beatbabe to pitch a duet or beat-switch collab featuring your latest single.",
    why: "You share a 35% audience overlap, both charted on \"Fresh Indie\", and have active Gen Z engagement in the US/UK.",
    goal: "Reach 25k+ views and gain +1.5k TikTok followers",
    metrics: {
      views: "25k+",
      followers: "+1.5k",
      saves: "+2k"
    },
    timeframe: "short-term" as const,
    categories: ["collaboration opportunities", "social media"] as const
  }, {
    id: 5,
    title: "Content Suggestions Based on Data Trends",
    priority: "🟡",
    action: "Post a behind-the-scenes carousel of your most streamed track showing lyrics, voice memos, and studio footage.",
    why: "Similar content from your account last month had 2.5x save rate and led to a 12% follower gain in 7 days.",
    goal: "Grow IG from 14.2k → 15.5k followers",
    metrics: {
      saves: "+20%",
      followers: "14.2k → 15.5k",
      reach: "Improved"
    },
    timeframe: "short-term" as const,
    categories: ["content optimization", "social media"] as const
  }];

  const filteredRecommendations = useMemo(() => {
    return recommendations.filter(rec => {
      const timeframeMatch = selectedTimeframes.length === 0 || selectedTimeframes.includes(rec.timeframe);
      const categoryMatch = selectedCategories.length === 0 || rec.categories.some(cat => selectedCategories.includes(cat));
      return timeframeMatch && categoryMatch;
    });
  }, [selectedTimeframes, selectedCategories]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">🎯 Growth Opportunities</h2>
      
      <FilterTags
        selectedTimeframes={selectedTimeframes}
        selectedCategories={selectedCategories}
        onTimeframeChange={setSelectedTimeframes}
        onCategoryChange={setSelectedCategories}
      />
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {filteredRecommendations.map(rec => (
          <RecommendationCard key={rec.id} recommendation={rec} />
        ))}
      </div>
    </div>
  );
};
