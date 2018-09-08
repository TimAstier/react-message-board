import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spinner } from '../.';
import MessageButton from './MessageButton';

const Wrapper = styled.div`
  width: 250px;
  min-height: 100px;
  background-color: ${props => props.isChild ? '#f1fab3' : '#d5f013'};
  display: flex;
  border-radius: 10px;
  opacity: ${props => props.opacity};
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

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Message extends React.Component{
  renderContent() {
    const { text, children, loading } = this.props;
    if (loading) {
      return <SpinnerWrapper><Spinner size={55} /></SpinnerWrapper>;
    }
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
    const {
      loading,
      belongsToCurrentUser,
      isChild,
      noIcons,
      opacity,
      handleDeleteClick,
      handleEditClick,
      handleRespondClick
    } = this.props;
    return (
      <Wrapper isChild={isChild} opacity={opacity}>
        <LeftSidebar>
          { !loading && !noIcons && !isChild &&
            <MessageButton icon="hookedArrow" handleClick={handleRespondClick} />
          }
        </LeftSidebar>
        {this.renderContent()}
        <RightSidebar>
          {
            !loading && !noIcons && belongsToCurrentUser &&
            <Fragment>
              <MessageButton icon="xmark" handleClick={handleDeleteClick} />
              <MessageButton icon="pencil" handleClick={handleEditClick} />
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
  handleRespondClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
  handleEditClick: PropTypes.func,
  children: PropTypes.node,
  opacity: PropTypes.number,
  loading: PropTypes.bool
};

Message.defaultProps = {
  opacity: 1
};

export default Message;
