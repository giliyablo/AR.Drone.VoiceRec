var arDrone = require('./node_modules/ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(2000, function() {
    this.clockwise(0.0125);
  })
  .after(0, function() {
    this.stop();
    this.land();
  });