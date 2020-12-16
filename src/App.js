import './Style/App.css';
import PreviewWrapper from './Components/Preview.js';
import EditorWrapper from './Components/Editor.js';

function App() {
  return (
    <div className="App">
      <EditorWrapper />
      <PreviewWrapper />
    </div>
  );
}

export default App;
