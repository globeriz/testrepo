var flashObj = undefined;
var flashVars = ["_root.machar.mysta", "_root.machar.mylv", "_root.machar.myhp", "_root.machar.myatk", "_root.machar.mydef", "_root.machar.myexp",
"_root.machar.charge", "_root.machar.maxcharge", "_root.machar.ki",
"_root.key.ykey", "_root.key.bkey", "_root.key.rkey", "_root.key.money"];

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

var updateVals = function()
{
	var ht = $("#hack_table");
	ht.empty();
	for (var x of flashVars)
		ht.append( rowGen([x, String(fR(x))]) );
}

var loadMenu = function()
{
	$("body").after("<div id='hack_menu'></div>");
	var hm = $("#hack_menu");
	hm.css({"position": "fixed", "top":0, "left":0, "background-color":"white"});
	hm.html("<table id='hack_table'></table>");
	var ht = $("#hack_table");
	for (var x of flashVars)
		ht.append( rowGen([x, String(fR(x))]) );
	setInterval(updateVals, 1000);
}

var editVal = function(x,u)
{
	var v = prompt(x+"=", "");
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
	s += "<td><button onclick=\"editVal('"+a[0]+"', '"+a[1]+"')\">Edit</button></td>";
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
