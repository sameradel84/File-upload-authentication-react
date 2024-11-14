import axios from "axios";

const API_URL = "http://localhost:5000/api";

const getAuthHeaders = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const uploadFile = async (file, tags) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("tags", tags);
  const response = await axios.post(
    `${API_URL}/upload`,
    formData,
    getAuthHeaders()
  );
  return response.data;
};

const getFiles = async () => {
  const response = await axios.get(`${API_URL}/files`, getAuthHeaders());
  return response.data;
};

const getFileLink = (filename) => {
  return `${API_URL}/${filename}`;
};

export default {
  uploadFile,
  getFiles,
  getFileLink,
};
///////////////////////////////////
