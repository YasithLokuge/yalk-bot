'use strict';

const lexResponses = require('../lexResponses');

module.exports = function(intentRequest) {
  console.log(`UserFeeling Dialog`);
  return Promise.resolve(lexResponses.close(intentRequest.sessionAttributes, 'Fulfilled', null));
};
