import React from 'react';
import { storiesOf } from '@storybook/react';

import Provider from '../../helpers/testComponents/Provider';
import Message from './Message';
import MessageButton from './MessageButton';
import { Textarea } from '../.';

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
  .add('loading', () => <Message loading={true} />)
  .add('saving', () => <Message saving={true} />)
  .add('short text', () =>
    <Message
      text="Hello world!"
      handleRespondClick={() => console.log('clicked')}
    />
  )
  .add('medium text', () =>
    <Message
      text="This is our new message board! I'm so excited."
      handleRespondClick={() => console.log('clicked')}
    />
  )
  .add('long text', () =>
    <Message
      text={'#'.repeat(240)}
      handleRespondClick={() => console.log('clicked')}
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
      handleRespondClick={() => console.log('clicked')}
    />
  )
  .add('belongsToCurrentUser', () =>
    <Message
      text="This is my own message."
      belongsToCurrentUser={true}
      handleDeleteClick={() => console.log('clicked')}
      handleEditClick={() => console.log('clicked')}
      handleRespondClick={() => console.log('clicked')}
    />
  )
  .add('isChild', () =>
    <Message
      text="Hello world!"
      isChild={true}
    />
  )
  .add('avatar', () =>
    <Message
      avatar="https://api.adorable.io/avatars/285/albert@adorable.io.png"
      text="Hello world!"
      handleRespondClick={() => console.log('clicked')}
    />
  )
  .add('noIcons', () =>
    <Message
      text="This is my own message."
      noIcons={true}
    />
  )
  .add('children: Textarea', () =>
    <Message noIcons={true}>
      <Textarea noBorder={true}/>
    </Message>
  )
  .add('opacity: 0.1', () =>
    <Message
      text="Hello world!"
      opacity={0.1}
      handleRespondClick={() => console.log('clicked')}
    />
  )
  ;
