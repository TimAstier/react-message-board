import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from './Spinner';

storiesOf('Spinner', module)
  .add('no props', () =>
    <Spinner />
  )
  .add('size: 50', () =>
    <Spinner size={50}/>
  )
  .add('delay: 2000', () =>
    <Spinner delay={2000} />
  );
