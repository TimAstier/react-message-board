import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import AvatarImg from './AvatarImg';
import { USERS } from '../../constants';

const renderAvatar = id => {
  return (
    <Avatar
      name={USERS[id].name}
      src={USERS[id].avatar}
      onClick={() => console.log('clicked!')}
    />  
  );
};

storiesOf('Avatar', module)
  .add('userId: 1', () => renderAvatar(1))
  .add('userId: 2', () => renderAvatar(2))
  .add('userId: 3', () => renderAvatar(3))
  .add('userId: 4', () => renderAvatar(4))
  .add('userId: 5', () => renderAvatar(5))
  .add('selected', () =>
    <Avatar
      selected={true}
      name={USERS[1].name}
      src={USERS[1].avatar}
      onClick={() => console.log('clicked!')}
    />
  );
  
storiesOf('AvatarImg', module)
  .add('size: 25', () => (
    <AvatarImg
      src={USERS[1].avatar}
      size={25}
    />  
  ))
  .add('selected', () => (
    <AvatarImg
      src={USERS[1].avatar}
      selected={true}
    />  
  ))
  .add('onClick', () => (
    <AvatarImg
      src={USERS[1].avatar}
      onClick={() => console.log('onClick')}
    />  
  ));
