import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to load content:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container" style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>Loading...</div>;
  }

  if (!data) {
    return <div className="container" style={{ display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>Error loading data.</div>;
  }

  return (
    <div className="container">
      <Navbar brand={data.brand} />
      <Hero data={data.hero} dashboardData={data.dashboard_preview} badge={data.badge} />
      <Features data={data.features_section} />
      <Footer data={data.footer} />
    </div>
  );
}

export default App;
