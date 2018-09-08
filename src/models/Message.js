import Immutable from 'immutable';

const MessageRecord = Immutable.Record({
  id: null,
  text: '',
  author: null,
  parentId: null,
  loading: false,
});

class Message extends MessageRecord {}

export default Message;
