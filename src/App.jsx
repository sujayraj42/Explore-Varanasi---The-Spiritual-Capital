import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Stats from './components/Stats/Stats';
import Ghats from './components/Ghats/Ghats';
import Temples from './components/Temples/Temples';
import GangaAarti from './components/GangaAarti/GangaAarti';
import Sarnath from './components/Sarnath/Sarnath';
import Culture from './components/Culture/Culture';
import Gallery from './components/Gallery/Gallery';
import Visit from './components/Visit/Visit';
import Footer from './components/Footer/Footer';
import WaveDivider from './components/shared/WaveDivider';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.8s ease',
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <WaveDivider />
          <About />
          <WaveDivider flip />
          <Stats />
          <WaveDivider />
          <Ghats />
          <WaveDivider flip />
          <Temples />
          <WaveDivider />
          <GangaAarti />
          <WaveDivider flip />
          <Sarnath />
          <WaveDivider />
          <Culture />
          <WaveDivider flip />
          <Gallery />
          <WaveDivider />
          <Visit />
        </main>
        <Footer />
      </div>
    </>
  );
}
