import React from 'react';
import Sidebar from './Dashboard-client/Sidebar';
import TopSection from './Dashboard-client/TopSection';
import Charts from './Dashboard-client/Charts';
import ActivityClientSection from './Dashboard-client/ActivityClientSection';

import './App.css';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <TopSection />
        <Charts />
        <ActivityClientSection />
      </div>
    </div>
  );
}

export default App;
