/****************/
/* CONTEXT MENU */
/****************/

function contextMenus(id)
{
    $('#contextMenu1').removeClass("current");
    $('#contextMenu2').removeClass("current");
    $('#contextMenu'+id).addClass("current");
    $('#tab1').hide()
   	$('#tab2').hide();
    $('#tab'+id).show();
}

/***************/
/* DICE ROLLER */
/***************/

var nbrJet = 0;
var total = 0;

/* Escape = CLEAR */
$(document).keydown(function(e){ if (e.key === "Escape") clearHist();} );
/* Shift = MULTIPLE */
$(document).keydown(function(e){ if (e.key === "Shift") multiple();} );
/* Tab = ver toogle historique */
$(document).keydown(function(e){ if (e.key === "Tab") screen();} );

function clearHist()
{
	$('#mul').removeClass('on');
	$('#mul').addClass('off');
    nbrJet = 0;
    total = 0;

	$('#result').html("");
	$('#hist').html("");
	$('#aide').html("");
}

function multiple()
{
	if ($('#mul').hasClass('on'))
	{
		$('#mul').removeClass('on');
		$('#mul').addClass('off');
	}
	else
	{
	    nbrJet = 0;
        total = 0;
    	$('#mul').removeClass('off');
		$('#mul').addClass('on');
		$('#result').html("");
	}
	$('#hist').prepend("<br />");
}

function screen()
{
	if ($('#his').hasClass('on'))
	{
		$('#his').removeClass('on');
		$('#his').addClass('off');
	}
	else
	{
    	$('#his').removeClass('off');
		$('#his').addClass('on');
	}

    $('#hist').toggle();
	$('#aide').html("");
}

function dice(dice) 
{
	var de, d1, d2;
	var deTxt;

	$("#result").fadeOut(50).fadeIn(150);

	if (dice == "A")
	{
		d1 = Math.floor(Math.random() * 20 + 1);
		d2 = Math.floor(Math.random() * 20 + 1);

		if (d1 >= d2)
		{
			de = d1;
			if (de == 20)
				deTxt = "<span class='max'>" +d1+ "</span><span class='dice'> & " +d2+ " (d20)</span>";
			else
				deTxt = d1 + "<span class='dice'> & " +d2+ " (d20)</span>";
		}
		else
		{
			de = d2;
			if (de == 20)
				deTxt = "<span class='max'>" +d2+ "</span><span class='dice'> & " +d1+ " (d20)</span>";
			else
				deTxt = d2 + "<span class='dice'> & " +d1+ " (d20)</span>";
		}
	}
	else if (dice == "D")
	{
		d1 = Math.floor(Math.random() * 20 + 1);
		d2 = Math.floor(Math.random() * 20 + 1);

		if (d1 <= d2)
		{
			de = d1;
			if (de == 20)
				deTxt = "<span class='max'>" +d1+ "</span><span class='dice'> & " +d2+ " (d20)</span>";
			else
				deTxt = d1 + "<span class='dice'> & " +d2+ " (d20)</span>";
		}
		else
		{
			de = d2;
			if (de == 20)
				deTxt = "<span class='max'>" +d2+ "</span><span class='dice'> & " +d1+ " (d20)</span>";
			else
				deTxt = d2 + "<span class='dice'> & " +d1+ " (d20)</span>";
		}
	}
	else
	{
		de = Math.floor(Math.random() * dice + 1);
		if (dice == 20 && de == 20)
			deTxt =  "<span class='max'>" +de+ "</span> <span class='dice'>(" + dice + ")</span>";
		else
			deTxt =  de + " <span class='dice'>(d" + dice + ")</span>";
	}

	if ($('#mul').hasClass('on'))
	{
		total = total + parseInt(de);
		nbrJet++;
		$('#result').html(total + "<span class='dice'> [#" + nbrJet + "]</span>");
		if (nbrJet > 1)
        	$('#hist').prepend(deTxt + "<br />+");
        else
        	$('#hist').prepend(deTxt + "<br />");
	}
	else
	{
		$('#result').html(deTxt);
    	$('#hist').prepend(deTxt + "<br />");
	}
}

