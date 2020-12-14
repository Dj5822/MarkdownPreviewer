import { createStore } from 'redux';

const UPDATE = "UPDATE";

function updatePreview(text) {
  return {
    type: UPDATE,
    text
  }
};


const updatePreviewReducer = (previousState = "", action) => {
  switch (action.type) {
    case UPDATE:
      return [previousState, action.text];
    default:
      return previousState;
  }
};

const store = createStore(updatePreviewReducer);
export { store };
