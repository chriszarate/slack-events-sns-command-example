// Extract and parse the JSON from Slack.
function getSlackEvent(event, callback) {
  try {
    return JSON.parse(event.Records[0].Sns.Message);
  } catch (error) {
    callback('ERROR: unable to parse message from Slack');
  }

  return {};
}

module.exports = getSlackEvent;
