import React from 'react';
import { storiesOf } from '@storybook/react';

import Provider from '../../helpers/testComponents/Provider';
import Message from './Message';
import MessageButton from './MessageButton';
import { TextArea } from '../../containers';

storiesOf('MessageButton', module)
  .add('icon: hookedArrow', () => 
    <MessageButton
      icon="hookedArrow"
      handleClick={() => console.log('clicked!')}
    />
  )
  .add('icon: pencil', () => 
    <MessageButton
      icon="pencil"
      handleClick={() => console.log('clicked!')}
    />
  )
  .add('icon: xmark', () => 
    <MessageButton
      icon="xmark"
      handleClick={() => console.log('clicked!')}
    />
  );

storiesOf('Message', module)
  .addDecorator(story => <Provider story={story()} />)
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
  .add('other long text', () =>
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
    <Message>
      <TextArea noBorder/>
    </Message>
  )
  .add('opacity: 0.1', () =>
    <Message
      text="Hello world!"
      opacity={0.1}
    />
  )
  ;
