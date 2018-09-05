import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message as MessageModel } from '../../models';
import { Message } from '../.';

const Wrapper = styled.div`
  max-height: 410px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
        <Message
          text={m.text}
          belongsToCurrentUser={m.author === this.props.currentUserId}
          isChild={m.parentId ? true : false}
        />
      </MessageWrapper>
    );
  }
  
  render() {
    return (
      <Wrapper>
        <Message
          text={this.props.originalMessage.text}
          belongsToCurrentUser={this.props.originalMessage.author === this.props.currentUserId}
          isChild={false}
        />
        <ChildMessagesWrapper>
          {this.renderChildMessages()}
        </ChildMessagesWrapper>
      </Wrapper>
    );
  }
};

Thread.propTypes = {
  originalMessage: PropTypes.instanceOf(MessageModel).isRequired,
  childMessages: PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)).isRequired,
  currentUserId: PropTypes.number,
};

export default Thread;
