import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('label: test', () =>
    <Button label="Test" />
  )
  .add('secondary', () =>
    <Button label="Test" secondary />
  )
  .add('longer label', () =>
    <Button label="New message" />
  )
  .add('handleClick', () =>
    <Button label="Click me" handleClick={() => console.log('clicked!')} />
  );
