import React, { useState } from 'react';
import { GRID_CHARS } from '../constants';

interface GridProps {
  onBack: () => void;
  onCellClick: (index: number, char: string, question: string) => void;
}

const Grid: React.FC<GridProps> = ({ onBack, onCellClick }) => {
  const [question, setQuestion] = useState('');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 animate-fade-in flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="text-stone-500 hover:text-orange-700 font-medium text-sm flex items-center transition-colors"
        >
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
          Instructions
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-orange-800 font-hindi">राम शलाका प्रश्नावली</h2>
        <div className="w-20"></div> {/* Spacer for centering */}
      </div>

      {/* Question Input */}
      <div className="mb-6 max-w-lg mx-auto w-full">
        <label htmlFor="question" className="block text-sm font-medium text-stone-600 mb-1">
          Your Question (Optional, for reflection):
        </label>
        <input
          type="text"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g., Should I start this new project?"
          className="w-full px-4 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-orange-200 focus:border-orange-400 outline-none transition-shadow bg-white/80"
        />
      </div>

      {/* Grid Container */}
      <div className="flex-grow flex items-center justify-center overflow-auto pb-8">
        <div className="bg-white p-2 md:p-4 rounded-xl shadow-lg border-2 border-orange-100">
          <div 
            className="grid grid-cols-[repeat(15,minmax(20px,1fr))] md:grid-cols-[repeat(15,minmax(32px,1fr))] gap-[1px] md:gap-1 bg-orange-100 border border-orange-200"
            style={{ width: 'fit-content' }}
          >
            {GRID_CHARS.map((char, index) => (
              <button
                key={index}
                onClick={() => onCellClick(index, char, question)}
                className="
                  aspect-square flex items-center justify-center 
                  bg-orange-50 hover:bg-orange-300 hover:text-white
                  active:bg-orange-500 active:scale-95
                  text-stone-800 font-hindi font-medium
                  text-[10px] sm:text-xs md:text-lg
                  cursor-pointer transition-colors duration-150 select-none
                "
                aria-label={`Select letter ${char}`}
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-center text-xs text-stone-400 mt-2">
        Touch any square with a clear mind.
      </p>
    </div>
  );
};

export default Grid;
