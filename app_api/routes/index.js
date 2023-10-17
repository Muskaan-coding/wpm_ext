var express = require('express');
var router = express.Router();
var ctrlhome = require('../controllers/home');

router.get('/home', ctrlhome.homeListByDistance);
router.post('/home', ctrlhome.homeCreate);
router.get('/home/:homeid', ctrlhome.homeReadOne);
router.put('/home/:homeid', ctrlhome.homeUpdateOne);
router.delete('/home/:homeid', ctrlhome.homeDeleteOne);


module.exports = router;