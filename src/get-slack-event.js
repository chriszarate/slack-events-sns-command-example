// Extract and parse the JSON from Slack.
function getSlackEvent(lambdaEvent, callback) {
  try {
    return JSON.parse(lambdaEvent.Records[0].Sns.Message);
  } catch (error) {
    return callback('ERROR: unable to parse message from slack');
  }
}

module.exports = getSlackEvent;
