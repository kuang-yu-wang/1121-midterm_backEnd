var express = require('express');
var router = express.Router();
var database = require('../utils/connection');


router.get('/', async function(req, res, next) {
  const result = await database.query('SELECT * FROM blog');
  console.log(result.rows);
  res.json(result.rows);
});

router.get('/:id', async function(req, res){
  const reqId = parseInt(req.params.id);
  const result = await database.query('SELECT * FROM blog WHERE id = $1', [reqId]);
  res.json(result.rows);
});



module.exports = router;