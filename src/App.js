import './App.css';
import React from 'react';

class Preview extends React.Component {
  render() {
    return (
      <div>
        <p>Preview text</p>
      </div>
    );
  }
}

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.updateText = this.updateText.bind(this);
  }

  updateText(event) {
    
  }

  render() {
    return (
      <div>
        <textarea id="editor" onChange={this.updateText}></textarea>
        <Preview id="preview"></Preview>
        <p>{this.state.text}</p>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
