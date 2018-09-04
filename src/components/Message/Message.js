import React from 'react';
import PropTypes from 'prop-types';

const Message = props => {
  return (
    <div>Hey</div>
  );
};

Message.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  parentId: PropTypes.number,
  authorId: PropTypes.number.isRequired,
};

export default Message;
