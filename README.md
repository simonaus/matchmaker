# Reddit-lite

## Table of contents
- [Introduction](#Introduction)
- [Getting Started](#Getting-Started)
- [Features](#Features)
- [Future Features](#Future-Features)
- [Technologies](#Technologies)

## Introduction
Matchmaker is social-network focused matchmaking app optimised for Android OS. 

The core mission of Matchmaker is to facilitate romantic pairings and aims to represent a counter-culture to the gamification and anonymity of modern-dating apps. Despite having the same mission as many dating apps (finding connections), Matchmaker does seek to separate itself from the dating app space as the core focus is not on finding connections for oneself, rather finding connections for others. A world in which people are mutually connect those around them will result in lower frequency but higher quality romances.  

Matchmaker was built using React Native on the front-end and expressJS and PostgreSQL on the back-end and uses the Facebook API to facilite the quick integration of the user's pre-existing social network into Matchmaker. This is key to the successful implementation of the app. 

![image](https://user-images.githubusercontent.com/66684013/125103793-9c9aa080-e0d4-11eb-9a43-b560a54f2276.png)

## Getting Started

In order to run matchmaker an android phone or Android emulator is required. Please refer to the documentation at Android Studio for further information on how to set-up and run an Android emulator. This can be run on any Windows or Apple PC. Additionally, postgreSQL is required in order to run the back-end database. 

1. Clone this repo and enter!

   ```bash
   git clone https://github.com/simonaus/matchmaker.git
   cd matchmaker
   ```

2. Enter the front-end.

   ```bash
   cd client
   ```

3. Run ````npm install```` to install all the required dependencies into your local repo. 

4. Run ````npx react-native run-android```` in order to start up the front-end on the emulator.

5. In a separate terminal enter the repo and type the following to enter the back-end: 

   ```bash
   cd server
   ```
   
6. Run ````npm install```` to install all the required dependencies into your local repo. 

7. Enter models/models.js and update the Sequelize URI to match the local postgreSQL database

8. Run ````node index.js````  from the sever root in order to start up the back-end.

9. App should be fullly functional 🎈

## Features

- Presents posts on reddit homepage
- Homepage can be filtered by key terms using the search bar
- Subreddits can be search for by title
- Access to the newsfeed of any subreddit (also filterable by key terms)
- Subreddits can be 'subscribed' to, meaning they will appear for quick access in the side navigation bar
- Subreddits can be 'unsubscribed' from
- Individual posts can be selected and loaded
- User comments are presented using markdown formatting
- Replies to user comments can be hidden/displayed allowing users to 'dig-down' into replies of replies
- Total score (the total of up/downvotes) for each post and comment is presented
- Widely accessable from desktop and mobile web browsers

## Future Features

- Enable user profile editing
- User stateful session ID authentication
- Password encyption
- Facebook authorisation to use /friends API end-point

## Technologies

- node.js v15.5.1
- Visual Studio Code v1.52.1
- git v2.25.1
- javaScript 1.8.5
- CSS3
- HTML5
- react 17.0.1
- redux 4.0.5
- @reduxjs/toolkit 1.5.0
- react-dom 17.0.1
- react-markdown 5.0.3
- react-redux 7.2.2
- react-router-dom 5.2.0
- react-scripts 4.0.2
- web-vitals 1.1.0


