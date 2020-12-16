import React from 'react';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { store } from './MarkdownStore.js';
import {updatePreview} from './MarkdownStore.js';

/*
The MarkdownEditor contains an editor.
When the text in the editor is changed,
then the text state should change.
*/
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    const marked = require("marked");
    const html = marked(event.target.value, {gfm: true});
    this.props.dispatchText(html);
  }

  render() {
    return (
      <div>
        <textarea id="editor" onChange={this.updateText}></textarea>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchText: (text) => {
      dispatch(updatePreview(text));
    }
  }
};

const EditorContainer = connect(null, mapDispatchToProps)(Editor);

class EditorWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <EditorContainer />
      </Provider>
    );
  }
}

export default EditorWrapper;
