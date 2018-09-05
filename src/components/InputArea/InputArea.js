import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ChildComponents from './components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

class InputArea extends React.Component {

  renderChildComponent() {
    switch(this.props.status) {
      case 'initial':
        return (
          <ChildComponents.Initial
            handleButtonClick={this.props.handleButtonClick}
          />
        );
      case 'new':
        return (
          <ChildComponents.New
            text={this.props.text}
            handleInputChange={this.props.handleInputChange}
            remainingCharacters={this.props.remainingCharacters}
          />
        );
      case 'edit':
        return (
          <ChildComponents.Edit
            text={this.props.text}
            handleInputChange={this.props.handleInputChange}
          />
        );
      case 'saving': return <ChildComponents.Saving />;
      default: return null;
    }
  }
  
  render() {
    return (
      <Wrapper>
        {this.renderChildComponent()}
      </Wrapper>
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
  handleInputChange: PropTypes.func,
  remainingCharacters: PropTypes.number.isRequired,
};

export default InputArea;
