import Chart from 'chart.js';

Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
Chart.defaults.global.legend.display = false;

export const buildChart = (ref, type, data, labels, options = {}) => {
  const myChartRef = ref.current.getContext('2d');

  new Chart(myChartRef, {
    type,
    data: {
      labels,
      datasets: [
        {
          label: 'Intensity Factors',
          data: data,
          fill: true,
          borderColor: '#6610f2',
        },
      ],
    },
    options: {
      options,
    },
  });
};
