const getSlackEvent = require('./src/get-slack-event');
const sendToSlack = require('./src/send-to-slack');

function command(event, context, callback) {
  const slackEvent = getSlackEvent(event, callback);
  const reply = `pong <@${slackEvent.user}> ${slackEvent.command.predicate}`;

  // The callback parameter is how we let AWS Lambda know that we are done
  // processing. The "sendToSlack" function will call it for us.
  sendToSlack(slackEvent, reply, callback);
}

exports.handler = command;
