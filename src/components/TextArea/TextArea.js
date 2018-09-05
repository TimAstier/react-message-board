import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  outline: none;
  resize: none;
  border: ${props => props.noBorder ? 'none' : '1px solid black'};
  background-color: transparent;
  max-width: 180px;
	padding: 5px;
  font-size: 14px;
	font-family: Tahoma, sans-serif;
  text-align: center;
`;

const TextArea = props => {
  return (
    <StyledTextArea
      noBorder={props.noBorder}
      value={props.value}
      onChange={props.handleChange}
    />
  );
};

TextArea.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  noBorder: PropTypes.bool,
};

export default TextArea;
