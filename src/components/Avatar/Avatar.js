import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import AvatarImg from './AvatarImg';

const Wrapper = styled.div`
  height: 108px;
  width: 70px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`  
  font-family: cambria;
  font-size: ${props => props.selected ? '23px' : '18px'};
  font-weight: 500;
  color: ${props => props.selected ? 'blue' : '#b2babf'};
  height: 38px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
`;

const Avatar = ({ selected, src, onClick, name }) => {
  return (
    <Wrapper>
      <AvatarImg
        selected={selected}
        src={src}
        onClick={onClick}
      />
      <Name selected={selected}>
        {name}
      </Name>
    </Wrapper>
  );
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Avatar;
