const express = require('express');
const { Router } = express;
const router = Router();
const {
  getUser,
  getFriend,
  getUserInfoByFacebookId,
  verifyAndGetUser,
  getProfile,
  postUser,
  postUserByFacebookId,
  putUser,
  postFriend,
  getMessages,
  postMessages,
  postMatch
} = require('./controller');

router.get('/users/:id', getUser);
router.get('/friends/:id', getFriend);
router.get('/users/facebook/:facebookId', getUserInfoByFacebookId);
router.get('/users/:id/:password', verifyAndGetUser);
router.get('/profile/:id', getProfile);
router.post('/users', postUser);
router.post('/users/facebook', postUserByFacebookId);
router.put('/users', putUser);
router.post('/friends', postFriend);
router.get('/messages/:matchId', getMessages);
router.post('/messages', postMessages);
router.post('/matches', postMatch);

module.exports = router;