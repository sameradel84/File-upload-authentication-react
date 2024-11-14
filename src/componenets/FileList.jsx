import React, { useEffect, useState } from "react";
import fileService from "../services/fileService";

function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await fileService.getFiles();
        console.log(response.data);
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching files:", error);
      }
    };
    fetchFiles();
  }, []);

  return (
    <div>
      {files && files.length > 0 ? (
        files.map((file) => (
          <div key={file._id}>
            <h3>{file.originalname}</h3>
            <p>Tags: {file.tags.join(", ")}</p>
            <p>Views: {file.views}</p>
            <a href={file.shareLink} target="_blank" rel="noopener noreferrer">
              Share Link
            </a>
          </div>
        ))
      ) : (
        <p>No files available.</p>
      )}
    </div>
  );
}

export default FileList;
