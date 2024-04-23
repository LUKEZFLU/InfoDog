import { promises as fs } from 'fs'
import express from 'express';
var router = express.Router();

router.get('/new', function(req, res) {
  res.render('detailForm');
});

router.post('/details', async function(req, res) {
  try {
    const detail = new models.Detail(req.body);
    await detail.save();
    res.redirect('/details');
  } catch (err) {
    console.log(err);
    res.send('There was an error saving the detail.');
  }
});


export default router;
