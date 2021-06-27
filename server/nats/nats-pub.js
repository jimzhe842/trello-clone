const { connect, StringCodec } = require("nats");

async function publish(msg) {
  // to create a connection to a nats-server:
  const nc = await connect({ servers: "nats://nats:4222" });

  // create a codec
  const sc = StringCodec();

  console.log("I am publishing " + msg);
  nc.publish("hello", sc.encode(msg));

  // we want to insure that messages that are in flight
  // get processed, so we are going to drain the
  // connection. Drain is the same as close, but makes
  // sure that all messages in flight get seen
  // by the iterator. After calling drain on the connection
  // the connection closes.
  await nc.drain();
};

module.exports = publish;