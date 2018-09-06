import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Board as BoardComponent } from '../../components';
import { Message as MessageModel } from '../../models';
import s from '../../rootSelectors';
import { actions as messagesActions } from '../../redux/messages';

// TODO: Dynamic userId

class Board extends React.Component {
  
  componentDidMount() {
    this.props.fetchMessages();
  }
  
  render() {
    return (
      <BoardComponent
        threads={this.props.threads}
        currentUserId={1}
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
});

export default connect(
  mapStateToProps,
  {
    fetchMessages: messagesActions.fetch,
  }
)(Board);
