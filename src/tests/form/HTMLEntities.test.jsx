import React from 'react';
import { render } from '@testing-library/react';

import HTMLEntities from '../../components/form/HTMLEntities';

describe('HTMLEntities run correctly', () => {
  const question =
    'The first &quot;Metal Gear&quot; game was released for the PlayStation 1.';
  const result =
    'The first "Metal Gear" game was released for the PlayStation 1.';
  it('should change special HTMLEntities', () => {
    const { queryAllByTestId } = render(
      <HTMLEntities>{question}</HTMLEntities>,
    );
    expect(queryAllByTestId('html-entities')[0]).toHaveTextContent(result);
  });
});
