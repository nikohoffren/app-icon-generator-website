/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { generateIcon } from '../utils/GenerateIcon';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = () => {
    if (!selectedFile) {
      return;
    }
    //* Generate icons of a few different sizes as an example
    [48, 72, 96, 144, 192, 512].forEach(size => generateIcon(selectedFile, size));
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;

