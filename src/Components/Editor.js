import React from 'react';

import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { store } from './MarkdownStore.js';
import {updatePreview} from './MarkdownStore.js';

import '../Style/Editor.css'

/*
The MarkdownEditor contains an editor.
When the text in the editor is changed,
then the text state should change.
*/
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.updateText = this.updateText.bind(this);
  }

  sendHtml(newText){
    this.setState({text: newText});
    const marked = require("marked");
    const html = marked(newText, {gfm: true});
    this.props.dispatchText(html);
  }

  updateText(event) {
    var newText = event.target.value;
    this.sendHtml(newText);
  }

  componentDidMount() {
    var newText = "# Test Large Heading \n" +
    "## Test Smaller Heading \n" +
    "[a link](www.google.com), \n" +
    "inline code: `<div></div>`, \n" +
    "a code block: \n" +
    "```<p>test</p>``` \n" +
    "- a list item, \n" +
    "> a blockquote, \n" +
    "![an image](https://static.wikia.nocookie.net/kaguyasama-wa-kokurasetai/images/d/d0/005-55.png/revision/latest?cb=20190127162604), \n" +
    "and **bolded text**";
    this.sendHtml(newText);
  }

  render() {
    return (
      <div id="editor-div">
        <h1 className="header">Editor</h1>
        <textarea id="editor" onChange={this.updateText} value={this.state.text}></textarea>
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
