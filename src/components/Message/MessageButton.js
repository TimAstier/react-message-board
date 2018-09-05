import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  cursor: pointer;
`;

const iconElements = {
  hookedArrow: <span>&#8618;</span>,
  xmark: <span>&#10007;</span>,
  pencil: <span>&#9998;</span>,
};

const MessageButton = ({ icon, handleClick }) => {
  return (
    <Wrapper onClick={handleClick}>
      {iconElements[icon]}
    </Wrapper>
  );
};

MessageButton.propTypes = {
  icon: PropTypes.oneOf(['hookedArrow', 'pencil', 'xmark']).isRequired,
  handleClick: PropTypes.func,
};

export default MessageButton;
