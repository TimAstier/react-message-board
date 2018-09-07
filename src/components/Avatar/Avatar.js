import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 108px;
  width: 70px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  border: ${props => props.selected ? 'solid 2px #dce6eb' : 'none'};
  box-shadow: ${props => props.selected ? '0 0 0pt 2pt #55b6ff' : 'none'};
  cursor: pointer;
  box-sizing: border-box;
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

const Avatar = props => {
  return (
    <Wrapper>
      <Image
        selected={props.selected}
        src={props.src}
        onClick={props.onClick}
      />
      <Name selected={props.selected} >
        {props.name}
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
