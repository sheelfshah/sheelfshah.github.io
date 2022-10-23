$(document).ready(function(){
    var script_path = $("#templatejs").attr('src');
    var head_path = script_path.replace("templatejs.js", "intern_head.html");
    $('head').load(head_path);
});

$(document).ready(function(){
    var script_path = $("#templatejs").attr('src');
    var nav_path = script_path.replace("templatejs.js", "intern_nav.html");
    $('#mainNav').load(nav_path);
});