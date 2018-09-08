import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Thread, Spinner } from '../.';
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

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

class Board extends React.Component {
  
  renderThreads() {
    const { threads } = this.props;
    return threads
      ? threads.map((thread, i) => {
        const [parentMessage, ...childMessages] = thread;
        return (
          <ThreadWrapper key={i}>
            <Thread
              parentMessage={parentMessage}
              childMessages={childMessages}
            />
            </ThreadWrapper>
        );
      })
      : null;
  }

  render() {
    return(
      <Wrapper>
        { !this.props.loading
          ? this.renderThreads()
          : <SpinnerWrapper><Spinner size={145}/></SpinnerWrapper>
        }
      </Wrapper>
    );
  }
}

Board.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)),
  ),
  loading: PropTypes.bool,
};

export default Board;
