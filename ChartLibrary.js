Chart = function(){
	var width = 500;
	var height = 500;
	var chart = {};
	chart.width = function()
	{
		return width;
	};
	chart.height = function()
	{
		return height;
	};
	return chart;
}
TwoD = function(){
	this.x = 1;
	this.y = 1;
};
XYChart = function(){
	var label = new TwoD();
	var chart = Chart();
	chart.label = function(){
		return label;
	};
	return chart;
};
