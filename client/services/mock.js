export const userMock1 = {
  id: 1234,
  password: 'password',
  firstName: 'Thomas',
  email: 'thomas@gmail.com',
  profilePicture: 'img',
  isMatch: 'true',
  description: 'Will marry for money',
  facebook_id: 1234,
  gender: 'male',
  interested_in: 'male',
};

export const userMock2 = {
  id: 5678,
  password: 'password',
  firstName: 'Harry',
  email: 'harry@gmail.com',
  profilePicture: 'img',
  isMatch: 'false',
  description: 'Looking to make matches',
  facebook_id: 5678,
  gender: 'male',
  interested_in: 'female',
};

export const userMock3 = {
  id: 9999,
  password: 'password',
  firstName: 'Vladmir',
  email: 'vladmir@gmail.com',
  profilePicture: '../assets/images/User1.jpg',
  isMatch: 'true',
  description: 'Hello world',
  facebook_id: 9999,
  gender: 'male',
  interested_in: 'male',
};

export const userMock4 = {
  id: 7612,
  password: 'password',
  firstName: 'Agatha',
  email: 'agatha@gmail.com',
  profilePicture: 'img',
  isMatch: 'true',
  description: 'Looking for Ms. Right',
  facebook_id: 7612,
  gender: 'female',
  interested_in: 'female',
};

export const userMock5 = {
  id: 2021,
  password: 'password',
  firstName: 'Geoff',
  email: 'Geoff@gmail.com',
  profilePicture: 'img',
  isMatch: 'true',
  description: 'Insert description',
  facebook_id: 7733,
  gender: 'male',
  interested_in: 'both',
};

export const requestMock1 = {
  user1: 1234,
  user2: 7612,
  created_on: 'May 8th 2020',
};

export const matchesMock1 = {
  id: 1111,
  user1: 1234,
  user2: 9999,
  matchedBy: 5678,
  createdOn: 'May 8th 2020',
};

export const messageMock1 = {
  id: 2222,
  user: false,
  createdOn: 'May 8th 2020',
  content: 'Hello nice to meet you',
};

export const messageMock2 = {
  id: 3333,
  user: true,
  createdOn: 'May 8th 2020',
  content: 'Likewise',
};

export const messageMock3 = {
  id: 4444,
  user: false,
  createdOn: 'May 8th 2020',
  content: 'What do you think we should do when we meet?',
};

export const messageMock4 = {
  id: 5555,
  user: true,
  createdOn: 'May 8th 2020',
  content: 'Do you want to get married??',
};

export const messageMock5 = {
  id: 6666,
  user: true,
  createdOn: 'May 8th 2020',
  content: 'Helloooooooo? Why are you not responding??',
};

export const friendsArrayMock1 = [
  { id: 5678, firstName: 'Harry', profilePicture: 'img', isMatch: false },
  { id: 2021, firstName: 'Geoff', profilePicture: 'img', isMatch: true },
  { id: 2022, firstName: 'Lucy', profilePicture: 'img', isMatch: true },
  { id: 2023, firstName: 'Eloise', profilePicture: 'img', isMatch: true },
  { id: 2024, firstName: 'Paul', profilePicture: 'img', isMatch: true },
  { id: 2025, firstName: 'Mary', profilePicture: 'img', isMatch: true },
  { id: 2026, firstName: 'Isabella', profilePicture: 'img', isMatch: true },
  { id: 2027, firstName: 'Alice', profilePicture: 'img', isMatch: true },
  { id: 2028, firstName: 'Zara', profilePicture: 'img', isMatch: true },
  { id: 2029, firstName: 'Rachael', profilePicture: 'img', isMatch: true },
  { id: 2030, firstName: 'Greg', profilePicture: 'img', isMatch: true },
  { id: 2031, firstName: 'Victor', profilePicture: 'img', isMatch: true },
];

export const requestArrayMock1 = [
  {
    id: 7612,
    firstName: 'Agatha',
    profilePicure: 'img',
  },
];

export const matchesArrayMock1 = [
  {
    id: 1111,
    user1: 1234,
    user1Name: 'Thomas',
    user2: 9999,
    user2Name: 'Vladmir',
    user2ProfilePicture: '../assets/images/User1.jpg',
    matchedBy: 5678,
    matchedByName: 'Harry',
    createdOn: 'May 8th 2020',
  },
];

export const messagesArrayMock = [messageMock1, messageMock2, messageMock3, messageMock4, messageMock5];
