import React from 'react';
import { storiesOf } from '@storybook/react';

import TextArea from './TextArea';

storiesOf('TextArea', module)
  .add('empty', () => 
    <TextArea
      value=""
      handleChange={() => console.log('change!')}
    />
  )
  .add('long text', () => 
    <TextArea
      value={'#'.repeat(240)}
      handleChange={() => console.log('change!')}
    />
  )
  .add('noBorder', () => 
    <TextArea
      value="This TextArea has no border."
      handleChange={() => console.log('change!')}
      noBorder={true}
    />
  );
