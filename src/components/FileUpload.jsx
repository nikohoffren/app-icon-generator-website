/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={() => console.log(selectedFile)}>Upload</button>
    </div>
  );
};

export default FileUpload;
