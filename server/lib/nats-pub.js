const { connect, StringCodec } = require("nats");

async function publish(msg) {
  const nc = await connect({ servers: "demo.nats.io:4222"});
  const sc = StringCodec();
  console.log("I am publishing " + msg);
  nc.publish("hello", sc.encode(msg));

  await nc.drain();
}

module.exports = publish;