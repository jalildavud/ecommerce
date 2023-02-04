import React from "react";
import WomanImg from '../img/woman_hero.png';

const Hero = () => {
  return (
    <section className="bg-pink-300 py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around">
          <div className="w-full md:w-1/2 lg:w-3/5 px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Welcome to our site</h1>
            <p className="text-gray-300 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
            <a href="#" className="bg-white text-gray-900 rounded-full py-3 px-6">Learn More</a>
          </div>
          <div className="h-full hidden md:block">
            <img src={WomanImg} alt="Hero Image" className="w-full h-64 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

