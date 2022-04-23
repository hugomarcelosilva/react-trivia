import React from 'react';
import { render } from '@testing-library/react';

import QuizPage from '../../components/pages/QuizPage';
import { TriviaGameContext } from '../../context/TriviaGameContext';
import TriviaGameManager from '../../context/TriviaGameManager';
import { data } from '../__mock__/data';

describe('View QuizPage correctly', () => {
  const triviaGameManager = new TriviaGameManager('easy');
  triviaGameManager.setQuestions(data.results);

  it('should have 3 buttons', () => {
    const { queryAllByTestId } = render(
      <TriviaGameContext.Provider value={triviaGameManager}>
        <QuizPage />
      </TriviaGameContext.Provider>,
    );

    expect(queryAllByTestId('button')).toHaveLength(3);
    expect(queryAllByTestId('button')[0]).not.toHaveAttribute('disabled');
    expect(queryAllByTestId('button')[1]).not.toHaveAttribute('disabled');
  });

  it('should not have timer', () => {
    const { queryAllByTestId } = render(
      <TriviaGameContext.Provider value={triviaGameManager}>
        <QuizPage />
      </TriviaGameContext.Provider>,
    );

    expect(queryAllByTestId('timer')).toHaveLength(0);
  });
});
