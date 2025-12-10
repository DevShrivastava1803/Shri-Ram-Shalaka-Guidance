import React, { useState } from 'react';
import Intro from './components/Intro';
import Grid from './components/Grid';
import Result from './components/Result';
import { ViewState, Chaupai } from './types';
import { CHAUPAIS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('intro');
  const [selectedResult, setSelectedResult] = useState<{ chaupai: Chaupai; char: string; question: string } | null>(null);

  const handleStart = () => {
    setView('grid');
  };

  const handleCellClick = (index: number, char: string, question: string) => {
    // Core Logic:
    // Flattened grid has 225 cells.
    // There are 9 Chaupais.
    // We use modulus operator to map the cell index to a chaupai deterministically.
    const chaupaiIndex = index % 9;
    const resultChaupai = CHAUPAIS[chaupaiIndex];

    setSelectedResult({
      chaupai: resultChaupai,
      char: char,
      question: question
    });
    setView('result');
  };

  const handleReset = () => {
    setSelectedResult(null);
    setView('grid');
  };

  const handleBackToIntro = () => {
    setView('intro');
    setSelectedResult(null);
  };

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col font-serif">
      {/* Decorative Top Bar */}
      <div className="h-1.5 bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 w-full" />
      
      <main className="flex-grow relative overflow-hidden">
        {/* Background decorative element */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
           <span className="font-hindi text-[40rem] text-orange-900 select-none">राम</span>
        </div>

        <div className="relative z-10 h-full">
          {view === 'intro' && <Intro onStart={handleStart} />}
          {view === 'grid' && <Grid onBack={handleBackToIntro} onCellClick={handleCellClick} />}
          {view === 'result' && selectedResult && (
            <Result 
              chaupai={selectedResult.chaupai} 
              selectedChar={selectedResult.char} 
              userQuestion={selectedResult.question}
              onReset={handleReset} 
            />
          )}
        </div>
      </main>

      <footer className="py-4 text-center text-stone-400 text-xs relative z-10">
        <p>© {new Date().getFullYear()} Ram Shalaka Guidance</p>
      </footer>
    </div>
  );
};

export default App;
