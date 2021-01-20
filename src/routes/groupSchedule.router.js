'use strict';

const express = require('express');
const router = express.Router();
const GroupScheduleController = require('./../controllers/groupSchedule.controller');


//Route to POST group schedule
router.post('/groupSchedules', GroupScheduleController.setGroupSchedule);

//Route to DELETE group schedule
router.delete('/groupSchedules/:termCode-:subjectCode-:group-:day', GroupScheduleController.deleteGroupSchedule);

//Route to PUT(update) group schedule
router.put('/groupSchedules/:termCode-:subjectCode-:group-:day', GroupScheduleController.updateGroupSchedule);

//Route to get group schedules for a group
router.get('/groupSchedules/:termCode-:subjectCode-:group', GroupScheduleController.getSingleGroupSchedule);

//Route to get group schedules for a group in specific day
router.get('/groupSchedules/:termCode-:subjectCode-:group-:day', GroupScheduleController.getSingleGroupScheduleDay);



module.exports = router;