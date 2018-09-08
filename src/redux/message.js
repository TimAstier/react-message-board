// Types

export const types = {
  CLICKED_EDIT: 'message/CLICKED_EDIT',
  CLICKED_RESPOND: 'message/CLICKED_RESPOND',
};

// Action creators

const clickedEdit = message => ({
  type: types.CLICKED_EDIT,
  payload: { message }
});

const clickedRespond = message => ({
  type: types.CLICKED_RESPOND,
  payload: { message }
});

export const actions = {
  clickedEdit,
  clickedRespond,
};
