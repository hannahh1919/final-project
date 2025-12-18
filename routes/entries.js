var express = require('express');
var router = express.Router();
var Entry = require('../models/entry');

// GET all entries JSON
router.get('/', async function(req, res, next) {
  try {
    const entries = await Entry.find({}).sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    next(err);
  }
});

// GET entries wall
router.get('/wall', async function(req, res, next) {
  try {
    const entries = await Entry.find({}).sort({ createdAt: -1 });
    res.render('entries', { title: 'The Wall', entries });
  } catch (err) {
    next(err);
  }
});

// POST new note
router.post('/', async function(req, res, next) {
  try {
    const { text, color } = req.body;
    if (!text || !color) return res.status(400).send('Text and color required.');
    const entry = new Entry({ text, color });
    await entry.save();
    res.redirect('/entries/wall');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
