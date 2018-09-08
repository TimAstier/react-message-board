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
  text-align: center;
`;

class InputArea extends React.Component {
  
  renderWelcomeMessage() {
    return (
      <div>
        <h1>Welcome to React Message Board!</h1>
        <h2>&#8679; Chose an avatar to get started &#8679;</h2>
      </div>
    );
  }
  
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
        isMessageChild={this.props.isMessageChild}
      />
    );
  }
  
  renderEdit() {
    return (
      <ChildComponents.Edit />
    );
  }
  
  renderSaving() {
    return <ChildComponents.Saving isMessageChild={this.props.isMessageChild} />;
  }
  
  renderChildComponent() {
    if (!this.props.isLoggedIn) {
      return this.renderWelcomeMessage();
    }
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
  isLoggedIn: PropTypes.bool.isRequired,
  isMessageChild: PropTypes.bool
};

export default InputArea;
