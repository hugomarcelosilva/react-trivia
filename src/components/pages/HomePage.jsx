import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';

import Title from '../form/Title';
import Button from '../form/Button';
import RadioButton from '../form/RadioButton';
import { useHistory } from 'react-router-dom';
import { TriviaGameContext } from '../../context/TriviaGameContext';
import { getQuestions } from '../../api';
import {
  RADIO_BUTTON_EASY_LABEL,
  RADIO_BUTTON_HARD_LABEL,
  RADIO_BUTTON_HARDER_LABEL,
} from '../../utils/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Controllers = styled.div`
  margin-top: 2rem;
  bottom: 1rem;
  display: flex;
  justify-content: center;

  @media (max-width: 375px) {
    margin-top: 4.5rem;
  }
`;

const ErrorMessage = styled.div`
  bottom: 1rem;
  display: flex;
  justify-content: center;
  color: red;
  height: 1rem;
`;

const Description = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  font-size: larger;

  @media (max-width: 375px) {
    margin-top: 5rem;
    font-size: medium;
  }
`;

const Difficulty = styled.div`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 375px) {
    margin-top: 4rem;
  }
`;

const Selection = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubDescription = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  font-size: larger;

  @media (max-width: 375px) {
    margin-top: 4rem;
  }
`;

export default function HomePage() {
  const history = useHistory();
  const contextType = useContext(TriviaGameContext);
  const [difficulty, setDifficulty] = useState(contextType.difficulty);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getQuestions();
        contextType.setQuestions(response.results);
      } catch (e) {
        console.error('-> Error from getQuestions:', e);
        setErrorMessage("Can't load the game");
      }
    }
    fetchData();
  }, [contextType]);

  const selectDifficulty = (event) => {
    contextType.setDifficulty(event.target.value);
    setDifficulty(event.target.value);
  };

  const handleBeginClick = () => {
    history.push('/quizpage');
  };

  return (
    <Container>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <div>
        <Title title={`Welcome to \n Trivia Challenge!`} />
      </div>
      <Description>
        You will be presented with 10 True or False questions
      </Description>
      <SubDescription>Can you score 100%?</SubDescription>

      <Difficulty>
        <Selection>
          <div>Please select difficulty:</div>
          <RadioButton
            value="easy"
            checked={difficulty === 'easy'}
            onChange={selectDifficulty}
            label={RADIO_BUTTON_EASY_LABEL}
          />
          <RadioButton
            value="hard"
            checked={difficulty === 'hard'}
            onChange={selectDifficulty}
            label={RADIO_BUTTON_HARD_LABEL}
          />
          <RadioButton
            value="harder"
            checked={difficulty === 'harder'}
            onChange={selectDifficulty}
            label={RADIO_BUTTON_HARDER_LABEL}
          />
        </Selection>
      </Difficulty>
      <Controllers>
        <Button
          label="Begin"
          onClick={handleBeginClick}
          size={'large'}
          disabled={!!errorMessage}
        />
      </Controllers>
    </Container>
  );
}
