import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Example from '../Example';

const App: React.FC = () => {
  return (
    <Router>
      <Route exact path="/" component={Example} />
    </Router>
  );
}

export default App;
