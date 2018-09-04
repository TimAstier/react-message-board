import React from 'react';
import { storiesOf } from '@storybook/react';
import InputArea from './InputArea';

storiesOf('InputArea', module)
  .add('status: initial', () =>
    <InputArea
      status="initial"
      text="This is my first message!"
    />
  )
  .add('status: new', () =>
    <InputArea
      status="new"
      text="This is my first message!"
    />
  )
  .add('status: edit', () =>
    <InputArea
      status="edit"
      text="This is my first message!"
    />
  )
  .add('status: saving', () =>
    <InputArea
      status="saving"
      text="This is my first message!"
    />
  );
