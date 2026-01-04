import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MenuPreview from '../components/MenuPreview';
import Offers from '../components/Offers';
import Combos from '../components/Combos';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <MenuPreview />
        <Offers />
        <Combos />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}