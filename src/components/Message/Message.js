import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Spinner from '../Spinner/Spinner';
import AvatarImg from '../Avatar/AvatarImg';
import MessageButton from './MessageButton';

const Wrapper = styled.div`
  width: 250px;
  min-height: 100px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  border-radius: 10px;
  opacity: ${props => props.opacity};
  max-height: 250px;
`;

const Sidebar = styled.div`
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  flex-grow: 1;
  width: 180px;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  position: relative;
  display: block;
  word-wrap: break-word;
  font-family: Cambria;
  font-size: 18px;
  overflow-y: scroll;
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Message extends React.Component {
  backgroundColor() {
    if (!this.props.saving && this.props.deleting) return 'lightgray';
    return this.props.isChild ? '#f1fab3' : '#d5f013';
  }

  renderContent() {
    const { text, children, deleting, saving } = this.props;
    if (deleting || saving) return <SpinnerWrapper><Spinner size={55} /></SpinnerWrapper>;
    if (text) return <TextWrapper>{text}</TextWrapper>;
    if (children) return children;
    return null;
  }

  render() {
    const {
      children,
      avatar,
      saving,
      deleting,
      belongsToCurrentUser,
      isChild,
      noIcons,
      opacity,
      handleDeleteClick,
      handleEditClick,
      handleRespondClick,
    } = this.props;
    return (
      <Wrapper backgroundColor={this.backgroundColor()} opacity={opacity}>
        { children === undefined &&
          <Sidebar>
            <div>
              { avatar && !saving && !deleting &&
                <AvatarImg src={avatar} size={25} />
              }
            </div>
            { !saving && !deleting && !noIcons && !isChild &&
              <MessageButton
                icon="hookedArrow"
                handleClick={handleRespondClick}
              />
            }
          </Sidebar>
        }
        {this.renderContent()}
        { children === undefined &&
          <Sidebar>
            {
              !saving && !deleting && !noIcons && belongsToCurrentUser &&
              <Fragment>
                <MessageButton
                  icon="xmark"
                  handleClick={handleDeleteClick}
                />
                <MessageButton
                  icon="pencil"
                  handleClick={handleEditClick}
                />
              </Fragment>
            }
          </Sidebar>
        }
      </Wrapper>
    );
  }
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  isChild: PropTypes.bool,
  noIcons: PropTypes.bool,
  belongsToCurrentUser: PropTypes.bool,
  handleRespondClick: PropTypes.func,
  handleDeleteClick: PropTypes.func,
  handleEditClick: PropTypes.func,
  children: PropTypes.node,
  opacity: PropTypes.number,
  deleting: PropTypes.bool,
  saving: PropTypes.bool,
};

Message.defaultProps = {
  opacity: 1,
};

export default Message;
