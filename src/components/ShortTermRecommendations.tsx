
import React from 'react';
import { RecommendationCard } from './RecommendationCard';

export const ShortTermRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      title: "Playlist Targeting Based on Affinity & Mood Matching",
      priority: "🟢",
      action: 'Submit "Late Night Circles" to the curator of "Chill After Dark."',
      why: '"Late Night Circles" is trending on "Evening Lo-Fi" (9k followers), which frequently feeds "Chill After Dark" (26k followers) — both have ambient/downtempo overlap.',
      goal: "Add +15k passive streams in 14 days and increase chances of triggering Discover Weekly, contributing to a Spotify follower bump from 69k → 71.5k.",
      metrics: { streams: "+15k", followers: "69k → 71.5k", timeframe: "14 days" }
    },
    {
      id: 2,
      title: "City Affinity-Based Content and Tour Planning",
      priority: "🟡",
      action: "Post IG Reels featuring fan DMs from Chicago, Austin, and Portland — include city-specific tags and visuals.",
      why: "These cities each have 1,000+ monthly listeners, high repeat plays, and above-average social engagement per follower.",
      goal: "Generate 3k+ incremental Reels views per city, grow Spotify monthly listeners from 102k → 106k, and create early demand for Q4 regional tour.",
      metrics: { views: "+3k per city", listeners: "102k → 106k", tour: "Q4 regional" }
    },
    {
      id: 3,
      title: "Brand Affinity Partnerships",
      priority: "🟡",
      action: "Post a TikTok featuring your track with Vans apparel and Red Bull branding — tag both.",
      why: "Over 50% of your audience follows Vans and Red Bull; both brands actively reshare artist content.",
      goal: "Achieve +8% engagement on branded TikTok, +500 new IG followers, and open a conversation for a brand collab pitch by end of quarter.",
      metrics: { engagement: "+8%", followers: "+500", collab: "End of Q" }
    },
    {
      id: 4,
      title: "Influencer Affinity & Social Collabs",
      priority: "🟡",
      action: "DM @beatbabe to pitch a duet or beat-switch collab featuring your latest single.",
      why: "You share a 35% audience overlap, both charted on \"Fresh Indie\", and have active Gen Z engagement in the US/UK.",
      goal: "Reach 25k+ views on collab content, gain +1.5k TikTok followers, and drive +2k Spotify saves to the featured track.",
      metrics: { views: "25k+", followers: "+1.5k", saves: "+2k" }
    },
    {
      id: 5,
      title: "Content Suggestions Based on Data Trends",
      priority: "🟡",
      action: "Post a behind-the-scenes carousel of your most streamed track showing lyrics, voice memos, and studio footage.",
      why: "Similar content from your account last month had 2.5x save rate and led to a 12% follower gain in 7 days.",
      goal: "Increase Instagram saves by 20%, grow your IG from 14.2k → 15.5k followers, and improve Spotify algorithmic reach via cross-platform momentum.",
      metrics: { saves: "+20%", followers: "14.2k → 15.5k", reach: "Improved" }
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        🎯 Short-Term Growth Opportunities
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
        {recommendations.map((rec) => (
          <RecommendationCard key={rec.id} recommendation={rec} />
        ))}
      </div>
    </div>
  );
};
