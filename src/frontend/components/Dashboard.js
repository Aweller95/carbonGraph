import React, { useState } from 'react';
import axios from 'axios';
import classes from './Dashboard.module.css';
import chartIcon from '../assets/chart-icon.svg';
import { LineGraph } from './LineGraph';

const getData = async () => {
  const result = await axios.get('http://localhost:9092/api/factors/all');
  return result;
};

export const Dashboard = () => {
  const [state, setState] = useState({
    data: [],
    labels: [],
  });

  const handleButtonClick = async e => {
    const { data } = await getData();

    setState({
      data: Object.values(data),
      labels: Object.keys(data),
    });
  };

  return (
    <div className={classes.container}>
      <header>
        <img src={chartIcon} alt="bar chart icon" />
        <h1>Carbon Dashboard</h1>
      </header>

      <div className={classes.buttonContainer}>
        <button onClick={handleButtonClick}>Get all intensity data</button>
      </div>

      <LineGraph data={state} />
    </div>
  );
};
