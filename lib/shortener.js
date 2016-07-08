'use strict';

const crypto = require('crypto')
  , shortid = require('shortid');

const db = {};

const retrieve = id => {
  let base64Url;
  for (let url in db) {
    if (!db.hasOwnProperty(url))
      continue;
    if (db[url] === id) {
      base64Url = url;
      break;
    }
  }
  if (!base64Url)
    throw new Error('Id not found.');
  return new Buffer(base64Url, 'hex').toString('utf8');
};

const shortify = url => {
  const base64Url = new Buffer(url, 'utf8').toString('hex');
  let id = db[base64Url];
  if (id)
    return id;
  id = shortid.generate();
  db[base64Url] = id;
  return id;
};

module.exports = { retrieve, shortify };
