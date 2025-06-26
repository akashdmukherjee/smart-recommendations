import React, { useState, useMemo } from 'react';
import { RecommendationCard } from './RecommendationCard';
import { LongTermRecommendationCard } from './LongTermRecommendationCard';
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

  const longTermRecommendations = [{
    id: 6,
    title: "Increase Track Release Success",
    goal: "To improve stream velocity, playlist pickup, and catalog longevity with each new release.",
    timeframe: "long-term" as const,
    categories: ["release management", "content optimization", "growth levers"] as const,
    actionInsightPairs: [{
      action: "Shape future tracks around Joyful + Nostalgic moods — use this as a creative filter during production.",
      insight: "Your top-performing song (\"Echo Drift\") shares this emotional profile — and this mood cluster is currently trending in editorial placements and algorithmic playlists."
    }, {
      action: "Curate a public \"mood match\" playlist blending your catalog with mood-aligned songs from bigger artists.",
      insight: "Mood association improves contextual relevance and playlist co-occurrence, which increases visibility in streaming algorithms."
    }, {
      action: "Carry mood consistency across visual branding — cover art, teaser videos, and promo copy.",
      insight: "Emotionally consistent branding improves click-through and repeat listens, reinforcing track identity in crowded feeds."
    }]
  }, {
    id: 7,
    title: "Build High-Value Fanbases in Key Markets",
    goal: "To strengthen local fan density that supports touring, merch drops, and long-term cultural relevance.",
    timeframe: "long-term" as const,
    categories: ["fan engagement", "social media", "live performance"] as const,
    actionInsightPairs: [{
      action: "Launch targeted ad campaigns (IG/TikTok) in LA, London, and Berlin aimed at 18–25 year olds.",
      insight: "These cities already show above-average engagement and strong ad conversion rates — ideal for fanbase consolidation."
    }, {
      action: "Use city-specific visual cues and language in your creative to connect culturally.",
      insight: "Local relevance improves watch time and saves, making your content more promotable in geo-driven algorithms."
    }, {
      action: "Retarget engaged fans (profile viewers, savers) with ads tied to new drops or exclusive offers.",
      insight: "Warm audiences are significantly more likely to convert — ideal for merch, tickets, or pre-saves."
    }, {
      action: "Run A/B tests with ad content formats (hook-first vs lyric-first) to optimize creative performance by region.",
      insight: "Cultural content preferences affect scroll-stop behavior — tuning for each market maximizes ROI."
    }]
  }, {
    id: 8,
    title: "Expand Global Reach Through High-Leverage Cities",
    goal: "To unlock algorithmic and cultural ripple effects by growing in internationally influential music markets.",
    timeframe: "long-term" as const,
    categories: ["collaboration opportunities", "social media", "growth levers"] as const,
    actionInsightPairs: [{
      action: "Collaborate with emerging artists in trigger cities (e.g., Seoul, Mexico City, Berlin) for co-releases or remixes.",
      insight: "Local collaborations are more likely to trigger regional playlisting and social sharing — which Spotify and TikTok often amplify."
    }, {
      action: "Post geotagged content with cultural references (e.g., visuals, language, scenes) tied to those cities.",
      insight: "Localized content performs better with regional audiences and feeds into location-based discovery algorithms."
    }, {
      action: "Translate parts of your content — captions, lyrics, titles — into local languages.",
      insight: "Multilingual content increases relatability and boosts engagement in LATAM and Asia."
    }, {
      action: "Engage local micro-curators (playlists, indie radio, creators) to seed momentum.",
      insight: "These grassroots tastemakers can act as gateway nodes for bigger editorial and algorithmic lift."
    }]
  }];

  const allRecommendations = [...recommendations, ...longTermRecommendations];

  const filteredRecommendations = useMemo(() => {
    return allRecommendations.filter(rec => {
      const timeframeMatch = selectedTimeframes.length === 0 || selectedTimeframes.includes(rec.timeframe);
      const categoryMatch = selectedCategories.length === 0 || rec.categories.some(cat => selectedCategories.includes(cat));
      return timeframeMatch && categoryMatch;
    });
  }, [selectedTimeframes, selectedCategories, allRecommendations]);

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
          'actionInsightPairs' in rec ? (
            <LongTermRecommendationCard key={rec.id} recommendation={rec} />
          ) : (
            <RecommendationCard key={rec.id} recommendation={rec} />
          )
        ))}
      </div>
    </div>
  );
};
