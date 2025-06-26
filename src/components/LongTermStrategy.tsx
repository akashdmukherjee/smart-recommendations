
import React from 'react';
import { StrategyCard } from './StrategyCard';

export const LongTermStrategy = () => {
  const strategies = [
    {
      id: 6,
      title: "Increase Track Release Success",
      goal: "To improve stream velocity, playlist pickup, and catalog longevity with each new release.",
      actions: [
        {
          action: "Shape future tracks around Joyful + Nostalgic moods — use this as a creative filter during production.",
          why: 'Your top-performing song ("Echo Drift") shares this emotional profile — and this mood cluster is currently trending in editorial placements and algorithmic playlists.'
        },
        {
          action: "Curate a public \"mood match\" playlist blending your catalog with mood-aligned songs from bigger artists.",
          why: "Mood association improves contextual relevance and playlist co-occurrence, which increases visibility in streaming algorithms."
        },
        {
          action: "Carry mood consistency across visual branding — cover art, teaser videos, and promo copy.",
          why: "Emotionally consistent branding improves click-through and repeat listens, reinforcing track identity in crowded feeds."
        }
      ]
    },
    {
      id: 7,
      title: "Build High-Value Fanbases in Key Markets",
      goal: "To strengthen local fan density that supports touring, merch drops, and long-term cultural relevance.",
      actions: [
        {
          action: "Launch targeted ad campaigns (IG/TikTok) in LA, London, and Berlin aimed at 18–25 year olds.",
          why: "These cities already show above-average engagement and strong ad conversion rates — ideal for fanbase consolidation."
        },
        {
          action: "Use city-specific visual cues and language in your creative to connect culturally.",
          why: "Local relevance improves watch time and saves, making your content more promotable in geo-driven algorithms."
        },
        {
          action: "Retarget engaged fans (profile viewers, savers) with ads tied to new drops or exclusive offers.",
          why: "Warm audiences are significantly more likely to convert — ideal for merch, tickets, or pre-saves."
        },
        {
          action: "Run A/B tests with ad content formats (hook-first vs lyric-first) to optimize creative performance by region.",
          why: "Cultural content preferences affect scroll-stop behavior — tuning for each market maximizes ROI."
        }
      ]
    },
    {
      id: 8,
      title: "Expand Global Reach Through High-Leverage Cities",
      goal: "To unlock algorithmic and cultural ripple effects by growing in internationally influential music markets.",
      actions: [
        {
          action: "Collaborate with emerging artists in trigger cities (e.g., Seoul, Mexico City, Berlin) for co-releases or remixes.",
          why: "Local collaborations are more likely to trigger regional playlisting and social sharing — which Spotify and TikTok often amplify."
        },
        {
          action: "Post geotagged content with cultural references (e.g., visuals, language, scenes) tied to those cities.",
          why: "Localized content performs better with regional audiences and feeds into location-based discovery algorithms."
        },
        {
          action: "Translate parts of your content — captions, lyrics, titles — into local languages.",
          why: "Multilingual content increases relatability and boosts engagement in LATAM and Asia."
        },
        {
          action: "Engage local micro-curators (playlists, indie radio, creators) to seed momentum.",
          why: "These grassroots tastemakers can act as gateway nodes for bigger editorial and algorithmic lift."
        }
      ]
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🚀 Long-Term Strategy Recommendations
      </h2>
      <div className="space-y-8">
        {strategies.map((strategy) => (
          <StrategyCard key={strategy.id} strategy={strategy} />
        ))}
      </div>
    </div>
  );
};
