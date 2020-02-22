const { transformIntensityFactors } = require('../services');
const { getIntensityFactors } = require('../externalServices');

const getCoalFactors = async (req, res) => {
  const { Coal } = await transformIntensityFactors();

  return { Coal };
};

const getHydroFactors = async (req, res) => {
  const { Hydro } = await transformIntensityFactors();

  return { Hydro };
};

const getAllFactors = async (req, res) => {
  const data = await getIntensityFactors();

  return data;
};

module.exports = {
  getCoalFactors,
  getHydroFactors,
  getAllFactors,
};
