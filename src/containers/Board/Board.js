import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Board as BoardComponent } from '../../components';
import { Message as MessageModel } from '../../models';
import s from '../../rootSelectors';
import { actions as messagesActions } from '../../redux/messages';

class Board extends React.Component {
  
  componentDidMount() {
    this.props.fetchMessages();
  }
  
  render() {
    return (
      <BoardComponent
        threads={this.props.threads}
        currentUserId={this.props.currentUserId}
        loading={this.props.loading}
      />
    );
  }
}

Board.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)),
  ),
  currentUserId: PropTypes.number,
  fetchMessages: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  threads: s.messages.getThreads(state),
  loading: s.app.getLoading(state),
  currentUserId: s.auth.getCurrentUserId(state)
});

export default connect(
  mapStateToProps,
  {
    fetchMessages: messagesActions.fetch,
  }
)(Board);
