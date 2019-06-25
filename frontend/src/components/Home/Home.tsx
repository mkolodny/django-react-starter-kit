import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
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

export default Home;
