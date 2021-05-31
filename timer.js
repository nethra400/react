function StopWatch() {
  this.start = function () {
    console.log("Timer is on");
  };
  this.stop = function () {
    console.log("Timer has stopped");
  };
  this.duration = function () {
    console.log("duration");
  };
  this.reset = function () {
    console.log("Timer is reset to 0");
  };
}
const sw = new StopWatch();
sw.start();
sw.stop();
sw.duration();
sw.reset();
