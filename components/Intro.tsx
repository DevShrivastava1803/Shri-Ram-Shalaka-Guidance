import React from 'react';

interface IntroProps {
  onStart: () => void;
}

const Intro: React.FC<IntroProps> = ({ onStart }) => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-10 animate-fade-in text-center">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-2 font-hindi leading-tight">
          श्री राम शलाका
        </h1>
        <h2 className="text-xl text-stone-600 font-serif tracking-wide uppercase">
          Shri Ram Shalaka Guidance
        </h2>
      </div>

      <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 md:p-8 shadow-sm text-left mx-auto">
        <h3 className="text-lg font-bold text-orange-800 mb-4 border-b border-orange-200 pb-2">
          About & Instructions
        </h3>
        
        <p className="text-stone-700 mb-4 leading-relaxed">
          The <strong>Ram Shalaka Prashnavali</strong> is a traditional method used by devotees to seek spiritual guidance from the <em>Ramcharitmanas</em> (the epic of Lord Rama). It is believed that with faith, one can find direction for their dilemmas.
        </p>

        <ul className="space-y-3 text-stone-700 mb-6">
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
            <span>Sit calmly and remember Lord Rama (or your personal deity) with faith.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
            <span>Formulate a single, clear question in your mind. Avoid asking multiple things at once.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 bg-orange-100 text-orange-700 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
            <span>When ready, click "Open Grid". Close your eyes or look away, and tap on any square in the grid.</span>
          </li>
        </ul>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6 rounded-r">
          <p className="text-sm text-stone-600 italic">
            <strong>Disclaimer:</strong> This tool is for spiritual reflection and inspiration only. It is not a substitute for professional advice (medical, legal, financial). Please use your own judgment.
          </p>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] text-lg uppercase tracking-wider"
        >
          Open Grid
        </button>
      </div>
    </div>
  );
};

export default Intro;
