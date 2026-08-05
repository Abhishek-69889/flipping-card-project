import React, { Suspense, lazy, useState, useEffect } from 'react';
import AnimatedCursor from "react-animated-cursor";
import Nav from './components/Nav';
import AnimatedSection from './components/AnimatedSection';
import Loader from './components/Loader'; 

// ✅ Lazy load components
const LandingPage = lazy(() => import('./components/LandingPage'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Projects = lazy(() => import('./components/Projects'));
const Achievements = lazy(() => import('./components/Achievemts'));
const Contact = lazy(() => import('./components/Contact'));
const Experience = lazy(() => import('./components/Experience'));
const CurrentWork = lazy(() => import('./components/CurrentWork'));

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="bg-gradient-to-r from-[#2e003e] via-[#7209b7] to-[#c72cb6] text-white p-4">
      <AnimatedCursor />
      <Nav />

      {/* Wrap lazy-loaded components in Suspense */}
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <AnimatedSection><LandingPage /></AnimatedSection>
        <AnimatedSection><About /></AnimatedSection>
        <AnimatedSection><Experience /></AnimatedSection>
        <AnimatedSection><Services /></AnimatedSection>
        <AnimatedSection><CurrentWork /></AnimatedSection>
        <AnimatedSection><Projects /></AnimatedSection>
        <AnimatedSection><Achievements /></AnimatedSection>
        <AnimatedSection><Contact /></AnimatedSection>
      </Suspense>
    </div>
  );
};

export default App;
