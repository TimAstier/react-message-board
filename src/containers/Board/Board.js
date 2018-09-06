import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Board as BoardComponent } from '../../components';
import { Message as MessageModel } from '../../models';
import s from '../../rootSelectors';

// TODO: Dynamic userId

class Board extends React.Component {
  render() {
    return (
      <BoardComponent
        threads={this.props.threads}
        currentUserId={1}
      />
    );
  }
}

Board.propTypes = {
  threads: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.instanceOf(MessageModel)),
  ),
  currentUserId: PropTypes.number,
};

const mapStateToProps = state => ({
  threads: s.messages.getThreads(state)
});

export default connect(
  mapStateToProps
)(Board);
