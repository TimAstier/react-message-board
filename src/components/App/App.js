import React from 'react';
import styled from 'styled-components';
import { Auth, Board, InputArea } from '../../containers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Auth />
      <Board />
      <InputArea />
    </Wrapper>
  );
};

export default App;
