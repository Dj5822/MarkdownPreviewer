import './App.css';
import Preview from './Components/Preview.js';
import Editor from './Components/Editor.js';

function App() {
  return (
    <div className="App">
      <Editor />
      <Preview id="preview"/>
    </div>
  );
}

export default App;
