import React from "react";
import Sidebar from "./Sidebar";
import TopSection from "./TopSection";
import Charts from "./Charts";
import ActivityClientSection from "./ActivityClientSection";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="main">
        <TopSection />
        <Charts />
        <ActivityClientSection />
      </main>
    </div>
  );
}

export default Dashboard;
