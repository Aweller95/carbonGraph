const { getIntensityFactors } = require('../externalServices');

async function transformIntensityFactors() {
  const { data } = await getIntensityFactors();
  return ({ Coal, Oil, Hydro } = data[0]);
}

module.exports = {
  transformIntensityFactors,
};
