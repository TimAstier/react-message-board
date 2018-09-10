import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as ChildComponents from './components';
import { GITHUB_LINK } from '../../constants';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  text-align: center;
`;

const WelcomeMessage = styled.div`
  font-family: Cambria;
`;

const GithubLink = () => (
  <a href={GITHUB_LINK} target="_blank" rel="noopener noreferrer">Github</a>
);

const Welcome = () => (
  <WelcomeMessage>
    <h1>React Message Board</h1>
    <h2>&#8679; Chose an avatar to get started &#8679;</h2>
    <p>
      {'See source on '}
      <GithubLink />
      .
    </p>
  </WelcomeMessage>
);

class InputArea extends React.Component {
  renderInitial() {
    return (
      <ChildComponents.Initial
        handleNewClick={this.props.handleNewClick}
      />
    );
  }

  renderInput(primaryLabel, handlePrimaryClick) {
    return (
      <ChildComponents.Input
        charactersCountLabel={this.props.charactersCountLabel}
        primaryLabel={primaryLabel}
        text={this.props.text}
        status={this.props.status}
        handleCancelClick={this.props.handleCancelClick}
        handlePrimaryClick={handlePrimaryClick}
        handleTextareaChange={this.props.handleTextareaChange}
        isMessageChild={this.props.isMessageChild}
      />
    );
  }

  renderSaving() {
    return (
      <ChildComponents.Saving
        isMessageChild={this.props.isMessageChild}
      />
    );
  }

  renderChildComponent() {
    if (!this.props.isLoggedIn) {
      return <Welcome />;
    }
    switch (this.props.status) {
      case 'initial': return this.renderInitial();
      case 'new':
        return this.renderInput('Create', this.props.handleCreateClick);
      case 'edit':
        return this.renderInput('Update', this.props.handleUpdateClick);
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
    'saving',
  ]).isRequired,
  charactersCountLabel: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleNewClick: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
  handleCreateClick: PropTypes.func.isRequired,
  handleUpdateClick: PropTypes.func.isRequired,
  handleTextareaChange: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  isMessageChild: PropTypes.bool,
};

export default InputArea;
