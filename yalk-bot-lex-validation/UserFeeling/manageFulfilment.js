'use strict';

const lexResponses = require('../lexResponses');

function buildFulfilmentResult(fullfilmentState, messageContent) {
    return {
        fullfilmentState,
        message: {contentType: 'PlainText', content: messageContent}
    };
}

module.exports = function (intentRequest) {
  console.log('UserFeeling Fulfilled');
  var userFeeling;
  var responseMessage;

  if(intentRequest.currentIntent.slots.good_feeling){
    userFeeling = intentRequest.currentIntent.slots.good_feeling;
    responseMessage = 'Good to hear that! You want some motivation?'
  }
  if(intentRequest.currentIntent.slots.bad_feeling){
    userFeeling = intentRequest.currentIntent.slots.bad_feeling;
    responseMessage = `Sometimes I also feel ${userFeeling} but feeling ${userFeeling} won't help you. You want me to motivate you?`
  }
  console.log(userFeeling);
  console.log(responseMessage);

  const fullfilmentResult = buildFulfilmentResult('Fulfilled', responseMessage);
  return Promise.resolve(lexResponses.close(intentRequest.sessionAttributes, fullfilmentResult.fullfilmentState, fullfilmentResult.message));
};
