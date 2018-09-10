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
  .add("status: 'initial'", () => (
    <InputArea
      isLoggedIn={true}
      status="initial"
    />
  ))
  .add("status: 'new'", () => (
    <InputArea
      isLoggedIn={true}
      status="new"
    />
  ))
  .add("charactersCountLabel: 'TEST'", () => (
    <InputArea
      isLoggedIn={true}
      status="new"
      charactersCountLabel="TEST"
    />
  ))
  .add('status: new && child', () => (
    <InputArea
      isLoggedIn={true}
      status="new"
      text=""
      isMessageChild={true}
    />
  ))
  .add("status: 'edit'", () => (
    <InputArea
      isLoggedIn={true}
      status="edit"
    />
  ))
  .add('status: saving', () => (
    <InputArea
      isLoggedIn={true}
      status="saving"
    />
  ));
