import { createStore } from 'redux';

const UPDATE = "UPDATE";

const INITIALSTATE = "";

const updatePreviewReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case UPDATE:
      return {text: action.text};
    default:
      return state;
  }
};

function updatePreview(text) {
  return {
    type: UPDATE,
    text
  }
};

const store = createStore(updatePreviewReducer);
export { store };
export { updatePreview };
