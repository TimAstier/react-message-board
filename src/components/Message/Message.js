import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 250px;
  min-height: 100px;
  background-color: ${props => props.isChild ? '#f1fab3' : '#d5f013'};
  display: flex;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const LeftSidebar = styled.div`
  min-width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const RightSidebar = styled.div`
  min-width: 35px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Text = styled.div`
  flex-grow: 1;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const MessageButton = styled.div`
  cursor: pointer;
`;

const Message = ({ text, belongsToCurrentUser, isChild }) => {
  return (
    <Wrapper isChild={isChild}>
      <LeftSidebar>
        {
          !isChild &&
          <MessageButton>
            &#8618;
          </MessageButton>
        }
      </LeftSidebar>
      <Text>
        {text}
      </Text>
      <RightSidebar>
        {
          belongsToCurrentUser &&
          <Fragment>
            <MessageButton>
              <span role="img" aria-label="wastebasket emoji">
                🗑️
              </span>
            </MessageButton>
            <MessageButton>
              &#9998;
            </MessageButton>
          </Fragment>
        }
      </RightSidebar>
    </Wrapper>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
  isChild: PropTypes.bool,
  belongsToCurrentUser: PropTypes.bool,
  respond: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
};

export default Message;
