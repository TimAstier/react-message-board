import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../helpers/testComponents/Provider';

import InputArea from './InputArea';

// Can be improved by creating a decorator
// that would add mockProps to all stories
const mockProps = {
  handleNewClick: () => { console.log('clicked new!'); },
  handleCancelClick: () => { console.log('clicked cancel!'); },
  handleCreateClick: () => { console.log('clicked create!'); },
  handleUpdateClick: () => { console.log('clicked update!'); },
  handleTextareaChange: () => { console.log('changed text!'); },
};

storiesOf('InputArea', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('isLoggedIn: false', () => (
    <InputArea
      isLoggedIn={false}
      {...mockProps}
    />
  ))
  .add("status: 'initial'", () => (
    <InputArea
      isLoggedIn={true}
      status="initial"
      {...mockProps}
    />
  ))
  .add("status: 'new'", () => (
    <InputArea
      isLoggedIn={true}
      status="new"
      {...mockProps}
    />
  ))
  .add("charactersCountLabel: 'TEST'", () => (
    <InputArea
      isLoggedIn={true}
      status="new"
      charactersCountLabel="TEST"
      {...mockProps}
    />
  ))
  .add('status: new && child', () => (
    <InputArea
      isLoggedIn={true}
      status="new"
      text=""
      isMessageChild={true}
      {...mockProps}
    />
  ))
  .add("status: 'edit'", () => (
    <InputArea
      isLoggedIn={true}
      status="edit"
      {...mockProps}
    />
  ))
  .add('status: saving', () => (
    <InputArea
      isLoggedIn={true}
      status="saving"
      {...mockProps}
    />
  ));
