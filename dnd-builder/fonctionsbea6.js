// global

//	var NIVMAX = 20;

// functions

	function options(type)
	{
		$('.option'+type).toggle();
	}

	function toogle(step)
	{
		$('.contour').hide();
		$('#win'+step).show();
	}

	function Next(step)
	{
	  if (token == 1)
	  {
		var data = "step=" + step;
		token = 0;
		switch (step)
		{
			case (1):		// race
				data += "&race=" + raceSelected;
				break;

			case (2):		// classe
				data += "&classe=" + classeSelected;
				break;

			case (3):		// back
				data += "&back=" + backSelected;
				break;

			case (4):		// carac
				data += "&level=" + $('#level').text();
				data += "&c0=" + $('#carac_brut_0').text();
				data += "&c1=" + $('#carac_brut_1').text();
				data += "&c2=" + $('#carac_brut_2').text();	
				data += "&c3=" + $('#carac_brut_3').text();
				data += "&c4=" + $('#carac_brut_4').text();
				data += "&c5=" + $('#carac_brut_5').text();
				data += "&augCarac0=" + $('#augCarac0:checked').val();
				data += "&augCarac1=" + $('#augCarac1:checked').val();
				data += "&augCarac2=" + $('#augCarac2:checked').val();
				break;

			case (5):		// capacites
				for (var n=1; n<=20; n++)
				{
					if ($('#don_'+n).length && $('#don_'+n).val() != '')
					{
						data += "&don["+n+"]=" + $('#don_'+n).val();
					}
					else if ($('#augCarac1_'+n).length)
					{
						data += "&augCarac0["+n+"]=" + $('#augCarac0_'+n).val();
						data += "&augCarac1["+n+"]=" + $('#augCarac1_'+n).val();
					}
				}

				if ($('#voieClasse').length)
					data += "&voieClasse=" + $('#voieClasse').val();
				
				if ($('#don_1').length)
					data += "&don[1]=" + $('#don_1').val();
				break;

			case (6):		// competences & tools & langues
				var competences = new Array();
				for (var n=0; n<4; n++)
				{
					if ($('select[name="comp_'+n+'"]').length)
					{
						competences[n] = new Array();
						$('select[name="comp_'+n+'"]').each(function(i){
							competences[n].push($(this).val());
						});
						data += "&competences["+n+"]="+competences[n];
					}
				}
				var outilsProf = new Array();
				for (var n=0; n<4; n++)
				{
					if ($('select[name="tool_'+n+'"]').length)
					{
						outilsProf[n] = new Array();
						$('select[name="tool_'+n+'"]').each(function(i){
							outilsProf[n].push($(this).val());
						});
						data += "&outilsProf["+n+"]="+outilsProf[n];
					}
				}
				var langues = new Array();
				for (var n=0; n<4; n++)
				{
					if ($('select[name="lang_'+n+'"]').length)
					{
						langues[n] = new Array();
						$('select[name="lang_'+n+'"]').each(function(i){
							langues[n].push($(this).val());
						});
						data += "&langues["+n+"]="+langues[n];
					}
				}
				break;

			case (7):		// options
				if ($('#raceCustom').length)	data += "&raceCustom="  + $('#raceCustom').val();
				if ($('#styleCombat1').length)	data += "&styleCombat1=" + $('#styleCombat1').val();
				if ($('#styleCombat2').length)	data += "&styleCombat2=" + $('#styleCombat2').val();
				for (var n=0; n<10; n++)
				{
					if ($('#classCustom_'+n).length)
						data += "&classCustom["+n+"]=" + $('#classCustom_'+n).val();
				}
				if ($('#ennemiHumain0').length)	 data += "&ennemiHumain0="  + $('#ennemiHumain0').val();
				if ($('#ennemiHumain6').length)	 data += "&ennemiHumain6="  + $('#ennemiHumain6').val();
				if ($('#ennemiHumain14').length) data += "&ennemiHumain14=" + $('#ennemiHumain14').val();

				var incantConnus = new Array();
				for (var n=0; n<=9; n++)
				{
					if ($('select[name="incantConnus_'+n+'"]').length)
					{
						incantConnus[n] = new Array();
						$('select[name="incantConnus_'+n+'"]').each(function(i){
							incantConnus[n].push($(this).val());
						});
						data += "&incantConnus["+n+"]="+incantConnus[n];
					}
					else if(n>0)
						break;
				}

				for (var n=1; n<=20; n++)
				{
					if ($('#customFeat_'+n).length)
						data += "&customFeat["+n+"]=" + $('#customFeat_'+n).val();
					if ($('#customFeat2_'+n).length)
						data += "&customFeat2["+n+"]=" + $('#customFeat2_'+n).val();
				}
				data += "&pack=" + $('#pack').val();
				if ($('#backSpe').length)	data += "&backSpe=" + $('#backSpe').val();
				break;

			case (8):		// pv
				data += "&pv[0]=" + $('#numPvTotal').text();
				for (var n=1; n<=20; n++)
				{
					if ($('#pv_brut_'+n).length)
					{
						data += "&pv["+n+"]=" + $('#pv_brut_'+n).text();
					}
				}
				break;

			case (9):		// sorts
				var sortsInnes  = new Array();
				for (var n=0; n<=20; n++)		// 0 = race
				{
					if ($('select[name="sortsInnes_'+n+'"]').length)
					{
						sortsInnes[n] = new Array();
						$('select[name="sortsInnes_'+n+'"]').each(function(i){
							sortsInnes[n].push($(this).val());
						});
						data += "&sortsInnes["+n+"]="+sortsInnes[n];
					}
				}

				var sortsConnus = new Array();
				for (var n=0; n<=9; n++)
				{
					if ($('select[name="sortsConnus_'+n+'"]').length)
					{
						sortsConnus[n] = new Array();
						$('select[name="sortsConnus_'+n+'"]').each(function(i){
							sortsConnus[n].push($(this).val());
						});
						data += "&sortsConnus["+n+"]="+sortsConnus[n];
					}
					else if(n>0)
						break;
				}
				break;

			case (10):		// equipement
				data += "&armure="  +$('#armure').val();
				data += "&bouclier="+$('#bouclier').val();

				var armes = new Array();
				$('select[name="arme"]').each(function(i){
					armes.push($(this).val());
				});
				data += "&armes="+armes;
				var armesQ = new Array();
				$('select[name="NBarme"]').each(function(i){
					armesQ.push($(this).val());
				});
				data += "&armesQ="+armesQ;

				var outils = new Array();
				$('select[name="outil"]').each(function(i){
					outils.push($(this).val());
				});
				data += "&outils="+outils;

				var objets = new Array();
				$('select[name="objet"]').each(function(i){
					objets.push($(this).val());
				});
				data += "&objets="+objets;
				var objetsQ = new Array();
				$('select[name="NBobjet"]').each(function(i){
					objetsQ.push($(this).val());
				});
				data += "&objetsQ="+objetsQ;

				data += "&objetsX=" +encodeURIComponent($('#objetsX').val());
				data += "&pc="  +$('#pc').val();
				data += "&pa="  +$('#pa').val();
				data += "&pe="  +$('#pe').val();
				data += "&po="  +$('#po').val();
				data += "&pp="  +$('#pp').val();
				data += "&tresors=" +encodeURIComponent($('#tresors').val());
				break;

			case (11):		// perso
				data += "&nom="+$('#nom').val() + "&sexe="+$('#sexe').val() + "&age="+$('#age').val() + "&taille="+$('#taille').val() + "&poids="+$('#poids').val() + "&XP="+$('#XP').val() + "&align="+$('#align').val() + "&yeux="+$('#yeux').val() + "&peau="+$('#peau').val() + "&cheveux="+$('#cheveux').val()  + "&apparence="+encodeURIComponent($('#apparence').val());
				data += "&traits="+$('#traits').val() + "&ideaux="+$('#ideaux').val() + "&liens="+$('#liens').val() + "&defauts="+$('#defauts').val() + "&histoire="+encodeURIComponent($('#histoire').val()) + "&allies="+encodeURIComponent($('#allies').val()) + "&capacitesExtra="+encodeURIComponent($('#capacitesExtra').val());
				break;
		}

		$.ajax({
			url : 'ajax_next.php',
       		type : 'POST',
       		data : data,
       		dataType : 'html', // On désire recevoir du HTML
       		success : function(responseText, statut)
			{ 
				toogle (parseInt(step+1));
				$('#currentPerso').html(responseText);
				$('#currentDetail').html(INTRO[step]);
				initEtape(step);
			}
		});
      }
	}

	function initEtape(step)
	{
		var data = "&initEtape="+step;

		$.ajax({
			url : 'ajax_main.php',
       		type : 'POST',
       		data : data,
       		dataType : 'html', // On désire recevoir du HTML
       		success : function(responseText, statut)
			{ 
				switch (step)
				{
					case (0): changeRace(raceSelected);
						break;
					case (1): changeClasse(classeSelected, levelSelected);
						break;
					case (2): changeBack(backSelected);
						break;
					case (3) : $('#carac').html(responseText); $('#currentDetail').append(lanceDes()); changeCarac(0,0);
						break;
					case (4) : $('#capacites').html(responseText); donHumain();
						break;
					case (5) : $('#competences').html(responseText);
						break;
					case (6) : $('#options').html(responseText);
						break;
					case (7) : $('#pv').html(responseText); changePv(0, 1, 12);
						break
					case (8) : $('#sorts').html(responseText);
						break;
					case (9) : $('#equipement').html(responseText);
						break;
					case (10) : $('#perso').html(responseText); changeXP();
						break;
					case (11) : $('#calcul').html(responseText);
						break;
				}
				token=1;
			}
		});
	}

	function donHumain()
	{
		$.ajax({
			url : 'ajax_donH.php',
       		type : 'POST',
       		dataType : 'html', // On désire recevoir du HTML
       		success : function(responseText, statut)
			{ 
				$('#donH').html(responseText);
			}
		});
	}

	function changeRace(i)
	{
		$('.imgRChoix').removeClass("imgSelect");
		$('#race_'+i).addClass("imgSelect");
		$('#currentDetail').html(RACE[i]);
		raceSelected = i;
	}

	function changeClasse(i, l)
	{
		$('.imgCChoix').removeClass("imgSelect");
		$('#classe_'+i).addClass("imgSelect");
		$('#currentDetail').html(CLASSE[i]);
		$('#level').text(l);
		classeSelected = i;
	}

	function changeNiveau(sens)
	{
		var old = parseInt($('#level').text());
		if ((old > 1 || sens == 1) && (old < 20 || sens == -1))
		{
			$('#level').html(old+sens);
			levelSelected = (old+sens);
		}
	}

	function changeBack(i)
	{
		$('.imgBChoix').removeClass("imgSelect");
		$('#back_'+i).addClass("imgSelect");
		$('#currentDetail').html(BACK[i]);
		backSelected = i;
	}

	function changeCarac(sens, i)
	{
		var old = parseInt($('#carac_brut_'+i).text());
		if ( ((old > 3 || sens == 1) && (old < 18 || sens == -1)) || (sens == 0))
		{
			var caracInit = new Array(0,0,0,0,0,0,0,0,0,1,2,3,4,5,7,9,100,100,100);
			var pts = 0;
			$('#carac_brut_'+i).html(old+sens);

			for (var i=0; i<6; i++)
			{
				var select = $('#carac_brut_'+i).text();
				pts = pts + parseInt(caracInit[select]);
				var bonus = 0;

				if (Number.isInteger(parseInt($('#carac_race_'+i).text())))
					bonus = $('#carac_race_'+i).text();
		
				if ($('#augCarac0:checked').val() == i)
					$("#augCarac1[value='"+i+"']").prop('checked', false);

				if ($('#augCarac0:checked').val() == i)
					bonus++;
				if ($('#augCarac1:checked').val() == i)
					bonus++;
				if ($('#augCarac2:checked').val() == i)
					bonus++;

				var bonusCar = Math.floor((parseInt(select) + parseInt(bonus))/2-5);
				if (bonusCar >= 0)
					bonusCar = "+" + bonusCar;
				$('#carac_'+i).html(parseInt(select) + parseInt(bonus) + " (" + bonusCar +")");
			}
	
			if (pts > 99)
			{
				$('#numPts').html("<strong>Score > 15</strong> <i class='fas fa-exclamation-circle orange'></i>");
			}
			else
			{
				var flag="";
				if (pts == 27)
					flag = "<i class='fas fa-check-circle green'></i>";
				else if (pts > 27)
					flag = "<i class='fas fa-times-circle red'></i>";

				$('#numPts').html("<strong>" + pts + "</strong>/27 " + flag);
			}
		}
	}

	function lanceDes()
	{
		lancer = "";
		for (var i=1; i<=6; i++)
		{
			var de1 = Math.floor((Math.random()*6)+1);
			var de2 = Math.floor((Math.random()*6)+1);
			var de3 = Math.floor((Math.random()*6)+1);
			var de4 = Math.floor((Math.random()*6)+1);
			lancer = lancer + "<span class=\"dice\">" + (de1 + de2 + de3 + de4 - Math.min(de1, de2, de3, de4)) + "</span> (" + de1 +" "+ de2 +" "+ de3 +" "+ de4 + ")<br />";
		}
		return (lancer);
	}

	function changeDetail(champ)
	{
		$('#currentDetail').html(champ);
	}

	function changeEnnemi0(id, hum)
	{
		if (id==hum)
		{
			$('#currentDetail').html(ENNHUM);
			$('#ennemiHumain0').prop("disabled", "");
		}
		else
		{
			$('#currentDetail').html('');
			$('#ennemiHumain0').prop("disabled", "disabled");
		}
	}
	function changeEnnemi6(id, hum)
	{
		if (id==hum)
		{
			$('#currentDetail').html(ENNHUM);
			$('#ennemiHumain6').prop("disabled", "");
		}
		else
		{
			$('#currentDetail').html('');
			$('#ennemiHumain6').prop("disabled", "disabled");
		}
	}
	function changeEnnemi14(id, hum)
	{
		if (id==hum)
		{
			$('#currentDetail').html(ENNHUM);
			$('#ennemiHumain14').prop("disabled", "");
		}
		else
		{
			$('#currentDetail').html('');
			$('#ennemiHumain14').prop("disabled", "disabled");
		}
	}

	function insertBackSpe(id)
	{
		$('#backSpe').val(BACKSPE[backSelected][id]); 
	}

	function displayBackSpe()
	{
		var choix = SPECIAL;

		if (typeof BACKSPE[backSelected] !== 'undefined')
		{
			for (i=0; i<BACKSPE[backSelected].length; i++)
			{
				choix = choix + "<div class='choix' id='backSpe"+i+"' onclick=insertBackSpe("+i+")>" + BACKSPE[backSelected][i] + "</div>";
			}
			$('#currentDetail').html(choix);	
		}
	}

	function changePv(sens, n, max)
	{
		var old = parseInt($('#pv_brut_'+n).text());
		if ( ((old > 1 || sens == 1) && (old < max || sens == -1)) || (sens == 0))
		{
			$('#pv_brut_'+n).html(old+sens);
			var pv = 0;
			var l = $('#level').text();
			for (var i=1; i<=l; i++)
			{
				var bonus = 0;
				var select = parseInt($('#pv_brut_'+i).text());
				if ($('#pv_con_'+i).text())
					bonus  = parseInt($('#pv_con_'+i).text());
				if ($('#pv_race_'+i).text())
					bonus = bonus + parseInt($('#pv_race_'+i).text());
				$('#pv_'+i).html(select + bonus);
				pv = pv + select + bonus;
			}
	
			$('#numPvTotal').html(pv);
		}
	}

	function addSpell(niv)
	{
		var nbSort = $('select[name="sortsConnus_'+niv+'"]').length -1;
		var nbSortSuiv = nbSort+1;

		$('#sortsConnus_'+niv).append($('#sortsConnus_'+niv+nbSort).clone().attr('id', 'sortsConnus_'+niv+nbSortSuiv));
		$('#sortsConnus_'+niv).append("<br />");
		$('#sortsConnus_'+niv+nbSortSuiv).addClass("dashed");
	}

	function addArme()
	{
		var nbArme  = $('select[name="arme"]').length -1;
		var nbArmeSuiv = nbArme+1;

		$('#armes').append($('#arme_'  +nbArme).clone().attr('id', 'arme_'  +(nbArmeSuiv)));
		$('#armes').append($('#NBarme_'+nbArme).clone().attr('id', 'NBarme_'+(nbArmeSuiv)));
		$('#armes').append("<br/>");
		$('#currentDetail').text("");
	}

	function addOutil()
	{
		var nbOutil = $('select[name="outil"]').length -1;
		var nbOutilSuiv = nbOutil+1;

		$('#outils').append($('#outil_'+nbOutil).clone().attr('id', 'outil_'  +(nbOutilSuiv)));
		$('#outils').append("<br/>");
		$('#currentDetail').text("");
	}

	function addEquip()
	{
		var nbObjet = $('select[name="objet"]').length -1;
		var nbObjetSuiv = nbObjet+1;

		$('#objets').append($('#objet_'  +nbObjet).clone().attr('id', 'objet_'  +(nbObjetSuiv)));
		$('#objets').append($('#NBobjet_'+nbObjet).clone().attr('id', 'NBobjet_'+(nbObjetSuiv)));
		$('#objets').append("<br/>");
		$('#currentDetail').text("");
	}

	function changeXP()
	{
		var XP  = parseInt($('#XP').val());
		var niv = parseInt($('#level').text());
		if ( (XP < TABXP[niv]) || (XP >= TABXP[niv+1]) )
			$('#currentDetail').html(XPKO + TABXP[niv] + XPET + (TABXP[niv+1]-1) + ".");
		else
			$('#currentDetail').html(XPOK);
	}

	function clickEquip(obj, type)
	{
		if (obj.value > 0)
		{
			if (type == 1)
			{
				$('#currentDetail').html(ARMURE[obj.value]);
			}
			else if (type == 2)
			{
				$('#currentDetail').html(BOUCLIER[obj.value]);
			}
			else if (type == 3)
			{
				$('#currentDetail').html(ARME[obj.value]);
			}
		}
		else
		{
			$('#currentDetail').text("");
		}
	}

	function insertTraits(id)
	{
		$('#traits').html(TRAITS[backSelected][id]); 
	}
	function insertIdeaux(id)
	{
		$('#ideaux').html(IDEAUX[backSelected][id]); 
	}
	function insertLiens(id)
	{
		$('#liens').html(LIENS[backSelected][id]); 
	}
	function insertDefauts(id)
	{
		$('#defauts').html(DEFAUTS[backSelected][id]); 
	}

	function displayTraits()
	{
		var choix = EXTRAIT;

		if (typeof TRAITS[backSelected] !== 'undefined')
		{
			for (i=0; i<TRAITS[backSelected].length; i++)
			{
				choix = choix + "<div class='choix' id='trait"+i+"' onclick=insertTraits("+i+")>" + TRAITS[backSelected][i] + "</div>";
			}
			$('#currentDetail').html(choix);	
		}
	}
	function displayIdeaux()
	{
		var choix = EXIDEAL;

		if (typeof IDEAUX[backSelected] !== 'undefined')
		{
			for (i=0; i<IDEAUX[backSelected].length; i++)
			{
				choix = choix + "<div class='choix' id='ideal"+i+"' onclick=insertIdeaux("+i+")>" + IDEAUX[backSelected][i] + "</div>";
			}
			$('#currentDetail').html(choix);	
		}
	}
	function displayLiens()
	{
		var choix = EXLIEN;

		if (typeof LIENS[backSelected] !== 'undefined')
		{
			for (i=0; i<LIENS[backSelected].length; i++)
			{
				choix = choix + "<div class='choix' id='lien"+i+"' onclick=insertLiens("+i+")>" + LIENS[backSelected][i] + "</div>";
			}
			$('#currentDetail').html(choix);	
		}
	}
	function displayDefauts()
	{
		var choix = EXDEFAUT;

		if (typeof DEFAUTS[backSelected] !== 'undefined')
		{
			for (i=0; i<DEFAUTS[backSelected].length; i++)
			{
				choix = choix + "<div class='choix' id='defaut"+i+"' onclick=insertDefauts("+i+")>" + DEFAUTS[backSelected][i] + "</div>";
			}
			$('#currentDetail').html(choix);	
		}
	}

	function ClipBoard() 
	{
		var bbcode = Output.innerHTML;

		bbcode = bbcode.replace(/<strong>/g, "[b]");
		bbcode = bbcode.replace(/<\/strong>/g, "[/b]");
		bbcode = bbcode.replace(/<em>/g, "[i]");
		bbcode = bbcode.replace(/<\/em>/g, "[/i]");
		bbcode = bbcode.replace(/<h2>/g, "[size=150]");
		bbcode = bbcode.replace(/<\/h2>/g, "[/size]<br />");
		bbcode = bbcode.replace(/<h3>/g, "<br /><br />[size=130]");
		bbcode = bbcode.replace(/<\/h3>/g, "[/size]<br />");
		bbcode = bbcode.replace(/<form name="formSorts" method="post" action="..\/dnd\/sorts\.php" target="_blank">/g, "");
		bbcode = bbcode.replace(/<br><input type="submit" class="bBook" name="display" value="Générer grimoire">/g, "");
		bbcode = bbcode.replace(/<\/form>/g, "");
//alert(bbcode);
		var myWindow = window.open("", "_blank", "location=no, titlebar=no, menubar=no, toolbar=no, width=700, height=600");
		myWindow.document.write("<div style='font-size:80%'>"+bbcode+"</div>");
	}