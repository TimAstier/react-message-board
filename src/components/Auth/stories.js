import React from 'react';
import { storiesOf } from '@storybook/react';
import Auth from './Auth';

storiesOf('Auth', module)
  .add('no props', () => <Auth />)
  .add('currentUserId: 2', () => <Auth currentUserId={2}/>);
