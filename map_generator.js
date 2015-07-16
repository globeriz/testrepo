var mapgen = function(map_name, map_data)
{
	mapico_path = './mapico/';
	$("body").after("<div id='map_"+map_name+"'></div>");
	var o = $("#map_"+map_name);
	var a = map_data.split('$');
	for (x of a)
	{
		var image = new Image();
		image.onerror = function () {
		   this.onerror = null;
		   this.src = mapico_path+x+".bmp";
		}
		image.src = mapico_path+x+".png";
		o.append(image);
	}
};
$(document).ready(function(){
	mapgen("m1","w3$w34$w34$w3$f3$f2$w3$w1$w34$w3$w34$w3$w34$i7$m32$f5$w3$w1$h2$w1$w34$w34$w34$w34$f6$w1$f3$f3$w3$f3$f3$f6$w3$w3$w34$w3$w34$f3$f3$f3$f3$w3$f3$w3$w1$w34$w1$w3$w34$f3$f6$w3$w3$w34$w34$w3$w34$w3$f6$w34$f3$f3$w34$w34$w34$w1$w34$w34$f3$f6$w3$d4$w34$w34$w1$w34$w3$w34$w1$w34$f3$f6$f3$w3$w34$w34$w34$w34$w34$w34$w3$f3$f3$f3$w34$w34$w34$w34$w34$w34$w34$w34$w3$w34$f5$w34$w34$w34$w34$w34$w3$w34$w1$w34$w3$f3$w3$w34$w34$w34$w34$");
});
