import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 opacity-90 gradient-animate" />
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[url('/images/pattern.svg')] opacity-10 animate-float" />
      </div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full animate-float"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 10 + 5 + 's'
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 
          className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Transform Your Marketing
          <br />
          <span className="text-blue-300 animate-pulse">with AI Innovation</span>
        </h1>
        <p 
          className={`text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-300 transform
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          Elevate your business with intelligent, data-driven campaigns that deliver measurable results.
        </p>
        <button 
          className={`bg-white text-blue-900 px-8 py-4 rounded-full text-lg font-semibold 
            hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '600ms' }}
        >
          Start Your Journey
        </button>
      </div>
    </section>
  );
}