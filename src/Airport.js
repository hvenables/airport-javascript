function Airport(capacity) {
  this.planes = [];
  if (typeof(capacity)==='undefined') capacity = 50;
  this.capacity = capacity;
  this.isStormy = false;
};

Airport.prototype.plane_land = function(plane) {
  if (this.planes.length >= this.capacity || this._weather()) {
    throw ("Plane cannot take off");
  }
  plane.land()
  this.planes.push(plane)
};

Airport.prototype.plane_takeoff = function(plane) {
  if ( this.planes.length < 1 || this._weather()) {
    throw ("No Planes to take off");
  }
  plane.takeoff()
  this.planes.pop(plane)
};


Airport.prototype._weather = function() {
  if (Math.floor((Math.random() * 10) + 1) < 2) {
      return this.isStormy = true;
    } else {
      return this.isStormy = false;
    }
};

// Airport.prototype.isEmpty = function() {
//   if (this.planes.length < 1)
// };
