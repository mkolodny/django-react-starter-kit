import React from 'react';
import styled from 'styled-components';

interface Props {
}

const Example: React.FC<Props> = (props) => {
  return (
    <Note>
      Bootstrapped and ready for action :)
    </Note>
  );
}

const Note = styled.p`
  font-size: 23px;
  text-align: center;
  margin-top: 50px;
`;

export default Example;
