import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputArea as InputAreaComponent } from '../../components';
import { actions as inputAreaActions } from '../../redux/inputArea';
import s from '../../rootSelectors';

class InputArea extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  
  handleInputChange(e) {
    return this.props.setText(e.target.value);
  }
  
  render() {
    return (
      <InputAreaComponent
        status={this.props.status}
        text={this.props.text}
        handleInputChange={this.handleInputChange}
        remainingCharacters={this.props.remainingCharacters}
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
  text: PropTypes.string,
  setText: PropTypes.func.isRequired,
  remainingCharacters: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  status: s.inputArea.getStatus(state),
  text: s.inputArea.getText(state),
  remainingCharacters: s.inputArea.getRemainingCharacters(state),
});

export default connect(
  mapStateToProps,
  {
    setText: inputAreaActions.setText,
  }
)(InputArea);
