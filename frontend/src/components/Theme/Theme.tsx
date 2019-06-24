import React from 'react';

import './Theme.css';

const Theme: React.FC = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
}

export default Theme;
