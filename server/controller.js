const db = require('./models/model.js');
const { Op } = require("sequelize");

const getFriend = async (req, res) => {
  const userInfo = await db.user.findAll({ where: { id: req.params.id } });
  const returnedUserInfo = {
    id: userInfo[0].dataValues.id,
    firstName: userInfo[0].dataValues.first_name,
    profilePicture: userInfo[0].dataValues.profile_picture,
  }
  res.status(200).send(returnedUserInfo);
};

const getProfile = async (req, res) => {
  const userInfo = await db.user.findAll({ where: { id: req.params.id } });
  delete userInfo[0].dataValues.password;
  res.status(200).send(userInfo[0]);
};

const getUser = async (req, res) => {
  const userInfo = await db.user.findAll({ where: { id: req.params.id } });
  if (userInfo.length > 0) {
    userInfo[0].dataValues.friends = await getFriendsArrayByUserId(userInfo[0].dataValues.id);
    userInfo[0].dataValues.matches = await getMatchesArrayByUserId(userInfo[0].dataValues.id);
    delete userInfo[0].dataValues.password;
  }
  res.status(200).send(userInfo);
};

const getUserInfoByFacebookId = async (req, res) => {
  let userInfo = await db.user.findAll({ where: { facebook_id: req.params.facebookId } });

  //get array of matches and friends for user from PSQL
  if (userInfo.length > 0) {
    userInfo[0].dataValues.friends = await getFriendsArrayByUserId(userInfo[0].dataValues.id);
    userInfo[0].dataValues.matches = await getMatchesArrayByUserId(userInfo[0].dataValues.id);
    delete userInfo[0].dataValues.password;
  }
  res.status(200).send(userInfo);
};

const verifyAndGetUser = async (req, res) => {
  let userInfo = await db.user.findAll({ where: { id: req.params.id } });
  if (userInfo.length === 0) {
    res.status(200).send(false)
  } else if (userInfo[0].dataValues.password !== req.params.password) {
    res.status(200).send(false)
  } else {
    userInfo[0].dataValues.friends = await getFriendsArrayByUserId(userInfo[0].dataValues.id);
    userInfo[0].dataValues.matches = await getMatchesArrayByUserId(userInfo[0].dataValues.id);
    delete userInfo[0].dataValues.password;
    res.status(200).send(userInfo);
  }
};

const postUser = async (req, res) => {
  const userInfo = req.body;
  const newUser = await db.user.create({
    password: userInfo.password,
    first_name: userInfo.first_name,
    email: userInfo.email,
    profile_picture: 'img',
    is_match: true,
    description: '',
    facebook_id: 0,
    gender: 'male',
    interested_in: 'female',
    created_at: Date.now(),
    updated_at: Date.now()
  })
  res.status(200).send(newUser);
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

const postFriend = async (req, res) => {
  const friendsInfo = await db.friend.create({
    user_1: req.body.user_1,
    user_2: req.body.user_2,
    createdAt: Date.now(),
    updatedAt: Date.now()
  })
  res.status(200).send(friendsInfo);
};

const getMessages = async (req, res) => {
  let messages = await db.message.findAll({ where: { match_id: req.params.matchId } });
  res.status(200).send(messages);
};

const postMessages = async (req, res) => {
  const newMessage = await db.message.create({
    match_id: req.body.matchId,
    created_by: req.body.createdBy,
    content: req.body.message,
    created_at: Date.now(),
  })
  res.status(201).send(newMessage);
};

const postMatch = async (req, res) => {
  const matchInfo = await db.match.create({
    user_1: req.body.user_1,
    user_2: req.body.user_2,
    matched_by: req.body.matched_by,
    createdAt: Date.now(),
    updatedAt: Date.now()
  })
  res.status(200).send(matchInfo);
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
      return { userId: matchData.user_2, id: matchData.id };
    } else {
      return { userId: matchData.user_1, id: matchData.id };
    }
  });

  //for each userId, extract the relevant user details of the friend
  let matchesArray = await Promise.all(matchesIdArray.map(async matchId => {
    let matchInfo = await db.user.findAll({ where: { id: matchId.userId } });
    matchInfo[0].dataValues.userId = matchInfo[0].dataValues.id;
    matchInfo[0].dataValues.id = matchId.id;
    delete matchInfo[0].dataValues.email;
    delete matchInfo[0].dataValues.password;
    delete matchInfo[0].dataValues.facebook_id;
    return matchInfo[0];
  }));
  //attach the match id to the array
  return matchesArray;
};

module.exports = {
  getUser,
  getFriend,
  getUserInfoByFacebookId,
  verifyAndGetUser,
  postUser,
  postUserByFacebookId,
  putUser,
  postFriend,
  getMessages,
  postMessages,
  postMatch,
  getProfile,
};