import React from "react";
import FileUpload from "./FileUpload";
import FileList from "./FileList";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <FileUpload />
      <FileList />
    </div>
  );
}

export default Dashboard;
