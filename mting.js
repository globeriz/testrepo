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
		f = $("#mting embed");
		$("name[value='allowscriptaccess']").empty();
		f.removeAttr("allowscriptaccess");
	}
		msg = "Load OK!";
		flashObj = f;
		window.flashObj = f;
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
	flashObj.after("<div id='hack_menu'></div>");
	var hm = $("hack_menu");
	hm.html("<table><tbody>");
	var a = ["_root.machar.myhp", String(fR("_root.machar.myhp"))];
	hm.append( RowGen(a) );
}

var btnGenerator = function(f, t)
{
	return("<button type='button' onclick='"+f+"'>"+t+"</button>");
};
var RowGen = function(a)
{
	if (typeof a !== "array")
		return "";
	var s = "<tr>";
	for (var x in a)
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
