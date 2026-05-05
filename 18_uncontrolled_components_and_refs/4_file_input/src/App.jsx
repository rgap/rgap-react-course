import React, { useRef } from "react";

function App() {
  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // fileInputRef.current.files is a FileList array
    const selectedFiles = fileInputRef.current.files;

    if (selectedFiles.length > 0) {
      const file = selectedFiles[0];
      alert(`File name: ${file.name}\nFile size: ${file.size} bytes\nFile type: ${file.type}`);
    } else {
      alert("No file selected.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>File Input (Always Uncontrolled)</h1>
      
      <form onSubmit={handleSubmit}>
        <label>
          Upload Profile Picture:
          <br />
          <input type="file" ref={fileInputRef} accept="image/*" />
        </label>
        <br /><br />
        <button type="submit">Submit File</button>
      </form>
    </div>
  );
}

export default App;
