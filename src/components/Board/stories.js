import React from 'react';
import { storiesOf } from '@storybook/react';
import _ from 'lodash';
import Provider from '../../helpers/testComponents/Provider';
import { Message } from '../../models';
import Board from './Board';

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
  text: 'I don\'t like pains au chocolat.',
  author: 3,
  parentId: null,
});

const messageE = new Message({
  id: 5,
  text: 'Me neither...',
  author: 4,
  parentId: 4,
});

const manyMessages = [];
const manyThreads = [];

_.times(15, (i) => {
  manyMessages.push(
    new Message({
      id: i + 2,
      text: 'Me please!',
      author: i + 2,
      parentId: 1,
    })
  );
});

_.times(8, () => {
  manyThreads.push([messageA, ...manyMessages]);
});

storiesOf('Board', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('loading: true', () => (
    <Board
      loading={true}
    />
  ))
  .add('empty: true', () => (
    <Board
      threads={[]}
      currentUserId={1}
    />
  ))
  .add('one thread', () => (
    <Board
      threads={[[messageA, messageB, messageC]]}
      currentUserId={1}
    />
  ))
  .add('one thread with no childMessages', () => (
    <Board
      threads={[[messageA]]}
      currentUserId={1}
    />
  ))
  .add('two threads', () => (
    <Board
      threads={[[messageA, messageB, messageC], [messageD, messageE]]}
      currentUserId={1}
    />
  ))
  .add('one long thread', () => (
    <Board
      threads={[[messageA, ...manyMessages]]}
      currentUserId={1}
    />
  ))
  .add('many threads', () => (
    <Board
      threads={manyThreads}
      currentUserId={1}
    />
  ));
