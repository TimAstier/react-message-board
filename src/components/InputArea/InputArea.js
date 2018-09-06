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
  
  renderInitial() {
    return (
      <ChildComponents.Initial
        handleNewClick={this.props.handleNewClick}
      />
    );
  }
  
  renderNew() {
    return (
      <ChildComponents.New
        charactersCountLabel={this.props.charactersCountLabel}
        text={this.props.text}
        handleSaveClick={this.props.handleSaveClick}
        handleCancelClick={this.props.handleCancelClick}
        handleTextareaChange={this.props.handleTextareaChange}
      />
    );
  }
  
  renderEdit() {
    return (
      <ChildComponents.Edit />
    );
  }
  
  renderSaving() {
    return <ChildComponents.Saving />;
  }
  
  renderChildComponent() {
    switch(this.props.status) {
      case 'initial': return this.renderInitial();
      case 'new': return this.renderNew();
      case 'edit': return this.renderEdit();
      case 'saving': return this.renderSaving();
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
  charactersCountLabel: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleNewClick: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  handleTextareaChange: PropTypes.func.isRequired,
};

export default InputArea;
