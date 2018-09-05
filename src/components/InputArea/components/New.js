import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from '../../../containers';
import { Message, TextArea } from '../../.';
import { MAX_MESSAGE_LENGTH } from '../../../constants';

const SubWrapper = styled.div`
  margin-bottom: 20px;
`;

const ButtonsWrapper = styled.div`
  width: 260px;
  display: flex;
  justify-content: space-between;
`;

const LabelWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Initial = props => {
  return (
    <Fragment>
      <LabelWrapper>
        {`${MAX_MESSAGE_LENGTH - props.remainingCharacters}
        / ${MAX_MESSAGE_LENGTH}`}
      </LabelWrapper>
      <SubWrapper>
        <Message noIcons>
          <TextArea
            value={props.text}
            handleChange={props.handleInputChange}
            noBorder
          />
        </Message>
      </SubWrapper>
      <ButtonsWrapper>
        <Button type="cancel" label="Cancel" secondary />
        <Button type="saveNew" label="Save" />
      </ButtonsWrapper>
    </Fragment>
  );
};

Initial.propTypes = {
  text: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func,
  remainingCharacters: PropTypes.number.isRequired
};

export default Initial;
