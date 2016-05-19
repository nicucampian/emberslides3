'use strict';

const fs = require('fs');
const path = require('path');
const url = require('url')
const express = require('express');
const processDir = require('./ProcessDir');
const app = express();
// set our port
const port = 3000;

// set the static files location
app.use(express.static(__dirname + '/public'));

app.get('/work', function(req,res) {
  const queryPart = url.parse(req.url, true).query;
  let treePath = 'Tree';
  if (queryPart.path !== undefined) {
    treePath = treePath + "/"+ queryPart.path;
  }

  processDir(treePath).then(function(result) {
    res.send(result);
  });
});

// startup our app at http://localhost:3000
app.listen(port);
