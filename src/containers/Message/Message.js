import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Message as MessageModel } from '../../models';
import { actions as messageActions } from '../../redux/message';
import { actions as messagesActions } from '../../redux/messages';
import { Message as MessageComponent } from '../../components';
import s from '../../rootSelectors';

class Message extends Component {
  render() {
    const { message, currentUserId } = this.props;
    return (
      <MessageComponent
        loading={this.props.loading || message.loading}
        text={message.text}
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
  loading: PropTypes.bool
};

const mapStateToProps = state => ({
  currentUserId: s.auth.getCurrentUserId(state),
});

export default connect(
  mapStateToProps,
  {
    clickedEdit: messageActions.clickedEdit,
    clickedRespond: messageActions.clickedRespond,
    delete: messagesActions.delete,
  }
)(Message);
