import logo from './logo.svg';
import './App.css';
// import Editor from './quill-img-resize/baseEditor';
import Editor from './quill-img-resize/quillEditor';
import { useState } from 'react';
// import Editor from './quill-config/editor';

function App() {
  const [htmlValue, setHtmlValue] = useState(''); // State to store the HTML value

  // Callback function to receive the HTML value from the Editor component
  const handleGetHtmlValue = (value) => {
    setHtmlValue(value); // Set the HTML value in the state
  };
  return (
    <div className="App">
      <Editor onGetHtmlValue={handleGetHtmlValue} />
    </div>
  );
}

export default App;
