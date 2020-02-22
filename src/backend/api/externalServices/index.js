const axios = require('axios').default;

async function getIntensityFactors() {
  const { data } = await axios.get('https://api.carbonintensity.org.uk/intensity/factors');
  return data;
}

module.exports = {
  getIntensityFactors,
};
