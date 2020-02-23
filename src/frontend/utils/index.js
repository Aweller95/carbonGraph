import Chart from 'chart.js';

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;

export const buildChart = (ref, type, data, labels, average, options = {}) => {
  const myChartRef = ref.current.getContext('2d');

  new Chart(myChartRef, {
    type,
    data: {
      labels,
      datasets: [
        {
          label: 'Sales',
          data: data,
          fill: false,
          borderColor: '#6610f2',
        },
        {
          label: 'National Average',
          data: average,
          fill: false,
          borderColor: '#E0E0E0',
        },
      ],
    },
    options: {
      options,
    },
  });
};
