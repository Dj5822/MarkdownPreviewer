import React from 'react';

/*
The MarkdownEditor contains an editor.
When the text in the editor is changed,
then the text state should change.
*/
class Editor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorText: ""
    };
    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    this.setState({
      editorText: event.target.value
    });
  }

  render() {
    return (
      <div>
        <textarea id="editor" onChange={this.updateText}></textarea>
      </div>
    );
  }
}

export default Editor;
