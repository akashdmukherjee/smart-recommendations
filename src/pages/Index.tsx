
import React, { useState } from 'react';
import { ShortTermRecommendations } from '../components/ShortTermRecommendations';
import { LongTermStrategy } from '../components/LongTermStrategy';
import { Header } from '../components/Header';
import { Navigation } from '../components/Navigation';

const Index = () => {
  const [activeTab, setActiveTab] = useState('short-term');

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#DCF5EC' }}>
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 pb-8">
        {activeTab === 'short-term' && <ShortTermRecommendations />}
        {activeTab === 'long-term' && <LongTermStrategy />}
      </main>
    </div>
  );
};

export default Index;
