import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-size: medium;

  @media (max-width: 375px) {
    font-size: small;
  }
`;

export default function RadioButton(props) {
  return (
    <Container>
      <label>
        <input
          data-testid="radio-button"
          type="radio"
          value={props.value}
          checked={props.checked}
          onChange={props.onChange}
        />
        {props.label}
      </label>
    </Container>
  );
}

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
};
