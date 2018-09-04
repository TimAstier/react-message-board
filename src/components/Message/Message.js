import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 250px;
  min-height: 100px;
  background-color: ${props => props.isChildMessage ? '#f1fab3' : '#d5f013'};
  display: flex;
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

const Message = ({ text, belongsToCurrentUser, isChildMessage }) => {
  return (
    <Wrapper isChildMessage={isChildMessage}>
      <LeftSidebar>
        <MessageButton>
          &#8618;
        </MessageButton>
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
  // id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  respond: PropTypes.func.isRequired,
  belongsToCurrentUser: PropTypes.bool,
  delete: PropTypes.func,
  edit: PropTypes.func,
  isChildMessage: PropTypes.bool
  // parentId: PropTypes.number,
  // authorId: PropTypes.number.isRequired,
};

export default Message;
