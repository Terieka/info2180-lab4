window.onload = function()
{
	$("start").onclick=clicked;
	$("boundary1").onmouseover=mouseover;
	$("end").onmouseover=end;
}
function mouseover()
{
	$(boundary1).addClassName="div.youlose";
}

window.onload = function() {
    var b = $$("div#maze div.boundary");
    for (var i = 0; i < b.length; i++) 
	{
        b[i].onmouseover = boundary;
    }
};

function boundary() {
    var b = $$("div#maze div.boundary");
    for (var i = 0; i < b.length; i++) {
        b[i].addClassName="div.youlose";
    }
}
function clicked()
{
	var b = $$("div#maze div.boundary");
    for (var i = 0; i < b.length; i++) 
	{
        b[i].removeClassName("youlose") = boundary;
    }
	
}
function end() 
{
    if (false) 
	{
        $("status").textContent = "Winner";
    }
	else
	{
		$("status").textContent = "Loser"
}	}

