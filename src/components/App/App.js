import React, { Component } from 'react';
import styled from 'styled-components';
import { Board } from '../.';
import { InputArea } from '../../containers';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Board />
        <InputArea />
      </Wrapper>
    );
  }
}

export default App;
