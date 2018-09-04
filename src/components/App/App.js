import React, { Component } from 'react';
import styled from 'styled-components';
import { Board, InputArea } from '../.';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

const Header = styled.div`
  height: 70px;
  font-size: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          React Message Board
        </Header>
        <Board />
        <InputArea
          text="Test text!"
          status="new"
        />
      </Wrapper>
    );
  }
}

export default App;
