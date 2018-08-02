import { config } from '../../../../../config/config';
import { GITHUB_API_TOKEN, GITHUB_API_CREATE_REPO_URL } from '../constants/constants';

const firebase = require('firebase');

firebase.initializeApp(config);
// function to save data into firebase database
export const createRepoFirebaseService = widgetData => new Promise((resolve, reject) => {
  // const slackbotRef = ref.child('slackbot/gitbot');
  firebase.database().ref(`slackbot/gitbot/${widgetData.id}`).set({
    id: widgetData.id,
    commandEntered: widgetData.commandEntered,
    widgetName: widgetData.widgetName,
    repositoryName: widgetData.repositoryName,
    userId: widgetData.userId,
    postedOn: widgetData.postedOn,
  }, (error) => {
    if (error) {
      reject(error);
      console.log(error, 'There is error while saving data into firebase...');
    } else {
      console.log('saved successfully...');
      resolve(widgetData);
    }
  });
});
// function to create repository into github account (right now it is in account of anokha777)
export const createRepoGithubService = repositoryName => new Promise((resolve, reject) => {
  fetch(GITHUB_API_CREATE_REPO_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${GITHUB_API_TOKEN}`,
    },
    body: JSON.stringify({
      name: repositoryName,
    }),
  }).then((res) => {
    res.json().then((data) => {
      resolve(data);
    });
  }).catch((err) => {
    reject(err);
    console.log(err, 'There is error while creating git repository through github api...');
  });
});
