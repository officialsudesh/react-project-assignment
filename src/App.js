import logo from './logo.svg';
import './App.css';

import React from 'react';
import data from './data.json';
import BarChartComponent from './components/BarChartComponent';
import PieChartComponent from './components/PieChartComponent';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Waste Management Dashboard</h1>
      <section>
        <h2>Weekly Waste Volume</h2>
        <BarChartComponent />
      </section>
      <section style={{ marginTop: '50px' }}>
        <h2>Waste Distribution</h2>
        <PieChartComponent />
      </section>
    </div>
  );
};

export default App;

