const Feeds = require("pusher-feeds-server");

const feeds = new Feeds({
  instanceId: "YOUR_INSTANCE_ID",
  key: "YOUR_KEY",
});

feeds.publish("playground", {
  message: "Hello from the server!",
});
