import React, { useEffect } from 'react';
import { buildChart } from '../utils';
import classes from './Graph.module.css';

export const Graph = props => {
  const { data, average, labels } = props.data;
  const chartRef = React.createRef();

  useEffect(() => {
    buildChart(chartRef, 'line', data, labels, average);
  }, [data, average, labels]);

  return (
    <div className={classes.graphContainer}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};
