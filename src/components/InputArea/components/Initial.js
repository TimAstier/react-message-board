import React, { Fragment } from 'react';
import styled from 'styled-components';

import { Message } from '../../.';
import { Button } from '../../../containers';

const MessageWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Initial = () => {
  return (
    <Fragment>
      <MessageWrapper>
        <Message text="" noIcons/>
      </MessageWrapper>
      <Button
        label="New message"
        type="new"
      />
    </Fragment>
  );
};

export default Initial;
