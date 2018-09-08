import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message as MessageModel } from '../../models';
import { Message } from '../../containers';

const Wrapper = styled.div`
  max-height: 410px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ParentMessageWrapper = styled.div`
  flex-grow: 1;
`;

const ChildMessagesWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  max-height: 300px;
`;

const MessageWrapper = styled.div`
  margin-bottom: 10px;
`;

class Thread extends React.Component {
  
  renderChildMessages() {
    return this.props.childMessages.map(m =>
      <MessageWrapper key={m.id}>
        <Message message={m} />
      </MessageWrapper>
    );
  }
  
  render() {
    return (
      <Wrapper>
        <ParentMessageWrapper>
          <Message message={this.props.parentMessage}/>
        </ParentMessageWrapper>
        <ChildMessagesWrapper>
          {this.renderChildMessages()}
        </ChildMessagesWrapper>
      </Wrapper>
    );
  }
};

Thread.propTypes = {
  parentMessage: PropTypes.instanceOf(MessageModel).isRequired,
  childMessages: PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)).isRequired,
};

export default Thread;
