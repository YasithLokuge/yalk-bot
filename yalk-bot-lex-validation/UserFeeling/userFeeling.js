'use strict';

const handleDialogCodeHook = require('./manageDialogs');
const handleFulfillmentCodeHook = require('./manageFulfilment');

module.exports = function(intentRequest) {
  const source = intentRequest.invocationSource;
  console.log(`UserFeeling intentRequest.invocationSource=${intentRequest.invocationSource}`);

  if (source === 'DialogCodeHook') {
    return handleDialogCodeHook(intentRequest);
  }

  if (source === 'FulfillmentCodeHook') {
    return handleFulfillmentCodeHook(intentRequest);
  }
};
