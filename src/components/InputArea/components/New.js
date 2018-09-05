import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, TextArea } from '../../../containers';
import { Message } from '../../.';

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

const Initial = ({charactersCountLabel}) => {
  return (
    <Fragment>
      <LabelWrapper>{charactersCountLabel}</LabelWrapper>
      <SubWrapper>
        <Message noIcons>
          <TextArea noBorder />
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
  charactersCountLabel: PropTypes.string.isRequired
};

export default Initial;
