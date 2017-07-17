const Feeds = require("pusher-feeds-server");

const feeds = new Feeds({
  instance: "YOUR_INSTANCE_STRING",
  key: "YOUR_KEY",
});

feeds.publish("playground", {
  message: "Hello from the server!",
});
