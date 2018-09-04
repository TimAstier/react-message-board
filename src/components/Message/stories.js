import React from 'react';
import { storiesOf } from '@storybook/react';

import Message from './Message';

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
      text={`
        This is such a long text that I have no idea how it can fit
        into a single message but we will see how it goes. It needs
        to be even longer to break the minimum height so I'm adding
        even more meaningless text.
      `}
    />
  )
  .add('belongsToCurrentUser', () =>
    <Message
      text="This is my own message."
      belongsToCurrentUser
    />
  )
  .add('isChildMessage', () =>
    <Message
      text="Hello world!"
      isChildMessage
    />
  )
  ;
