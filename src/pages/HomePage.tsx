import React from 'react';
import Hero from '../components/Hero';
import StockCharts from '../components/StockCharts';
import Features from '../components/Features';
import Plans from '../components/Plans';

const HomePage = () => {
  return (
    <div className="pt-16">
      <Hero />
      <StockCharts />
      <Features />
      <Plans />
    </div>
  );
};

export default HomePage;