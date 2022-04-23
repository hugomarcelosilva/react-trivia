import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: large;
  font-weight: bold;
  height: 3rem;

  color: ${(props) => (props.$count < 5 ? 'red' : '')};
  font-weight: ${(props) => (props.$count < 5 ? 'bold' : '')};
`;

export default function Timer(props) {
  const { counter } = props;

  const [count, setCount] = useState(counter);

  useEffect(() => {
    let timeoutId;
    const runCounter = () => {
      timeoutId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    };

    if (count > 0) {
      runCounter();
    } else {
      setCount(counter);
      props.handleAnswerAfterTimeIsOut('');
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [count, props, counter]);

  useEffect(() => {
    setCount(counter);
  }, [props.questionIterator, counter]);

  return (
    <Container
      data-testid="timer"
      $count={count}
    >{`Timer: ${count}`}</Container>
  );
}

Timer.propTypes = {
  counter: PropTypes.number.isRequired,
  handleAnswerAfterTimeIsOut: PropTypes.func.isRequired,
  questionIterator: PropTypes.number.isRequired,
};
