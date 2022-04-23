import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.button`
  background-color: ${(props) => (props.disabled ? '#7E7E7E' : '#4caf50')};
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 4px;
  cursor: pointer;

  font-size: ${(props) => (props.small ? '11px' : '16px')};
  height: ${(props) => (props.small ? '1.2rem' : '3rem')};
  width: ${(props) => (props.small ? '3.2rem' : '5rem')};
`;

export default function Button(props) {
  return (
    <Container
      data-testid="button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.label}
    </Container>
  );
}

Button.propTypes = {
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
