
import React from 'react';
import { ShortTermRecommendations } from '../components/ShortTermRecommendations';
import { Header } from '../components/Header';

const Index = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#DCF5EC' }}>
      <Header />
      <main className="container mx-auto px-4 pb-8">
        <ShortTermRecommendations />
      </main>
    </div>
  );
};

export default Index;
