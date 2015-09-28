function Airport(capacity) {
  this.planes = [];
  if (typeof(capacity)==='undefined') capacity = 50;
  this.capacity = capacity;
};

Airport.prototype.plane_land = function(plane) {
  plane.land()
  this.planes.push(plane)
};

Airport.prototype.plane_takeoff = function(plane) {

  plane.takeoff()
  this.planes.splice(plane)
};

Airport.prototype.isEmpty = function() {
  return this.planes.length < 1
}

// Airport.prototype.isEmpty = function() {
//   if (planes === undefined || planes.length == 0)
// };
