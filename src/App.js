import './App.css';
import React from 'react';

import { Provider } from 'react-redux';

/*
The MarkdownEditor contains an editor.
When the text in the editor is changed,
then the text state should change.
*/
class MarkdownEditor extends React.Component {
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

class MarkdownPreview extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      previewText: ""
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.previewText}</p>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <MarkdownEditor />
      <MarkdownPreview id="preview"/>
    </div>
  );
}

export default App;
