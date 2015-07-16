var flashObj = undefined;

var loadMe = function(){
	var f = undefined;
	var msg = "";
	if ($("#mting embed") === undefined)
	{
		if ($("embed") === undefined)
		{
			msg = "Load Fail!";
			//alert(msg);
			return false;		
		}
		else
			f = $("embed");
	}
	else
	{
		f = $("#mting embed")[0];
	}
		msg = "Load OK!";
		flashObj = f;
		//alert(msg);
		return true;
};

var loadMenu2 = function()
{
	$("body").css();
	flashObj.after(btnGenerator("addVar(\"_root.machar.myhp\"), 100", "+100HP"));
};

var loadMenu = function()
{
	$("body").after("<div id='hack_menu'></div>");
	var hm = $("#hack_menu");
	hm.css({"position": "fixed", "top":0, "left":0});
	hm.html("<table id='hack_table'>");
	var a = ["_root.machar.myhp", String(fR("_root.machar.myhp"))];
	hm.append( rowGen(a) );
	hm.append("</table>");
	$("#hack_menu td").css({"background-color":"white"});
}



var btnGenerator = function(f, t)
{
	return("<button type='button' onclick='"+f+"'>"+t+"</button>");
};
var rowGen = function(a)
{
	if (!Array.isArray(a))
		return ("<tr><td>"+a+"</td></tr>");
	var s = "<tr>";
	for (var x of a)
		s += ("<td>"+x+"</td>");
	s += "</tr>";
	return s;
}

var fR = function(x){
	return flashObj.GetVariable(x);
};

var fW = function(x, v){
	flashObj.SetVariable(x, v);
};

var addVar = function(x, v)
{
	var u = fR(x);
	if (u === undefined) return;
	u = parseInt(u) + parseInt(v);
	fW(x, u);
};

var subVar = function(x, v)
{
	var u = fR(x);
	if (u === undefined) return;
	u = parseInt(u) - parseInt(v);
	fW(x, u);
};

//main
$(document).ready(function(){
	var r = loadMe();
	if (r)
		loadMenu();
});
