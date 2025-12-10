import React from 'react';
import { Chaupai } from '../types';

interface ResultProps {
  chaupai: Chaupai;
  selectedChar: string;
  userQuestion: string;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ chaupai, selectedChar, userQuestion, onReset }) => {
  const getToneColor = (tone: string) => {
    switch (tone) {
      case 'positive': return 'bg-green-50 border-green-200 text-green-900';
      case 'caution': return 'bg-red-50 border-red-200 text-red-900';
      case 'faith': return 'bg-blue-50 border-blue-200 text-blue-900';
      default: return 'bg-yellow-50 border-yellow-200 text-yellow-900';
    }
  };

  const getToneBadge = (tone: string) => {
    switch (tone) {
      case 'positive': return <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase rounded">Favourable</span>;
      case 'caution': return <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-bold uppercase rounded">Caution</span>;
      case 'faith': return <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-bold uppercase rounded">Faith Required</span>;
      default: return <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase rounded">Mixed / Neutral</span>;
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
        
        {/* Header */}
        <div className="bg-orange-600 text-white p-6 text-center relative">
           <button 
             onClick={onReset}
             className="absolute left-4 top-1/2 -translate-y-1/2 text-orange-100 hover:text-white transition-colors"
             aria-label="Back"
           >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
           </button>
           <h2 className="text-xl font-bold tracking-wide">Guidance Result</h2>
        </div>

        <div className="p-6 md:p-8 space-y-6">
          
          {/* Context */}
          <div className="flex flex-col items-center justify-center space-y-2 mb-6">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center border-2 border-orange-200">
              <span className="font-hindi text-3xl text-orange-700 pb-1">{selectedChar}</span>
            </div>
            {userQuestion && (
              <p className="text-stone-500 text-sm italic text-center max-w-md">
                "{userQuestion}"
              </p>
            )}
          </div>

          {/* Devanagari */}
          <div className="text-center space-y-2">
            <p className="font-hindi text-2xl md:text-3xl text-orange-800 leading-relaxed font-semibold">
              {chaupai.fullDev.split('\n').map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </p>
          </div>

          {/* Transliteration & Meaning */}
          <div className="text-center space-y-4 border-b border-stone-100 pb-6">
            <p className="text-stone-500 font-serif italic text-lg">
              {chaupai.transliteration}
            </p>
            <p className="text-stone-800 font-medium text-lg">
              {chaupai.englishTranslation}
            </p>
            {chaupai.hindiMeaning && (
              <p className="text-stone-600 font-hindi">
                (अर्थ: {chaupai.hindiMeaning})
              </p>
            )}
            <p className="text-xs text-stone-400 uppercase tracking-widest mt-2">
              Source: {chaupai.sourceContext}
            </p>
          </div>

          {/* Guidance Box */}
          <div className={`rounded-xl p-6 border ${getToneColor(chaupai.tone)}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Guidance Summary</h3>
              {getToneBadge(chaupai.tone)}
            </div>
            <ul className="space-y-2">
              {chaupai.guidanceSummary.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reflection */}
          <div className="text-center pt-2">
            <p className="text-stone-500 text-sm mb-6">
              Reflect on this message calmly. It is a signpost, not a command.
            </p>
            <button
              onClick={onReset}
              className="bg-stone-800 hover:bg-stone-900 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform active:scale-95"
            >
              Ask Another Question
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Result;
