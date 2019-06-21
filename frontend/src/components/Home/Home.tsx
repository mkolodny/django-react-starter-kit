import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <Paragraph>
      Bootstrapped and ready for action :)
    </Paragraph>
  );
}

const Paragraph = styled.p`
  font-size: 23px;
  text-align: center;
  margin-top: 50px;
`;

export default Home;