function displayD6(dice, min)
{
	if (min == 1)
		min = "min";
	else
		min = "regular";

	switch (dice)
	{
		case 1: return ("<i class='fas "+min+" fa-dice-one'></i> ");
		case 2: return ("<i class='fas "+min+" fa-dice-two'></i> ");
		case 3: return ("<i class='fas "+min+" fa-dice-three'></i> ");
		case 4: return ("<i class='fas "+min+" fa-dice-four'></i> ");
		case 5: return ("<i class='fas "+min+" fa-dice-five'></i> ");
		case 6: return ("<i class='fas "+min+" fa-dice-six'></i> ");
	}	
}

function best3of4() 
{
	var de, d1, d2, d3, d4;
	var deTot = "";
	var deTxt = "";
	var classMin;

	$('#mul').removeClass('on');
	$('#mul').addClass('off');

	for (i=0; i<6; i++)
	{
		d1 = Math.floor(Math.random() * 6 + 1);
		d2 = Math.floor(Math.random() * 6 + 1);
		d3 = Math.floor(Math.random() * 6 + 1);
		d4 = Math.floor(Math.random() * 6 + 1);

		var min = Math.min(d1, d2, d3, d4);
		var ya = 0;
		de = d1+d2+d3+d4-min;

		if (d1 == min) {classMin = 1; ya = 1;} else classMin = 0;
		deTxt += displayD6(d1, classMin);
		if (d2 == min && ya == 0) {classMin = 1; ya = 1;} else classMin = 0;
		deTxt += displayD6(d2, classMin);
		if (d3 == min && ya == 0) {classMin = 1; ya = 1;} else classMin = 0;
		deTxt += displayD6(d3, classMin);
		if (d4 == min && ya == 0) {classMin = 1} else classMin = 0;
		deTxt += displayD6(d4, classMin);

		deTot = deTot + de;
		if (i<5) deTot = deTot + " - ";

		if (de < 10) de = "&nbsp;" + de;
		deTxt += " <i class='fas fa-long-arrow-alt-right'></i> " + de + "<br />";
	}
	$('#result').html("<span class=\"b34\">" + deTot + "</span>");
	$('#hist').prepend("<br />" + deTxt + "<br />");
}

/*****************/
/* PROBABILITIES */
/*****************/

