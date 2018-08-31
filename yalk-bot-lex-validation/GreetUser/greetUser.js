'use strict';

const lexResponses = require('../lexResponses');

module.exports = function(intentRequest) {
  const source = intentRequest.invocationSource;
  console.log(`GreetUser intentRequest.invocationSource=${intentRequest.invocationSource}`);
  if (source === 'FulfillmentCodeHook') {
    return Promise.resolve(lexResponses.close(intentRequest.sessionAttributes, 'Fulfilled', null));
  }
};
