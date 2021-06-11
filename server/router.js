const express = require('express');
const { Router } = express;
const router = Router();
const {
  getUser,
  postUser,
  putUser,
  postRequest,
  postFriend,
  getMessages,
  postMessages,
  postMatch
} = require('./controller');

router.get('/users/:id', getUser);
router.post('/users', postUser);
router.put('/users', putUser);
router.post('/requests', postRequest);
router.post('/friends', postFriend);
router.get('/messages/:matchId', getMessages);
router.post('/messages', postMessages);
router.post('/matches', postMatch);

module.exports = router;