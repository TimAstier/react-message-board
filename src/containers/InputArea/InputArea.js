import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actions as inputAreaActions } from '../../redux/inputArea';
import { actions as messagesActions } from '../../redux/messages';
import { InputArea as InputAreaComponent } from '../../components';
import s from '../../rootSelectors';

class InputArea extends React.Component {

  // TODO: include author when saving
  render() {
    return (
      <InputAreaComponent
        status={this.props.status}
        charactersCountLabel={this.props.charactersCountLabel}
        text={this.props.text}
        handleNewClick={() => this.props.setStatus('new')}
        handleCancelClick={() => this.props.setStatus('initial')}
        handleSaveClick={() => this.props.save({
          text: this.props.text,
          parentId: null,
        })}
        handleTextareaChange={e => this.props.setText(e.target.value)}
      />
    );
  }
}

InputArea.propTypes = {
  status: PropTypes.oneOf([
    'initial',
    'new',
    'edit',
    'saving'
  ]).isRequired,
  charactersCountLabel: PropTypes.string.isRequired,
  setStatus: PropTypes.func.isRequired,
  save: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  status: s.inputArea.getStatus(state),
  charactersCountLabel: s.inputArea.getCharactersCountLabel(state),
  text: s.inputArea.getText(state),
});

export default connect(
  mapStateToProps,
  {
    setStatus: inputAreaActions.setStatus,
    save: messagesActions.save,
    setText: inputAreaActions.setText,
  }
)(InputArea);
