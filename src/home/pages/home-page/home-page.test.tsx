import React from 'react';
import { render } from '@testing-library/react';

import { HomePage } from './home-page';

describe('Pages', () => {
  describe('HomePage', () => {
    it('should render without throwing an error', () => {
      render(<HomePage />);
    });
  });
});
