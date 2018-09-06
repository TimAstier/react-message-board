import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button, Message, TextArea } from '../../.';

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

// TODO: auto focus input

const Initial = props => {
  return (
    <Fragment>
      <LabelWrapper>{props.charactersCountLabel}</LabelWrapper>
      <SubWrapper>
        <Message noIcons>
          <TextArea
            value={props.text}
            noBorder
            handleChange={props.handleTextareaChange}
          />
        </Message>
      </SubWrapper>
      <ButtonsWrapper>
        <Button
          label="Cancel"
          secondary
          handleClick={props.handleCancelClick}
        />
        <Button
          label="Save"
          handleClick={props.handleSaveClick}
        />
      </ButtonsWrapper>
    </Fragment>
  );
};

Initial.propTypes = {
  charactersCountLabel: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleSaveClick: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
  handleTextareaChange: PropTypes.func.isRequired,
};

export default Initial;
