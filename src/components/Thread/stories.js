import React from 'react';
import { storiesOf } from '@storybook/react';
import Provider from '../../helpers/testComponents/Provider';
import { Message } from '../../models';
import Thread from './Thread';
import times from 'lodash/times';

const messageA = new Message({
  id: 1,
  text: 'Who wants "pain au chocolat" for breakfast?',
  author: 1,
  parentId: null,
});

const messageB = new Message({
  id: 2,
  text: 'Me please!',
  author: 2,
  parentId: 1,
});

const messageC = new Message({
  id: 3,
  text: 'OK, will bring some tomorrow.',
  author: 1,
  parentId: 1,
});

const messageD = new Message({
  id: 4,
  text: `
  This is such a long text that I have no idea how it can fit
  into a single message but we will see how it goes. It needs
  to be even longer to break the minimum height so I'm adding
  even more meaningless text. And even more to finally break
  the height limit and see if it scrolls.
  `,
  author: 1,
  parentId: null,
});

const manyMessages = [];

times(15, (i) => {
  manyMessages.push(
    new Message({
      id: i + 1,
      text: 'Me please!',
      author: 1,
      parentId: 1,
    })
  );
});

storiesOf('Thread', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('with one message', () =>
    <Thread
      currentUserId={1}
      parentMessage={messageA}
      childMessages={[]}
    />
  )
  .add('with two child messages', () =>
    <Thread
      currentUserId={1}
      parentMessage={messageA}
      childMessages={[messageB, messageC]}
    />
  )
  .add('with many child messages', () =>
    <Thread
      currentUserId={1}
      parentMessage={messageA}
      childMessages={manyMessages}
    />
  ).add('with long original message', () =>
    <Thread
      currentUserId={1}
      parentMessage={messageD}
      childMessages={manyMessages}
    />
  );
