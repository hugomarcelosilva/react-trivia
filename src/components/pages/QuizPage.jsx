import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import HTMLEntities from '../form/HTMLEntities';
import Title from '../form/Title';
import Button from '../form/Button';
import Timer from '../form/Timer';
import { TriviaGameContext } from '../../context/TriviaGameContext';
import {
  CORRECT_ANSWER_RESULT,
  WRONG_ANSWER_RESULT,
  OUT_OF_TIME_ANSWER_RESULT,
} from '../../utils/constants';

const AnswerResult = styled.div`
  color: ${(props) => (props.$correctAnswer ? '#4caf50' : 'red')};
  font-weight: bold;
`;

const BottomControllers = styled.div`
  margin-top: 7rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    margin-top: 2rem;
  }
`;

const ButtonContainer = styled.div`
  width: 10%;

  @media (max-width: 375px) {
    width: 20%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Question = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  height: 10rem;
  font-size: large;
  border: 1px solid;
  padding: 1rem;

  @media (max-width: 375px) {
    font-size: medium;
    height: 15rem;
  }
`;

const QuestionNumber = styled.div`
  font-size: large;
  place-self: center;
  font-weight: bold;
  margin-top: 0.5rem;
`;

const TimerContainer = styled.div`
  height: 1rem;
  margin-top: 8rem;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    margin-top: 3rem;
  }
`;

const TopControllers = styled.div`
  bottom: 1rem;
  display: flex;
  width: 100%;
`;

export default function QuizPage() {
  const history = useHistory();
  const {
    questions,
    resetTriviaGameManager,
    increaseCorrectAnswersCounter,
    setUserAnswerRight,
    indexQuestion,
    increaseQuestionIndex,
    timer,
    checkAnswer,
  } = useContext(TriviaGameContext);

  const [questionIterator, setQuestionIterator] = useState(indexQuestion);
  const [answerResultMessage, setAnswerResultMessage] = useState('');

  useEffect(() => {
    if (questions.length === 0) {
      history.push('/');
    }
  }, [history, questions.length]);

  const handleAnswerClick = (answer) => {
    if (checkAnswer(answer)) {
      setUserAnswerRight(questionIterator);
      increaseCorrectAnswersCounter();
      setResult(CORRECT_ANSWER_RESULT);
    } else if (answer === '') {
      setResult(OUT_OF_TIME_ANSWER_RESULT);
    } else {
      setResult(WRONG_ANSWER_RESULT);
    }
  };

  const setResult = (result) => {
    setAnswerResultMessage(result);
    setTimeout(() => {
      increaseQuestionIndex();
      setAnswerResultMessage('');
      setQuestionIterator(questionIterator + 1);
      if (questionIterator === questions.length - 1) {
        history.push('/resultspage');
      }
    }, 500);
  };

  const handleRestartGame = () => {
    resetTriviaGameManager();
    history.push('/');
  };

  return (
    <Container>
      <TopControllers>
        <ButtonContainer>
          <Button label="Restart" size="small" onClick={handleRestartGame} />
        </ButtonContainer>
      </TopControllers>
      <Title title={questions[questionIterator]?.category} />

      <TimerContainer>
        {timer !== 0 && answerResultMessage === '' && (
          <Timer
            counter={timer}
            questionIterator={questionIterator}
            handleAnswerAfterTimeIsOut={handleAnswerClick}
          />
        )}
        <AnswerResult
          $correctAnswer={answerResultMessage === CORRECT_ANSWER_RESULT}
        >
          {answerResultMessage}
        </AnswerResult>
      </TimerContainer>

      <Question>
        <HTMLEntities>{questions[questionIterator]?.question}</HTMLEntities>
      </Question>

      <QuestionNumber>{`${questionIterator + 1} of ${
        questions.length
      }`}</QuestionNumber>

      <BottomControllers>
        <Button
          disabled={!!answerResultMessage}
          label="True"
          size="large"
          onClick={() => handleAnswerClick('True')}
        />
        <Button
          disabled={!!answerResultMessage}
          label="False"
          size="large"
          onClick={() => handleAnswerClick('False')}
        />
      </BottomControllers>
    </Container>
  );
}
