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