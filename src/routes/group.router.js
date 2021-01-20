'use strict';

const express = require('express');
const router = express.Router();
const GroupController = require('./../controllers/group.controller');


//Route to Get all groups
router.get('/groups', GroupController.getAllGroups);

//Route to Get a group by its PK
router.get('/groups/:termCode-:subjectCode-:group', GroupController.getGroupByPK);

//Route to Post a Group
router.post('/groups', GroupController.setGroup);

//Route to Put(update) a Group
router.put('/groups/:termCode-:subjectCode-:group', GroupController.updateGroup);

//Route to delete a group
router.delete('/groups/:termCode-:subjectCode-:group', GroupController.deleteGroup);


module.exports = router;