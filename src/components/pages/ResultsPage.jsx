import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Title from '../form/Title';
import Button from '../form/Button';
import QuestionResult from '../form/QuestionResult';
import { TriviaGameContext } from '../../context/TriviaGameContext';

const BottomControllers = styled.div`
  margin-top: 2rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Results = styled.div`
  height: 30rem;
  overflow-y: scroll;
  overflow-x: hidden;

  @media (max-width: 375px) {
    height: 22rem;
  }
`;

const Score = styled.div`
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: bold;
  height: 3rem;
`;

export default function ResultsPage() {
  const history = useHistory();

  const {
    questions,
    resetTriviaGameManager,
    correctResultsCounter,
    indexQuestion,
  } = useContext(TriviaGameContext);

  useEffect(() => {
    if (questions.length === 0 || indexQuestion < 9) {
      history.push('/');
    }
  });

  const handlePlayAgainClick = () => {
    resetTriviaGameManager();
    history.push('/');
  };

  return (
    <Container>
      <div>
        <Title title={`Result:`} />
      </div>

      <Score>{`You scored ${correctResultsCounter} / 10`}</Score>

      <Results>
        {questions.map((question) => (
          <QuestionResult
            key={question.question}
            question={question.question}
            userAnswer={question?.user_answer_right}
            correctAnswer={question.correct_answer}
          />
        ))}
      </Results>

      <BottomControllers>
        <Button
          label="PLAY AGAIN"
          size="large"
          onClick={handlePlayAgainClick}
        />
      </BottomControllers>
    </Container>
  );
}
