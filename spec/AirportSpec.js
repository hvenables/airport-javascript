describe("Airport", function() {
  var airport
  var plane

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

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
});
