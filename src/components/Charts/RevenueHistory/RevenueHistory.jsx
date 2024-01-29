import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

// css
import './RevenueHistory.css'

// data
import { revHistory } from '../../../data/data';





export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-positive-negative-i3b8b';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%" className={'rev'}
        // style={{
        //   background:"white",
          
        // }}
      >
        <BarChart
          width={500}
          height={300}
          data={revHistory}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="revenue" fill="#C1C7CD" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
