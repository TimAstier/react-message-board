import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('short label', () =>
    <Button
      label="Test"
      handleClick={() => console.log('clicked!')}
    />
  )
  .add('longer label', () =>
    <Button
      label="New message"
      handleClick={() => console.log('clicked!')}
    />
  )
  .add('secondary: true', () =>
    <Button
      label="Test"
      secondary
      handleClick={() => console.log('clicked!')}
    />
  )
  .add('disabled', () =>
    <Button
      label="Test"
      disabled
      handleClick={() => console.log('clicked!')}
    />
  );
