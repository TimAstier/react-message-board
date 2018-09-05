import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import MessageButton from './MessageButton';

const Wrapper = styled.div`
  width: 250px;
  min-height: 100px;
  background-color: ${props => props.isChild ? '#f1fab3' : '#d5f013'};
  display: flex;
  border-radius: 10px;
`;

const Sidebar = styled.div`
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const LeftSidebar = styled(Sidebar)`
  justify-content: flex-end;
`;

const RightSidebar = styled(Sidebar)`
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  flex-grow: 1;
  width: 180px;
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  display: block;
  word-wrap: break-word;
`;

class Message extends React.Component{
  renderContent() {
    const { text, children } = this.props;
    if (text) {
      return (
        <TextWrapper>
          {text}
        </TextWrapper>
      );
    }
    if (children) {
      return children;
    }
    return null;
  }
  
  render() {
    const { belongsToCurrentUser, isChild, noIcons } = this.props;
    return (
      <Wrapper isChild={isChild}>
        <LeftSidebar>
          { !noIcons && !isChild && <MessageButton icon="hookedArrow" /> }
        </LeftSidebar>
        {this.renderContent()}
        <RightSidebar>
          {
            !noIcons && belongsToCurrentUser &&
            <Fragment>
              <MessageButton icon="xmark" />
              <MessageButton icon="pencil" />
            </Fragment>
          }
        </RightSidebar>
      </Wrapper>
    );
  } 
}

Message.propTypes = {
  text: PropTypes.string,
  isChild: PropTypes.bool,
  noIcons: PropTypes.bool,
  belongsToCurrentUser: PropTypes.bool,
  respond: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  edit: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Message;
