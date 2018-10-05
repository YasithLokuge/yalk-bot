/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');
const readFromDatabase = require('./readFromDatabase');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = 'amzn1.ask.skill.65169c66-97a3-4f16-bc19-51f16cf4d54c';

const SKILL_NAME = 'Motivate me';
const GET_MOTIVATION_MESSAGE = "";
const HELP_MESSAGE = 'You can say, motivate me! for a motivational quote';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('Motivation_Intent_One');
    },
    'Feeling_Intent': function () {
        console.log('Feeling_Intent');
        this.emit('Motivation_Intent_One');
    },
    'Motivation_Intent_One': async function () {
      console.log('Motivation_Intent_One');
      var randomMotivation = await readFromDatabase();
      console.log('Motivation_Intent_One quote: ' + randomMotivation);
      const speechOutput = GET_MOTIVATION_MESSAGE + randomMotivation;
      this.response.cardRenderer(SKILL_NAME, randomMotivation);
      this.response.speak(speechOutput);
      this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    //prevent timeout from waiting event loop
    console.log('Starting');
    context.callbackWaitsForEmptyEventLoop = false;
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
