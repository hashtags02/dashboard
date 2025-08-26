import React from 'react';
import Sidebar from './Sidebar';
import TopSection from './TopSection';
import Charts from './Charts';
import ActivityClientSection from './ActivityClientSection';

import '../App.css';

function Dashboard() {
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

export default Dashboard;