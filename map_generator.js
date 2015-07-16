mapgen = function(map_name, map_data)
{
  mapico_path = './mapico/';
  $("body").after("<div id='map_"+map_name+"'></div>");
  var o = $("#map_"+map_name);
  var a = map_data.split('$');
  for (x of a)
    o.append("<img src='"+mapico_path+x+"'/">);
};
