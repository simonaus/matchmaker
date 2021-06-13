const db = require('./models/model.js');
const { Op } = require("sequelize");

const getUser = async (req, res) => {

};

const getUserInfoByFacebookId = async (req, res) => {
  let userInfo = await db.user.findAll({ where: { facebook_id: req.params.facebookId } });
  userInfo[0].dataValues.friends = await getFriendsArrayByUserId(userInfo[0].dataValues.id);
  userInfo[0].dataValues.matches = await getMatchesArrayByUserId(userInfo[0].dataValues.id);
  delete user[0].dataValues.password;
  res.status(200).send(userInfo);
};

const postUser = async (req, res) => {

};

const postUserByFacebookId = async (req, res) => {
  const fbUserInfo = req.body;
  const userInfo = await db.user.create({
    password: 'password',
    first_name: fbUserInfo.first_name,
    email: '',
    profile_picture: 'img',
    is_match: true,
    description: '',
    facebook_id: fbUserInfo.id,
    gender: 'male',
    interested_in: 'female',
    created_at: Date.now(),
    updated_at: Date.now()
  })
  res.status(200).send(userInfo);
};

const putUser = async (req, res) => {

};

const postRequest = async (req, res) => {

};

const postFriend = async (req, res) => {
  const userIds = req.body;
  const friendsInfo = await db.friend.create({
    user_1: userIds[0],
    user_2: userIds[1],
    createdAt: Date.now(),
    updatedAt: Date.now()
  })
  res.status(200).send(friendsInfo);
};

const getMessages = async (req, res) => {

};

const postMessages = async (req, res) => {

};

const postMatch = async (req, res) => {
  const userIds = req.body;
  const friendsInfo = await db.match.create({
    user_1: userIds[0],
    user_2: userIds[1],
    matched_by: userIds[2],
    createdAt: Date.now(),
    updatedAt: Date.now()
  })
  res.status(200).send(friendsInfo);
};

const getFriendsArrayByUserId = async (userId) => {
  //get all rows from friends data table containing userId
  const friendsTableArray = await db.friend.findAll({ where: { [Op.or]: [{ user_1: userId }, { user_2: userId }] } });
  //from each row, extract the userId of the friend into an array
  const friendsIdArray = friendsTableArray.map(friendData => {
    if (friendData.user_1 === userId) {
      return friendData.user_2;
    } else {
      return friendData.user_1;
    }
  });
  //for each userId, extract the relevant user details of the friend
  const friendsArray = await Promise.all(friendsIdArray.map(async friendId => {
    let friendInfo = await db.user.findAll({ where: { id: friendId } });
    delete friendInfo[0].dataValues.email;
    delete friendInfo[0].dataValues.password;
    delete friendInfo[0].dataValues.facebook_id;
    return friendInfo[0];
  }));
  return friendsArray;
};

const getMatchesArrayByUserId = async (userId) => {
  //get all rows from matches data table containing userId
  const matchesTableArray = await db.match.findAll({ where: { [Op.or]: [{ user_1: userId }, { user_2: userId }] } });
  //from each row, extract the userId of the match into an array
  const matchesIdArray = matchesTableArray.map(matchData => {
    if (matchData.user_1 === userId) {
      return matchData.user_2;
    } else {
      return matchData.user_1;
    }
  });
  //for each userId, extract the relevant user details of the friend
  const matchesArray = await Promise.all(matchesIdArray.map(async matchId => {
    let matchInfo = await db.user.findAll({ where: { id: matchId } });
    delete matchInfo[0].dataValues.email;
    delete matchInfo[0].dataValues.password;
    delete matchInfo[0].dataValues.facebook_id;
    return matchInfo[0];
  }));
  return matchesArray;
};

module.exports = {
  getUser,
  getUserInfoByFacebookId,
  postUser,
  postUserByFacebookId,
  putUser,
  postRequest,
  postFriend,
  getMessages,
  postMessages,
  postMatch
};