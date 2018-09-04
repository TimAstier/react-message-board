import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 20px;
  height: 230px;
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Textarea = styled.textarea`
  outline: none;
  resize: none;
  width: 600px;
	height: 120px;
	border: 3px solid #cccccc;
	padding: 5px;
  font-size: 14px;
	font-family: Tahoma, sans-serif;
`;

const Header = styled.div`
  font-style: italic;
`;

const Button = styled.button`
  width: 120px;
  height: 46px;
  background-color: blue;
  color: white;
  border-radius: 23px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`;

class InputArea extends React.Component {
  renderInitial() {
    return (
      <Button>+ New +</Button>
    );
  }
  
  renderNew() {
    return (
      <Fragment>
        <Header>Write a new message:</Header>
        <Textarea value={this.props.text}/>
        <Button>Save</Button>
      </Fragment>
    );
  }
  
  renderEdit() {
    return (
      <Fragment>
        <Header>Edit this message:</Header>
        <Textarea value={this.props.text}/>
        <Button>Save</Button>
      </Fragment>
    );
  }
  
  renderSaving() {
    return (
      <div>Saving...</div>
    );
  }
  
  renderContent() {
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
        {this.renderContent()}
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
  text: PropTypes.string
};

export default InputArea;
