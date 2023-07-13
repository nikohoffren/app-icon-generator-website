/* eslint-disable no-unused-vars */
import React from 'react';
import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-4 bg-blue-500 text-white">
        <h1 className="text-4xl">Android App Icon Generator</h1>
      </header>
      <main className="p-4">
        <FileUpload />
      </main>
    </div>
  );
}

export default App;
