import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import HTMLEntities from './HTMLEntities';

const Container = styled.div`
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  font-size: medium;

  @media (max-width: 375px) {
    font-size: small;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

const CorrectAnswer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-right: 1rem;
  font-size: medium;
  font-weight: bold;

  @media (max-width: 375px) {
    font-size: small;
  }
`;

const Result = styled.div`
  padding-right: 0.5rem;
`;

export default function QuestionResult(props) {
  return (
    <Container>
      <Content>
        {props.userAnswer ? (
          <Result>&#10004; </Result>
        ) : (
          <Result>&times;</Result>
        )}
        <div>
          <HTMLEntities>{props.question}</HTMLEntities>
        </div>
      </Content>
      <CorrectAnswer>{`Correct answer: ${props.correctAnswer}`}</CorrectAnswer>
    </Container>
  );
}

QuestionResult.propTypes = {
  userAnswer: PropTypes.bool,
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string,
};
