'use strict';

const greetUser = require('./GreetUser/greetUser');
const userFeeling = require('./UserFeeling/userFeeling');
const motivateUser = require('./MotivateUser/motivate');

module.exports = function(intentRequest) {
  const requestJson=JSON.stringify(intentRequest);
  console.log(requestJson);
  console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
  const intentName = intentRequest.currentIntent.name;

  console.log(intentName + ' was called');

  if (intentName === 'Greeting_Intent') {
    return greetUser(intentRequest);
  }

  if (intentName === 'Motivation_Intent_One') {
    return motivateUser(intentRequest);
  }

  if (intentName === 'Feeling_Intent') {
    return userFeeling(intentRequest);
  }

  throw new Error(`Intent with name ${intentName} not supported`);
};
