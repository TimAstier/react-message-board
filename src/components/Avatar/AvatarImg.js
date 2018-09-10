import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
  width: ${props => `${props.size}px`};
  height: ${props => `${props.size}px`};
  border-radius: 50%;
  border: ${props => props.selected ? 'solid 2px #dce6eb' : 'none'};
  box-shadow: ${props => props.selected ? '0 0 0pt 2pt #55b6ff' : 'none'};
  cursor: pointer;
  box-sizing: border-box;
`;

const AvatarImg = props => {
  return (
    <Image
      size={props.size}
      selected={props.selected}
      src={props.src}
      onClick={props.onClick}
    />
  );
};

AvatarImg.defaultProps = {
  size: 70,
};

AvatarImg.propTypes = {
  selected: PropTypes.bool,
  src: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  size: PropTypes.number,
};

export default AvatarImg;
