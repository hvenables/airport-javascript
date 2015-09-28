describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("should be flying when created", function() {
    expect(plane.isFlying).toBe(true);
  });

  it("should not be flying when landed", function() {
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it("should be flying after taking off", function() {
    plane.land();
    plane.takeoff();
    expect(plane.isFlying).toBe(true);
  });
});
