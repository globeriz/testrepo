var mapgen = function(map_name, map_data, map_width)
{
	map_width = typeof map_width !== 'undefined' ? map_width : 11;
	mapico_path = './mapico/';
	$("body").after("<div id='map_"+map_name+"'></div>");
	var o = $("#map_"+map_name);
	var a = map_data.split('$');
	for (i in a)
	{
		var image = new Image();
		image.onerror = function () {
		   this.onerror = null;
		   this.src = this.src.split('.')[0]+".bmp";
		}
		image.src = mapico_path+a[i]+".png";
		image.width = 32;
		image.height = 32;
		o.append(image);
		if (i % parseInt(map_width) == 0) o.append("<br />");
	}
};
$(document).ready(function(){
	mapgen("m1","w3$w34$w34$w3$f3$f2$w3$w1$w34$w3$w34$w3$w34$i7$m32$f5$w3$w1$h2$w1$w34$w34$w34$w34$f6$w1$f3$f3$w3$f3$f3$f6$w3$w3$w34$w3$w34$f3$f3$f3$f3$w3$f3$w3$w1$w34$w1$w3$w34$f3$f6$w3$w3$w34$w34$w3$w34$w3$f6$w34$f3$f3$w34$w34$w34$w1$w34$w34$f3$f6$w3$d4$w34$w34$w1$w34$w3$w34$w1$w34$f3$f6$f3$w3$w34$w34$w34$w34$w34$w34$w3$f3$f3$f3$w34$w34$w34$w34$w34$w34$w34$w34$w3$w34$f5$w34$w34$w34$w34$w34$w3$w34$w1$w34$w3$f3$w3$w34$w34$w34$w34$");
});
