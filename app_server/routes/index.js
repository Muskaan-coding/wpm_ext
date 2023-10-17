require('dotenv').config();
var express = require('express');
var router = express.Router();
var ctrlhome=require('../controllers/home');
var ctrlab=require('../controllers/ab');
var ctrlsign=require('../controllers/sign');


router.get('/',ctrlhome.home);
router.get('/style1',ctrlhome.styleinfo1);
router.get('/style2',ctrlhome.styleinfo2);
router.get('/style3',ctrlhome.styleinfo3);


router.get('/about',ctrlab.about);

router.get('/sign',ctrlsign.signin);

module.exports = router;
