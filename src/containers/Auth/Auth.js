import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Auth as AuthComponent } from '../../components';
import { actions as authActions } from '../../redux/auth';
import s from '../../rootSelectors';

class Auth extends React.Component {
  render() {
    return (
      <AuthComponent
        currentUserId={this.props.currentUserId}
        handleAvatarClick={id => this.props.setCurrentUserId(id)}
      />
    );
  }
}

Auth.propTypes = {
  currentUserId: PropTypes.number,
  setCurrentUserId: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUserId: s.auth.getCurrentUserId(state),
});

export default connect(
  mapStateToProps,
  {
    setCurrentUserId: authActions.setCurrentUserId
  }
)(Auth);
