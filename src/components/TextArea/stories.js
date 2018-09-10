import React from 'react';
import { storiesOf } from '@storybook/react';

import Textarea from './Textarea';

storiesOf('Textarea', module)
  .add("text: ''", () => 
    <Textarea
      value=""
      handleChange={() => console.log('change!')}
    />
  )
  .add('long text', () => 
    <Textarea
      value={'#'.repeat(240)}
      handleChange={() => console.log('change!')}
    />
  )
  .add('noBorder: true', () => 
    <Textarea
      value="This Textarea has no border."
      handleChange={() => console.log('change!')}
      noBorder={true}
    />
  )
  .add('autoFocus: true', () => 
    <Textarea
      value=""
      autoFocus={true}
      handleChange={() => console.log('change!')}
    />
  );
