import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Message as MessageModel } from '../../models';
import { Message } from '../.';

const Wrapper = styled.div`
  max-height: 400px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

class Thread extends React.Component {
  
  renderMessages() {
    return this.props.messages.map(m =>
      <Message
        key={m.id}
        text={m.text}
        belongsToCurrentUser={m.author === this.props.currentUserId}
        isChild={m.parentId ? true : false}
      />
    );
  }
  
  render() {
    return (
      <Wrapper>
        {this.renderMessages()}
      </Wrapper>
    );
  }
};

Thread.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)).isRequired,
  currentUserId: PropTypes.number
};

export default Thread;
