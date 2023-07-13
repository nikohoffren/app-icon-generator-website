import React, { useState } from "react";
import { generateIcon } from "../utils/GenerateIcon";

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const onFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const onFileUpload = () => {
        if (!selectedFile) {
            return;
        }
        //* Generate different sizes of icons
        [48, 72, 96, 144, 192, 512].forEach((size) =>
            generateIcon(selectedFile, size)
        );
    };

    return (
        <div>
            <input type="file" onChange={onFileChange} />
            <button
                onClick={onFileUpload}
                className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-1 px-4 rounded"
            >
                Upload
            </button>
        </div>
    );
};

export default FileUpload;
