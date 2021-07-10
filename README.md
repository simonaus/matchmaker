# Matchmaker

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

See the app in action [here](https://youtu.be/mShixnhaUJY)

<img width="206" alt="matchmaker home" src="https://user-images.githubusercontent.com/66684013/125109531-6876ae00-e0db-11eb-81a6-a1d889c0f08f.PNG"><img width="212" alt="matchmakermatches" src="https://user-images.githubusercontent.com/66684013/125109458-4c730c80-e0db-11eb-92b8-85b2529ec8df.PNG">
<img width="208" alt="matchmakerchat" src="https://user-images.githubusercontent.com/66684013/125109297-13d33300-e0db-11eb-8543-11b70484270f.PNG">


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

9. App should be fully functional 🎈

## Features

- Users login through a local account or through Facebook
- View and add new friends
- Make a match between two existing friends
- View all matches that have been made for the user
- Chat with all matches

## Future Features

- Enable user profile editing
- User stateful session ID authentication
- Password encyption
- Facebook authorisation to use /friends API end-point

## Technologies

- Typescript
- Javascript
- React Native
- Android Studio
- nodeJs
- expressJs
- sequelize
- postgreSQL


