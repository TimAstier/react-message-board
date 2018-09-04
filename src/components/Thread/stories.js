import React from 'react';
import { storiesOf } from '@storybook/react';
import { Message } from '../../models';
import Thread from './Thread';
import _ from 'lodash';

const messageA = new Message({
  id: 1,
  text: 'Who wants "pain au chocolat" for breakfast?',
  author: 1,
  parentId: null
});

const messageB = new Message({
  id: 2,
  text: 'Me please!',
  author: 2,
  parentId: 1
});

const messageC = new Message({
  id: 3,
  text: 'OK, will bring some tomorrow.',
  author: 1,
  parentId: 1
});

const manyMessages = [];

_.times(15, (i) => {
  manyMessages.push(
    new Message({
      id: i + 2,
      text: 'Me please!',
      author: i + 2,
      parentId: 1
    })
  );
});

storiesOf('Thread', module)
  .add('with one message', () =>
    <Thread
      currentUserId={1}
      messages={[messageA]}
    />
  )
  .add('with two child messages', () =>
    <Thread
      currentUserId={1}
      messages={[messageA, messageB, messageC]}
    />
  )
  .add('with many child messages', () =>
    <Thread
      currentUserId={1}
      messages={[messageA, ...manyMessages]}
    />
  );
