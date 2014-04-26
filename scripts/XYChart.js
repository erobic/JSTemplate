import "Chart";
import "TwoD";
XYChart = function(){
	var label = new TwoD();
	var chart = Chart();
	chart.label = function(){
		return label;
	};
};