import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from './Message';
import MessageButton from './MessageButton';
import { TextArea } from '../.';

storiesOf('MessageButton', module)
  .add('icon: hookedArrow', () => 
    <MessageButton
      icon="hookedArrow"
    />
  )
  .add('icon: pencil', () => 
    <MessageButton
      icon="pencil"
    />
  )
  .add('icon: xmark', () => 
    <MessageButton
      icon="xmark"
    />
  )
  .add('with handleClick', () => 
    <MessageButton
      icon="xmark"
      handleClick={() => console.log('clicked!')}
    />
  );

storiesOf('Message', module)
  .add('short text', () =>
    <Message
      text="Hello world!"
    />
  )
  .add('medium text', () =>
    <Message
      text="This is our new message board! I'm so excited."
    />
  )
  .add('long text', () =>
    <Message
      text={'#'.repeat(240)}
    />
  )
  .add('belongsToCurrentUser', () =>
    <Message
      text="This is my own message."
      belongsToCurrentUser
    />
  )
  .add('isChild', () =>
    <Message
      text="Hello world!"
      isChild
    />
  )
  .add('noIcons', () =>
    <Message
      text="This is my own message."
      noIcons
    />
  )
  .add('children: TextArea', () =>
    <Message><TextArea noBorder/></Message>
  );
