import React, { useEffect } from 'react';
import { buildChart } from '../utils';
import classes from './LineGraph.module.css';

export const LineGraph = props => {
  const { data, labels } = props.data;
  const chartRef = React.createRef();

  useEffect(() => {
    buildChart(chartRef, 'line', data, labels);
  }, [data, labels, chartRef]);

  return (
    <div className={classes.graphContainer}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};
