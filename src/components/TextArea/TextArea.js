import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextArea = styled.textarea`
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

const MyComponent = props => {
  return (
    <TextArea
      noBorder={props.noBorder}
      value={props.value}
      onChange={props.handleChange}
    />
  );
};

MyComponent.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  noBorder: PropTypes.bool,
};

export default MyComponent;
