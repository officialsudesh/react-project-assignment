import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import data from '../data.json';

const BarChartComponent = () => {
  const weeklyWasteVolume = data.weeklyWasteVolume;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={weeklyWasteVolume}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="week" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="large" fill="#8884d8" />
        <Bar dataKey="medium" fill="#82ca9d" />
        <Bar dataKey="small" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
