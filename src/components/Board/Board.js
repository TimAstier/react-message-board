import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Thread } from '../.';
import { Message as MessageModel } from '../../models';

const Wrapper = styled.div`
  box-sizing: border-box;
  background-color: #2b2b2b;
  height: 450px;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  align-items: center;
`;

const ThreadWrapper = styled.div`
  height: 400px;
`;

class Board extends React.Component {
  
  renderThreads() {
    const { threads, currentUserId } = this.props;
    // TODO: handle the slice part in a selector
    return threads
      ? threads.map((t, i) => { 
        return (
          <ThreadWrapper key={i}>
            <Thread
              currentUserId={currentUserId}
              originalMessage={t[0]}
              childMessages={t.slice(1)}
            />
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
