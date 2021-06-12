const express = require('express');
const cors = require('cors')();
require('./models/model');
const main = require('./models/model');

const router = require('./router');
const app = express();
const PORT = 3001;

app.use(cors);
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  main();
  console.log(`Listening on port ${PORT}`);
});
