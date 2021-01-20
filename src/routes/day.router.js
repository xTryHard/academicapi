'use strict';

const express = require('express');
const router = express.Router();
const DayController = require('./../controllers/day.controller');

//Route to Get all days
router.get('/days', DayController.getAllDays);

//Route to Get day by PK
router.get('/days/:day', DayController.getDayByPK);








module.exports = router;