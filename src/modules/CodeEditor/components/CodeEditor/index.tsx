'use client'
import React from 'react';
// @ts-ignore
import { JsonEditor as Editor } from 'jsoneditor-react';
import 'jsoneditor-react/es/editor.min.css';
import ace from 'brace';
import 'brace/mode/json';

export const CodeEditor = () => {
  const handleChange = (e: any) => {
    console.log(e);
  };

  return (
    <div className="code-editor">
      <Editor
        value={{}}
        onChange={handleChange}
        ace={ace}
        mode="code"
        mainMenuBar={false}
      />
    </div>
  );
};