function calcul(graph, lang)
{

if (graph == 2)
{
	var nbr  = $("#nbr2").val();
	var dice = $("#dice2").val();
	var goal = $("#goal2").val();
	var bonus = parseInt($("#bonus2").val());
	var special;
}
else
{
	var nbr  = $("#nbr1").val();
	var dice = $("#dice1").val();
	var goal = $("#goal1").val();
	var bonus = parseInt($("#bonus1").val());
	var special;
}

if (nbr == "2A")
{
	nbr = 2; special = "A";
	var min    = 1 + bonus;
	var max    = 1 * dice + bonus;
}
else if (nbr == "2D")
{ 
	nbr = 2; special = "D";
	var min    = 1 + bonus;
	var max    = 1 * dice + bonus;
}
else if (nbr == "4B3")
{ 
	nbr = 4; special = "B";
	var min    = 3 + bonus;
	var max    = 3 * dice + bonus;
}
else
{
	nbr = parseInt(nbr); special = "";
	var min    = nbr + bonus;
	var max    = nbr * dice + bonus;
}

	var combin = Math.pow(dice, nbr);
	var de = new Array();
	var stat = new Array();
	var hit=0; 

	if (combin < 5000000)
	{
		for (var n=1; n<=nbr; n++)
			de[n] = 1;

		for (var n=min; n<=max; n++)
			stat[n] = 0;

		for (var c=1; c<=combin; c++)
		{
			var sum = 0;

			if (special == "A")
			{
				sum = Math.max (de[1], de[2]);		
			}
			else if (special == "D")
			{
				sum = Math.min (de[1], de[2]);		
			}
			else if (special == "B")
			{
				for (n=1; n<=nbr; n++)
					sum = sum + de[n];		
				sum = sum - Math.min (de[1], de[2], de[3], de[4])
			}
			else
			{
				for (n=1; n<=nbr; n++)
					sum = sum + de[n];		
			}
			sum = sum + bonus;

			stat[sum]++;

			if (sum >= goal)
				hit++;

			for (n=1; n<=nbr; n++)
			{
				if (n==1)
					de[n]++;

				if (de[n] > dice)
				{
					de[n] = 1;
					de[n+1]++;
				}
			}
		}

		var probabilite = Math.round(hit/combin*10000)/100;

		if (hit == 0)
		{
			if (graph == 2)
			{
				if (lang == 1)
					$("#result2").html("It's not possible to reach this score with these dice.");
				else
					$("#result2").html("Il est impossible d'atteindre cette valeur avec ces dés.");
				$("#chartContainer2").html("");
			}
			else
			{
				if (lang == 1)
					$("#result1").html("It's not possible to reach this score with these dice.");
				else
					$("#result1").html("Il est impossible d'atteindre cette valeur avec ces dés.");
				$("#chartContainer1").html("");
			}
		}
		else
		{
			if (graph == 2)
			{
				if (lang == 1)
					$("#result2").html("Probability to reach "+goal+" (or more) with these dice is <strong>"+probabilite+" %</strong>, meaning <strong>"+hit+" chance(s) over "+combin+"</strong>.");
				else
					$("#result2").html("La probabilité d'atteindre "+goal+" (ou plus) avec ces dés est de <strong>"+probabilite+" %</strong>, soit <strong>"+hit+" chance(s) sur "+combin+"</strong>.");
			}
			else
			{
				if (lang == 1)
					$("#result1").html("Probability to reach "+goal+" (or more) with these dice is <strong>"+probabilite+" %</strong>, meaning <strong>"+hit+" chance(s) over "+combin+"</strong>.");
				else
					$("#result1").html("La probabilité d'atteindre "+goal+" (ou plus) avec ces dés est de <strong>"+probabilite+" %</strong>, soit <strong>"+hit+" chance(s) sur "+combin+"</strong>.");
			}

			var data = new Array();
			for (var n=0; n<=max; n++)
			{
				if (n<min)
					data[n] = {x: n, y: null}; 
				else
					data[n] = {x: n, y: Math.round(stat[n]/combin*10000)/10000};
			}

			if (graph == 2)
			{
				var chart = new CanvasJS.Chart("chartContainer2", {
    	  			axisY: {valueFormatString:  "###.##%", minimum: 0 },
					data: [ { type: "column",		 // Change type to "doughnut", "line", "splineArea", etc.
						      color: "#cc66ff",
							  dataPoints : data	 } ] } );
			}
			else
			{
				var chart = new CanvasJS.Chart("chartContainer1", {
    	  			axisY: {valueFormatString:  "###.##%", minimum: 0 },
					data: [ { type: "column",		 // Change type to "doughnut", "line", "splineArea", etc.
						      color: "#b80000",
							  dataPoints : data	 } ] } );
			}	
			chart.render();
		}
	}
	else
	{
		if (graph == 2)
		{
			if (lang == 1)
				$("#result2").html("There are "+combin+" posibilities. It's better not to calcultate that if you don't want to crash you equipment...");	
			else
				$("#result2").html("Il y a "+combin+" combinaisons possibles. Il vaut mieux ne pas calculer ça si vous ne voulez pas faire planter votre machine...");	
			$("#chartContainer2").html("");
		}
		else
		{
			if (lang == 1)
				$("#result1").html("There are "+combin+" posibilities. It's better not to calcultate that if you don't want to crash you equipment...");	
			else
				$("#result1").html("Il y a "+combin+" combinaisons possibles. Il vaut mieux ne pas calculer ça si vous ne voulez pas faire planter votre machine...");	
			$("#chartContainer1").html("");
		}
	}
}