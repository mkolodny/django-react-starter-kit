import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../index.css';
import Home from '.';

storiesOf('Home', module)
  .add('default', () => <Home />);
