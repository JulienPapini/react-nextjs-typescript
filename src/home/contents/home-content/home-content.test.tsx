import React from 'react';
import { render } from '@testing-library/react';

import { HomeContent } from './home-content';

describe('Contents', () => {
  describe('HomeContent', () => {
    it('should render without throwing an error', () => {
      render(<HomeContent />);
    });
  });
});
