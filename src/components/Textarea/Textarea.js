import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTextarea = styled.textarea`
  box-sizing: border-box;
  height: 100px;
  outline: none;
  resize: none;
  border: ${props => props.noBorder ? 'none' : '1px solid black'};
  background-color: transparent;
  width: 100%;
  padding: 5px;
  padding-top: 25px;
  text-align: center;
  font-family: Cambria;
  font-size: 18px;
`;

const Textarea = props => {
  return (
    <StyledTextarea
      autoFocus={props.autoFocus}
      noBorder={props.noBorder}
      value={props.value}
      onChange={props.handleChange}
    />
  );
};

Textarea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  noBorder: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

export default Textarea;
