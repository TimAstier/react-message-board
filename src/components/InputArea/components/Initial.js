import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Message, Button } from '../..';

const MessageWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Initial = ({ handleNewClick }) => {
  return (
    <Fragment>
      <MessageWrapper>
        <Message
          text=""
          noIcons={true}
          opacity={0}
        />
      </MessageWrapper>
      <Button
        label="New message"
        type="new"
        handleClick={handleNewClick}
      />
    </Fragment>
  );
};

Initial.propTypes = {
  handleNewClick: PropTypes.func.isRequired,
};

export default Initial;
