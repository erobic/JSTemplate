describe("Chart Spec", function() {
  it("width should have default value", function() {
    var chart = Chart();
    var width = chart.width();
    expect(width).toBeGreaterThan(0);
    expect(width).toBe(501);
  });
});
