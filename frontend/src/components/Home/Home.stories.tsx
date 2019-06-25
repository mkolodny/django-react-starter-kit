import React from 'react';
import { storiesOf } from '@storybook/react';

import '../App/App.css';
import Home from '.';

storiesOf('Home', module)
  .add('default', () => <Home />);
