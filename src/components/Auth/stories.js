import React from 'react';
import { storiesOf } from '@storybook/react';
import Auth from './Auth';

storiesOf('Auth', module)
  .add('no props', () => (
    <Auth handleAvatarClick={() => console.log('clicked')} />
  ))
  .add('currentUserId: 2', () => (
    <Auth currentUserId={2} handleAvatarClick={() => console.log('clicked')} />
  ));
