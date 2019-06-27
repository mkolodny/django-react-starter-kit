import React from 'react';
import { storiesOf } from '@storybook/react';

import '../../index.css';
import Example from '.';

storiesOf('Example', module)
  .add('default', () => <Example />);
