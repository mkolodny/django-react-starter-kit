import React from 'react';
import { shallow } from 'enzyme';

import Router from '.';

it('renders without crashing', () => {
  shallow(<Router />);
});
