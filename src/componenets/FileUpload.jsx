import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { uploadFile } from "../services/fileService";
import "./FileUpload.css";

const FileUpload = () => {
  const [tags, setTags] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setSelectedFiles(acceptedFiles);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0)
      return alert("Please select at least one file");
    for (const file of selectedFiles) {
      await uploadFile(file, tags);
    }
    alert("Files uploaded successfully");
    setSelectedFiles([]);
    setTags("");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="upload-container">
      <div
        {...getRootProps()}
        className={`dropzone ${isDragActive ? "active" : ""}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>Drag & drop files here, or click to select files</p>
        )}
      </div>
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        className="tags-input"
      />
      <button onClick={handleUpload} className="upload-button">
        Upload
      </button>
      {selectedFiles.length > 0 && (
        <div className="file-list">
          <h4>Selected Files:</h4>
          {selectedFiles.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
