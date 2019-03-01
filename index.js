const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

// static file
app.use(express.static('public'));

// root path
const pathPublic = __dirname + '/public/';

// fake data
const datas = require('./data.json');

// api
app.get('/api/search', (req, res) => {
  let name = req.query.name;

  // search 
  for (let key in datas) {
    let data = datas[key];
    if (data.name == name) {
      res.json({
        data: data
      });
    }
  }

});

// client
app.get('/search', (req, res) => {
  res.sendFile(pathPublic + 'search.html');
});

app.listen(port, () => {
  console.log(`listen on ${port}`);
})