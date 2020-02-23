const express = require('express');
const app = express();
const { getCoalFactors, getHydroFactors, getAllFactors } = require('./controllers');
const port = 9092;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

async function respHandler(req, res, fn) {
  res.send(await fn(req, res));
}

app.get('/api/factors/coal', (req, res) => respHandler(req, res, getCoalFactors));

app.get('/api/factors/hydro', (req, res) => respHandler(req, res, getHydroFactors));

app.get('/api/factors/all', (req, res) => respHandler(req, res, getAllFactors));
