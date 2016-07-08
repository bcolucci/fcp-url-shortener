'use strict';

const router = require('express').Router()
  , shortener = require('./shortener');

router.get('/new/:url', (req, res) => {
  const id = shortener.shortify(req.params.url);
  res.json({
    original_url: req.params.url,
    short_url: req.protocol + '://' + req.get('host') + '/' + id
  });
});

router.get('/:id', (req, res) => res.redirect(shortener.retrieve(req.params.id)));

module.exports = router;
