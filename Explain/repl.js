var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(2000, function() {
    this.clockwise(0.5);
  })
  .after(2000, function() {
    this.stop();
    this.land();
  });