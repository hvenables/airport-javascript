function Airport(capacity) {
  this.planes = [];
  if (typeof(capacity)==='undefined') capacity = 50;
  this.capacity = capacity;
  if (Math.floor((Math.random() * 10) + 1) < 2) {
      this.isStormy = true;
    } else {
      this.isStormy = false;
    }
};

Airport.prototype.plane_land = function(plane) {
  if (this.planes.length > this.capacity || this.isStormy) {
    throw new Error ("Plane cannot take off")
  }
  plane.land()
  this.planes.push(plane)
};

Airport.prototype.plane_takeoff = function(plane) {
  if (this.planes.length < 1 || this.isStormy) {
    throw new Error ("No Planes to take off")
  }
  plane.takeoff()
  this.planes.pop(plane)
};


// Airport.prototype.isEmpty = function() {
// }

// Airport.prototype.isEmpty = function() {
//   if (planes === undefined || planes.length == 0)
// };
