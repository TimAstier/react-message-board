import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Message } from '../../.';

const MessageWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Saving = ({ isMessageChild }) => (
  <MessageWrapper>
    <Message saving isChild={isMessageChild}/>
  </MessageWrapper>
);

Saving.propTypes = {
  isMessageChild: PropTypes.bool,
};

export default Saving;
