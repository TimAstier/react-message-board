import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as inputAreaActions } from '../../redux/inputArea';
import { actions as messagesActions } from '../../redux/messages';
import { InputArea as InputAreaComponent } from '../../components';
import s from '../../rootSelectors';

class InputArea extends React.Component {
  render() {
    return (
      <InputAreaComponent
        isLoggedIn={this.props.isLoggedIn}
        status={this.props.status}
        charactersCountLabel={this.props.charactersCountLabel}
        text={this.props.text}
        handleNewClick={this.props.clickedNew}
        handleCancelClick={this.props.clickedCancel}
        handleCreateClick={() => this.props.create({
          text: this.props.text,
          parentId: this.props.parentId,
          author: this.props.currentUserId,
        })}
        handleUpdateClick={() => this.props.update({
          id: this.props.messageId,
          text: this.props.text,
          author: this.props.currentUserId,
          parentId: this.props.parentId,
        })}
        handleTextareaChange={e => this.props.setText(e.target.value)}
        isMessageChild={this.props.parentId !== null}
      />
    );
  }
}

InputArea.propTypes = {
  status: PropTypes.oneOf([
    'initial',
    'new',
    'edit',
    'saving',
  ]).isRequired,
  charactersCountLabel: PropTypes.string.isRequired,
  clickedCancel: PropTypes.func.isRequired,
  clickedNew: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  parentId: PropTypes.number,
  setText: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  currentUserId: PropTypes.number,
  messageId: PropTypes.number,
};

const mapStateToProps = state => ({
  status: s.inputArea.getStatus(state),
  charactersCountLabel: s.inputArea.getCharactersCountLabel(state),
  text: s.inputArea.getText(state),
  parentId: s.inputArea.getParentId(state),
  messageId: s.inputArea.getMessageId(state),
  isLoggedIn: s.auth.getIsLoggedIn(state),
  currentUserId: s.auth.getCurrentUserId(state),
});

export default connect(
  mapStateToProps,
  {
    clickedCancel: inputAreaActions.clickedCancel,
    clickedNew: inputAreaActions.clickedNew,
    create: messagesActions.create,
    update: messagesActions.update,
    setText: inputAreaActions.setText,
  }
)(InputArea);
