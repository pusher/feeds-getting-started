// TODO const Feeds = require("pusher-feeds-server");
const Feeds = require("pusher-feeds-server").Feeds;

const feeds = new Feeds({
  serviceId: "YOUR_SERVICE_ID_HERE",
  serviceKey: "YOUR_SERVICE_KEY_HERE",
});

feeds.publish("playground", {
  message: "Hello from the server!",
});
