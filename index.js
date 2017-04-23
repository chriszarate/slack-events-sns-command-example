const getSlackEvent = require('./src/get-slack-event');
const sendToSlack = require('./src/send-to-slack');

// This function generates a reply for Slack. If you don't want to reply,
// return something falsy, e.g., null.
function generateReply(slackEvent) {
  return `<@${slackEvent.user}> pong ${slackEvent.command.predicate}`;
}

exports.handler = (lambdaEvent, context, callback) => {
  const slackEvent = getSlackEvent(lambdaEvent, callback);
  const reply = generateReply(slackEvent);

  // The callback parameter is how we let AWS Lambda know that we are done
  // processing. The "sendToSlack" function will call it for us.
  sendToSlack(slackEvent, reply, callback);
};
