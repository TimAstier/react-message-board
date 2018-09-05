import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../helpers/testComponents/Provider';

import InputArea from './InputArea';

storiesOf('InputArea', module)
  .addDecorator(story => <Provider story={story()} />)
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
      remainingCharacters={20}
    />
  )
  // .add('status: edit', () =>
  //   <InputArea
  //     status="edit"
  //     text="This is my first message!"
  //   />
  // )
  .add('status: saving', () =>
    <InputArea
      status="saving"
      text="This is my first message!"
    />
  );
