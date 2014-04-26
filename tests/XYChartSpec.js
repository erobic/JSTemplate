describe("XY Chart Spec",function(){
	it("x and y labels should be defined",function(){
		var xyChart = XYChart();
		expect(xyChart.label().x).toBeDefined();
		expect(xyChart.label().y).toBeDefined();
	});
});