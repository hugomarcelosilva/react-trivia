import React from 'react';
import AppRouter from './routes/AppRouter';
import { TriviaGameContext } from './context/TriviaGameContext';
import TriviaGameManager from './context/TriviaGameManager';
import './App.css';

export default function App() {
  const triviaGameManager = new TriviaGameManager('easy');

  return (
    <TriviaGameContext.Provider value={triviaGameManager}>
      <div className={'page-container'}>
        <div className={'card'}>
          <AppRouter />
        </div>
      </div>
    </TriviaGameContext.Provider>
  );
}
