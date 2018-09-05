import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import s from '../../rootSelectors';
import { actions as inputAreaActions } from '../../redux/inputArea';
import { TextArea as TextAreaComponent } from '../../components';

class TextArea extends Component {
  render() {
    return (
      <TextAreaComponent
        value={this.props.text}
        handleChange={e => this.props.setText(e.target.value)}
        noBorder={this.props.noBorder}
      />
    );
  }
}

TextArea.propTypes = {
  text: PropTypes.string.isRequired,
  setText: PropTypes.func.isRequired,
  noBorder: PropTypes.bool,
};

const mapStateToProps = state => ({
  text: s.inputArea.getText(state),
});

export default connect(
  mapStateToProps,
  {
    setText: inputAreaActions.setText,
  }
)(TextArea);
