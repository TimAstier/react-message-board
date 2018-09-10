import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { USERS } from '../../constants';
import { Message as MessageModel } from '../../models';
import { actions as inputAreaActions } from '../../redux/inputArea';
import { actions as messagesActions } from '../../redux/messages';
import { Message as MessageComponent } from '../../components';
import s from '../../rootSelectors';

class Message extends Component {
  shouldRenderControlledText() {
    const { message, inputStatus, inputMessageId } = this.props;
    return inputStatus === 'edit' && message.id === inputMessageId;
  }

  controlledText() {
    return this.props.inputText;
  }

  text() {
    if (this.shouldRenderControlledText()) {
      return this.controlledText();
    }
    return this.props.message.text;
  }

  isUpdating() {
    const { inputStatus, inputMessageId, message } = this.props;
    return inputStatus === 'saving' && inputMessageId === message.id;
  }

  render() {
    const { message, currentUserId } = this.props;
    return (
      <MessageComponent
        avatar={USERS[message.author].avatar}
        deleting={this.props.deleting || message.deleting}
        saving={this.isUpdating()}
        text={this.text()}
        noIcons={currentUserId === null}
        belongsToCurrentUser={message.author === currentUserId}
        isChild={message.parentId !== null}
        handleDeleteClick={() => this.props.delete(message.id)}
        handleEditClick={() => this.props.clickedEdit(message)}
        handleRespondClick={() => this.props.clickedRespond(message)}
      />
    );
  }
}

Message.propTypes = {
  message: PropTypes.instanceOf(MessageModel).isRequired,
  currentUserId: PropTypes.number,
  clickedEdit: PropTypes.func.isRequired,
  clickedRespond: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  deleting: PropTypes.bool,
  inputMessageId: PropTypes.number,
  inputText: PropTypes.string,
  inputStatus: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  currentUserId: s.auth.getCurrentUserId(state),
  inputMessageId: s.inputArea.getMessageId(state),
  inputText: s.inputArea.getText(state),
  inputStatus: s.inputArea.getStatus(state),
});

export default connect(
  mapStateToProps,
  {
    clickedEdit: inputAreaActions.clickedEdit,
    clickedRespond: inputAreaActions.clickedRespond,
    delete: messagesActions.delete,
  }
)(Message);
