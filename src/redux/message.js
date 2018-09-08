// Types

export const types = {
  CLICKED_DELETE: 'message/CLICKED_DELETE',
  CLICKED_EDIT: 'message/CLICKED_EDIT',
  CLICKED_RESPOND: 'message/CLICKED_RESPOND',
};

// Action creators

const clickedDelete = messageId => ({
  type: types.CLICKED_DELETE,
  payload: { messageId }
});

const clickedEdit = message => ({
  type: types.CLICKED_EDIT,
  payload: { message }
});

const clickedRespond = message => ({
  type: types.CLICKED_RESPOND,
  payload: { message }
});

export const actions = {
  clickedDelete,
  clickedEdit,
  clickedRespond,
};
