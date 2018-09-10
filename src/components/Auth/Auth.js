import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Avatar } from '../.';
import { USERS } from '../../constants';

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

class Auth extends React.Component{

  _renderAvatars() {
    const Avatars = [];
    for (let key in USERS) {
      Avatars.push(
        <Avatar
          key={key}
          name={USERS[key].name}
          src={USERS[key].avatar}
          selected={this.props.currentUserId === Number(key)}
          onClick={() => this.props.handleAvatarClick(USERS[key].id)}
        />
      );
    }
    return Avatars;
  };
  
  render() {
    return (
      <Wrapper>
        {this._renderAvatars()}
      </Wrapper>
    );
  }
}

Auth.defaultProps = {
  handleAvatarClick: id => console.log(`Avatar id: ${id} clicked!`)
};

Auth.propTypes = {
  currentUserId: PropTypes.number,
  handleAvatarClick: PropTypes.func.isRequired
};

export default Auth;
