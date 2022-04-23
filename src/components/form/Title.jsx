import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  font-size: xx-large;
  font-weight: bold;
  height: 3rem;
  text-align: center;

  @media (max-width: 375px) {
    font-size: x-large;
  }
`;

export default function Title(props) {
  return <Container>{props.title}</Container>;
}

Title.propTypes = {
  title: PropTypes.string,
};
