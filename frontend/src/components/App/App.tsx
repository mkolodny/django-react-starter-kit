import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Theme from '../Theme';
import Home from '../Home';

const App: React.FC = () => {
  return (
    <Theme>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Theme>
  );
}

export default App;
