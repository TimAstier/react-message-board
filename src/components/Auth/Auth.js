import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from '../Avatar/Avatar';
import { USERS } from '../../constants';

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
`;

class Auth extends React.Component {
  renderAvatars() {
    const Avatars = [];
    Object.keys(USERS).forEach((key) => {
      Avatars.push(
        <Avatar
          key={key}
          name={USERS[key].name}
          src={USERS[key].avatar}
          selected={this.props.currentUserId === Number(key)}
          onClick={() => this.props.handleAvatarClick(USERS[key].id)}
        />
      );
    });
    return Avatars;
  }

  render() {
    return (
      <Wrapper>
        {this.renderAvatars()}
      </Wrapper>
    );
  }
}

Auth.propTypes = {
  currentUserId: PropTypes.number,
  handleAvatarClick: PropTypes.func.isRequired,
};

export default Auth;
