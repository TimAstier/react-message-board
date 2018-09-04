import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Thread } from '../.';
import { Message as MessageModel } from '../../models';

const Wrapper = styled.div`
  background-color: black;
  min-height: 450px;
  width: 1000px;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  border: 20px solid brown;
  border-radius: 15px;
`;

const ThreadWrapper = styled.div`
  height: 400px;
`;

class Board extends React.Component {
  
  renderThreads() {
    const { threads, currentUserId } = this.props;
    return threads
      ? threads.map((t, i) => {
        return (
          <ThreadWrapper key={i}>
            <Thread messages={t} currentUserId={currentUserId}/>
          </ThreadWrapper>
        );
      })
      : null;
  }

  render() {
    return(
      <Wrapper>
        {this.renderThreads()}
      </Wrapper>
    );
  }
}

Board.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)),
  ),
  currentUserId: PropTypes.number,
};

export default Board;
