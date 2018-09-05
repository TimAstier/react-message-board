import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { actions as inputAreaActions } from '../../redux/inputArea';
import { Button as ButtonComponent } from '../../components';

class Button extends Component {
  
  makeHandleClick() {
    if (this.props.type === 'new') {
      return () => this.props.setStatus('new');
    }
    if (this.props.type === 'cancel') {
      return () => this.props.setStatus('initial');
    }
    if (this.props.type === 'saveNew') {
      // TODO
      return () => console.log('saveNew');
    }
    if (this.props.type === 'saveEdit') {
      // TODO
      return () => console.log('saveEdit');
    }
    return null;
  }
  
  render() {
    return (
      <ButtonComponent
        label={this.props.label}
        secondary={this.props.secondary}
        handleClick={this.makeHandleClick()}
      />
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['new', 'saveNew', 'saveEdit', 'cancel']).isRequired,
  label: PropTypes.string.isRequired,
  secondary: PropTypes.bool,
  setStatus: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    setStatus: inputAreaActions.setStatus
  }
)(Button);
