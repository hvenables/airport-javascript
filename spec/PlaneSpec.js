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
});
