import React from 'react';
import styled from 'styled-components';

import { Message } from '../../.';

const MessageWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Saving = () => (
  <MessageWrapper>
    <Message saving />
  </MessageWrapper>
);

export default Saving;
