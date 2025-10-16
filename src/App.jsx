import Navbar from './components/navbar';
import Hero from './components/hero';
import Experience from './components/experience';
import React from 'react';
import Contact from './components/contact';
import About from './components/about';

function App() {
  return (
    <html className="scroll-smooth" lang="es">
    <main className="bg-gray-50 dark:bg-gray-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,216,255,0.5),rgba(255,255,255,0.9))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] min-h-screen">
      <Navbar />
      <Hero />
      <Experience/>
      <About/>
      <Contact/>

      {/* Other components will go here */}
    </main>
    </html>
  );
}

export default App;
