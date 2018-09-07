import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.button`
  min-width: 120px;
  height: 46px;
  padding-left: 30px;
  padding-right: 30px;
  background-color: ${props => props.secondary ? 'white' : 'blue'};
  color: ${props => props.secondary ? 'gray' : 'white'};
  border-radius: 23px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  opacity: ${props => props.disabled ? 0.3 : 1};
`;

const Button = ({ label, handleClick, secondary, disabled }) => {
  return (
    <Wrapper onClick={handleClick} secondary={secondary} disabled={disabled}>
      {label}
    </Wrapper>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Button;
