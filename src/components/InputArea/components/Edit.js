import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../.';

const Header = styled.div`
  font-style: italic;
`;

const Textarea = styled.textarea`
  outline: none;
  resize: none;
  width: 600px;
	height: 100px;
	border: 3px solid #cccccc;
	padding: 5px;
  font-size: 14px;
	font-family: Tahoma, sans-serif;
`;

const Edit = props => {
  return (
    <Fragment>
      <Header>Write a new message:</Header>
      <Textarea
        value={props.text}
        onChange={props.handleInputChange}
      />
      <div>
        <Button label="Cancel" />
        <Button label="Save" />
      </div>
    </Fragment>
  );
};

Edit.propTypes = {
  text: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
};

export default Edit;
