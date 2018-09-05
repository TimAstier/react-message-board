import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { InputArea as InputAreaComponent } from '../../components';
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
        charactersCountLabel={this.props.charactersCountLabel}
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
};

const mapStateToProps = state => ({
  status: s.inputArea.getStatus(state),
  charactersCountLabel: s.inputArea.getCharactersCountLabel(state),
});

export default connect(
  mapStateToProps,
)(InputArea);
