import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import HomePage from '../../components/pages/HomePage';
import { TriviaGameContext } from '../../context/TriviaGameContext';
import TriviaGameManager from '../../context/TriviaGameManager';
import { data } from '../__mock__/data';

describe('View HomePage correctly', () => {
  const triviaGameManager = new TriviaGameManager('easy');
  triviaGameManager.setQuestions(data.results);

  it('should have 3 radio buttons', () => {
    const { queryAllByTestId, getByLabelText } = render(
      <TriviaGameContext.Provider value={triviaGameManager}>
        <HomePage />
      </TriviaGameContext.Provider>,
    );

    expect(queryAllByTestId('radio-button')).toHaveLength(3);

    const radio = getByLabelText('Hard (60 sec per question)');
    fireEvent.change(radio, { target: { value: 'hard' } });
    expect(radio.value).toBe('hard');
  });

  it('should have 1 button', () => {
    const { queryAllByTestId } = render(
      <TriviaGameContext.Provider value={triviaGameManager}>
        <HomePage />
      </TriviaGameContext.Provider>,
    );

    expect(queryAllByTestId('button')).toHaveLength(1);
    expect(queryAllByTestId('button')[0]).not.toHaveAttribute('disabled');
  });
});
