# An example Lambda function for a decoupled Slack bot

When [Slack events are forwarded to SNS][slack-events-sns], it makes it easy to
build small bots that respond to commands.

1. Pick a command that you want your bot to respond to. For example, you might
   want your bot to respond when users type `mybot ping`.

2. Edit `index.js` to do something in response to that command.

3. Create a SNS topic corresponding to that command and subscribe your Lambda
   function to it.

You might need help with step 3—just ask your friendly neighborhood #bots
channel!

## Events

See [Slack’s documentation][slack-events-docs] for an example of what’s included
in a Slack event.

Since this code is only triggered if a user types a specific command, e.g.,
`mybot ping hello!`, some extra information is added to the event to help you
respond:

```
{
  ...
  command: {
    subject: 'mybot',
    verb: 'ping',
    predicate: 'hello!'
  }
}
```

[slack-events-sns]: https://github.com/chriszarate/slack-events-sns-lambda
[slack-events-docs]: https://api.slack.com/events/message
