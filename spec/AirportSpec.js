describe("Airport", function() {
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    this.isStormy = true;
  });

  // spyOn(airport, 'this.isStormy').and.returnValue(false)

  it("should have capacity when created", function() {
    expect(airport.capacity).toBe(50)
  });

  it("should be able to land planes", function() {
    airport.plane_land(plane)
    expect(airport.planes).toEqual([plane])
    expect(plane.isFlying).toBe(false)
  });

  it("should be able to tell planes to take off", function() {
    airport.plane_land(plane)
    airport.plane_takeoff(plane)
    expect(airport.planes).toEqual([])
    expect(plane.isFlying).toBe(true)
  });

  it("should be throw an error when no planes", function() {
    this.isStormy = false;
    expect(function(){airport.plane_takeoff(plane)})
    .toThrowError("No Planes to take off")
  });

  it("should be throw an error when no planes", function() {
    for (i = 0; i <= airport.capacity; i++) {
      airport.plane_land(plane)
    }
    expect(function(){airport.plane_land(plane)})
    .toThrowError("Plane cannot take off")
  });
});
