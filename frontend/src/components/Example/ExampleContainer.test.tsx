import React from 'react';
import { shallow } from 'enzyme';

import Example from '.';

it('renders without crashing', () => {
  shallow(<Example />);
});
