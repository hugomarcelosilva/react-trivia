import React from 'react';
import { AllHtmlEntities as Entities } from 'html-entities';
import PropTypes from 'prop-types';

export default function HTMLEntities(props) {
  const entities = new Entities();
  return (
    <div data-testid="html-entities">{entities.decode(props.children)}</div>
  );
}

HTMLEntities.propTypes = {
  children: PropTypes.string,
};
