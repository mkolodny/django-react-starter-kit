import React from 'react';
import { storiesOf } from '@storybook/react';

import Theme from '../Theme';
import Home from '.';

storiesOf('Home', module)
  .addDecorator(story => <Theme>{story()}</Theme>)
  .add('default', () => <Home />)
