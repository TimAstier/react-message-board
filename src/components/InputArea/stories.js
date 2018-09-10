import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../helpers/testComponents/Provider';

import InputArea from './InputArea';

storiesOf('InputArea', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('isLoggedIn: false', () => (
    <InputArea
      isLoggedIn={false}
    />
  ))
  .add('status: initial', () => (
    <InputArea
      isLoggedIn={true}
      status="initial"
      text="This is my first message!"
    />
  ))
  .add('status: new', () => (
    <InputArea
      isLoggedIn={true}
      status="new"
      text="This is my first message!"
      remainingCharacters={20}
    />
  ))
  .add('status: new && child', () => (
    <InputArea
      isLoggedIn={true}
      status="new"
      text="This is my first message!"
      remainingCharacters={20}
      isMessageChild={true}
    />
  ))
  // .add('status: edit', () =>
  //   <InputArea
  //     status="edit"
  //     text="This is my first message!"
  //   />
  // )
  .add('status: saving', () => (
    <InputArea
      isLoggedIn={true}
      status="saving"
      text="This is my first message!"
    />
  ));
