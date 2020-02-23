import React, { useState } from 'react';
import classes from './Dashboard.module.css';
import chartIcon from '../assets/chart-icon.svg';
import { Graph } from './Graph';
import {
  managerData,
  nationalAverageData,
  yearLabels,
  managerQuarterData,
  nationalAverageQuarterData,
  quarterLabels,
} from '../mockData';

export const Dashboard = (data, labels) => {
  const [state, setState] = useState({
    data: managerData,
    average: nationalAverageData,
    labels: yearLabels,
  });

  const handleButtonClick = e => {
    const { value } = e.target;
    const isAnnual = value === 'annual';

    const newData = isAnnual ? managerData : managerQuarterData;
    const newLabels = isAnnual ? yearLabels : quarterLabels;
    const newAverage = isAnnual ? nationalAverageData : nationalAverageQuarterData;

    setState({
      data: newData,
      average: newAverage,
      labels: newLabels,
    });
  };

  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Carbon Dashboard</h1>
      </header>

      <div className={classes.buttonContainer}>
        <button value="annual" onClick={handleButtonClick}>
          Annual
        </button>

        <button value="lastquarter" onClick={handleButtonClick}>
          Last Quarter
        </button>
      </div>

      <Graph data={state} />
    </div>
  );
};
