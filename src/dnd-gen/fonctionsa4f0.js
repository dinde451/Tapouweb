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

/**************/
/* GENERATEUR */
/**************/

var NUM=3;

function genNomNAI(l)
{
	var NAIpre  = new Array ("An", "Ar", "Ara", "Az", "B", "Bal", "Bar", "Bari", "Baz", "Bel", "Bof", "Bol", "D", "Dal", "Dar", "Dare", "Del", "Dol", "Dor", "Dora", "Duer", "Dur", "Duri", "Dw", "Dwo", "El", "Er", "En", "Fal", "Fall", "Far", "Gar", "Gil", "Gim", "Glan", "Glor", "Glori", "Har", "Hel", "Jar", "Kil", "Ma", "Mar", "Mor", "Mori", "Nal", "Nor", "Nora", "Nur", "Nura", "O", "Oi", "Or", "Ori", "Ov", "Rei", "Th", "Ther", "Tho", "Thor", "Thr", "Thra", "Tor", "Tore", "Ur", "Urm", "Val", "Von", "Wer", "Wera", "Whur", "Yur");
	var NAIsufM = new Array ("aim", "and", "ain", "arn", "ak", "ar", "ard", "auk", "bere", "bir", "bin", "dak", "dek", "dal", "din", "el", "ent", "erl", "gai", "gan", "gar", "gath", "gen", "gnm", "gur", "guk", "i", "ik", "ias", "ili", "li", "im", "rim", "in", "rin", "ir", "init", "kas", "kral", "lond", "o", "oak", "on", "lon", "or", "roc", "oril", "oric", "rak", "ral", "ric", "rid", "rim", "ring", "ster", "stili", "sun", "ten", "thaï", "then", "thic", "thur", "ur", "rur", "urt", "ut", "unt", "val", "var", "villi");
	var NAIsufF = new Array ("a", "aed", "ala", "la", "alsia", "ana", "ani", "astr", "bêla", "bera", "bena", "bo", "bryn", "deth", "dis", "dred", "dnd", "dris", "esli", "gret", "gunn", "hild", "ia", "ida", "iess", "iff", "ifra", "ila", "ild", "ina", "ip", "ippa", "isi", "iz", "ja", "kara", "li", "ili", "lin", "lydd", "mora", "moa", "ola", "on", "ona", "ora", "oa", "re", "rra", "ren", "serd", "shar", "sha", "thra", "tia", "tryd", "unn", "wynn", "ya", "ydd");
	if (l==0) var NAIclan = new Array ("Aranore", "Balderk", "Marteaudeguerre", "Grosorteil", "Bloodkith", "Bofdann", "Fortenclume", "Brazzik", "Poingbroyé", "Trouvenbas", "Caebrek", "Daerdahk", "Dankil", "Daraln", "Creuseprofond", "Durthane", "Grandtranchant", "Fallack", "Forgefeu", "Foamtankard", "Barbegelée", "Glanhig", "Tuegobelins", "Chercheurdor", "Gorunn", "Barbegrise", "Pierremarteau", "Helcral", "Holderhek", "Poing d'acier", "Loderr", "Lutgehr", "Morigak", "Ennemiorc", "Rakankrak", "Oeilderubis", "Rumnaheim", "Hachedargent", "Pierredargent", "Poing de fer", "Grossebière", "Strakeln", "Grandcoeur", "Thrahak", "Torevir", "Torunn", "Purgeurdetroll", "Vraienclume", "Vraisang", "Ungart");
	else      var NAIclan = new Array ("Aranore", "Balderk", "Battlehammer", "Bigtoe", "Bloodkith", "Bofdann", "Brawnanvil", "Brazzik", "Broodfist", "Burrowfound", "Caebrek", "Daerdahk", "Dankil", "Daraln", "Deepdelver", "Durthane", "Eversharp", "Fallack", "Fireforge", "Foamtankard", "Frostbeard", "Glanhig", "Goblinbane", "Goldfinder", "Gorunn", "Graybeard", "Hammerstone", "Helcral", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Morigak", "Orcfoe", "Rakankrak", "Ruby-Eye", "Rumnaheim", "Silveraxe", "Silverstone", "Steelfist", "Stoutale", "Strakeln", "Strongheart", "Thrahak", "Torevir", "Torunn", "Trollbleeder", "Trueanvil", "Trueblood", "Ungart");

	var LgNom = new Array ("Noms nains masculins", "Dwarf Male Names");
	var LgClan = new Array (" du clan ", " from clan ");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var clan = Math.floor(Math.random() * (NAIclan.length-1));
		var pre = Math.floor(Math.random() * (NAIpre.length-1));
		var suf = Math.floor(Math.random() * (NAIsufM.length-1));
		Return = Return	+ NAIpre[pre] + NAIsufM[suf] + LgClan[l] + NAIclan[clan] + "<br />";
	}

	var LgNom = new Array ("Noms nains féminins", "Dwarf Female Names");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var clan = Math.floor(Math.random() * (NAIclan.length-1));
		var pre = Math.floor(Math.random() * (NAIpre.length-1));
		var suf = Math.floor(Math.random() * (NAIsufF.length-1));
		Return = Return	+ NAIpre[pre] + NAIsufF[suf] + LgClan[l] + NAIclan[clan] + "<br />";
	}
	Return = Return + "</h2>";

	$("#result").html("<div class='result'>"+Return+"</div>");
}

function genNomELF(l)
{
	var ELFpre  = new Array ("Ael", "Aer", "Af", "Ah", "Al", "Am", "Ama", "An", "Ang", "Ansr", "Ar", "Arì", "Arn", "Aza", "Bael", "Bes", "Cael", "Cal", "Cas", "Cla", "Cor", "Cy", "Dae", "Dho", "Dre", "Du", "Eil", "Eir", "El", "Er", "Ev", "Fera", "Fi", "Fir", "Fis", "Gael", "Gar", "Gil", "Ha", "Hu", "Ia", "Il", "Ja", "Jar", "Ka", "Kan", "Ker", "Keth", "Koeh", "Kor", "Ky", "La", "Laf", "Lam", "Lue", "Ly", "Mai", "Mal", "Mara", "My", "Na", "Nai", "Nim", "Nu", "Ny", "Py", "Raer", "Re", "Ren", "Rhy", "Ry", "Ru", "Rua", "Rum", "Rid", "Sae", "Seh", "Sel", "Sha", "She", "Si", "Sim", "Sol", "Sum", "Syl", "Ta", "Tahl", "Tha", "Tho", "Ther", "Thro", "Tia", "Tra", "Ty", "Try", "Uth", "Ver", "Vil", "Von", "Ya", "Za", "Zy");
	var ELFsufM = new Array ("ae", "ael", "aer", "aias", "ah", "aith", "al", "ali", "am", "an", "ar", "ari", "aro", "as", "ath", "avel", "brar", "dar", "deth", "dre", "drim", "dul", "ean", "el", "emar", "en", "er", "ess", "evar", "fel", "hal", "har", "hel", "ian", "iat", "ik", "il", "im", "in", "ir", "is", "ith", "kash", "ki", "lan", "lam", "lar", "las", "lian", "lis", "lon", "lyn", "mah", "mil", "mus", "nal", "nes", "nin", "nis", "on", "or", "oth", "que", "quis", "rah", "rad", "rail",  "ran", "reth", "ro", "ruil", "sal", "san", "sar", "sel", "sha", "spar", "tae", "tas", "ten", "thal", "thar", "ther", "thi", "thus", "ti", "tril", "ual", "uath", "us", "van", "var", "vain", "via", "vin", "wyn", "ya", "yr", "yth", "zair");
	var ELFsufF = new Array ("ae", "ael", "aera", "aia", "aha", "aira", "ala", "ali", "ama", "ana", "ara", "ari", "aro", "as", "ath", "avel", "brar", "dar", "deth", "dre", "drim", "dul", "ean", "el", "emar", "en", "er", "ess", "evar", "fel", "hal", "har", "hel", "ianna", "iat", "ik", "il", "im", "in", "ir", "is", "ith", "kash", "ki", "lanna", "lam", "lar", "las", "lia", "lis", "lon", "lyn", "ma", "mil", "mus", "nal", "nes", "nin", "nis", "onna", "or", "oth", "que", "quis", "rah", "rad", "ria", "ran", "reth", "ro", "ruil", "sal", "san", "sar", "sel", "sha", "spar", "tae", "tas", "ten", "tha", "thar", "ther", "thi", "thas", "ti", "tria", "ual", "uath", "ua", "vanna", "vara", "vain", "via", "vin", "wyn", "ya", "yn", "yth", "zara");

	var LgNom = new Array ("Noms elfes masculins", "Elf Male Names");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var long = Math.floor(Math.random() * 10);
		var pre1 = Math.floor(Math.random() * (ELFpre.length-1));
		var pre2 = Math.floor(Math.random() * (ELFpre.length-1));
		var suf1 = Math.floor(Math.random() * (ELFsufM.length-1));
		var suf2 = Math.floor(Math.random() * (ELFsufM.length-1));
		var suf3 = Math.floor(Math.random() * (ELFsufM.length-1));
		Return = Return	+ ELFpre[pre1] + ELFsufM[suf1];

		if      ((long>=4) && (long<=6)) Return = Return + ELFsufM[suf2];
		else if ((long>=7) && (long<=8)) Return = Return + " " + ELFpre[pre2] + ELFsufM[suf2];
		else if  (long==9)	             Return = Return + "'" + ELFsufM[suf2] + ELFsufM[suf3];
		Return = Return + "<br />";
	}

	var LgNom = new Array ("Noms elfes féminins", "Elf Female Names");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var long = Math.floor(Math.random() * 10);
		var pre1 = Math.floor(Math.random() * (ELFpre.length-1));
		var pre2 = Math.floor(Math.random() * (ELFpre.length-1));
		var suf1 = Math.floor(Math.random() * (ELFsufF.length-1));
		var suf2 = Math.floor(Math.random() * (ELFsufF.length-1));
		var suf3 = Math.floor(Math.random() * (ELFsufF.length-1));
		Return = Return	+ ELFpre[pre1] + ELFsufF[suf1];

		if      ((long>=4) && (long<=6)) Return = Return + ELFsufF[suf2];
		else if ((long>=7) && (long<=8)) Return = Return + " " + ELFpre[pre2] + ELFsufF[suf2];
		else if  (long==9)	             Return = Return + "'" + ELFsufF[suf2] + ELFsufF[suf3];
		Return = Return + "<br />";
	}
	Return = Return + "</h2>";

	$("#result").html("<div class='result'>"+Return+"</div>");
}

function genNomHAL(l)
{
	var HALpreM = new Array ("Alton", "Ander", "Bernie", "Bobbin", "Cade", "Callus", "Corrin", "Dannad", "Danniel", "Eddie", "Egart", "Eldon", "Errich", "Fildo", "Finnan", "Franklin", "Garret", "Garth", "Gilbert", "Gob", "Harol", "Igor", "Jasper", "Keith", "Kevin", "Lazam", "Lerry", "Lindal", "Lyle", "Merric", "Mican", "Milo", "Morrin", "Nebin", "Nevil", "Osborn", "Ostran", "Oswalt", "Perrin", "Poppy", "Reed", "Roscoe", "Sam", "Shardon", "Tye", "Ulmo", "Wellby", "Wendel", "Wenner", "Wes");
	if (l==0) var HALpreF = new Array ("Alain", "Andry", "Anne", "Bella", "Blossom", "Bree", "Callie", "Chenna", "Cora", "Dee", "Dell", "Eida", "Eran", "Euphémie", "Georgine", "Gynnie", "Harriet", "Jasmine", "Jillian", "Jo", "Kithri", "Lavinia", "Lidda", "Maegan", "Marigold", "Merla", "Myria", "Nedda", "Nikki", "Nora", "Olivia", "Paela", "Perle", "Pennie", "Philomène", "Portia", "Robbie", "Rose", "Saral", "Séraphine", "Shaena", "Stacee", "Tawna", "Thea", "Trym", "Tyna", "Vani", "Verna", "Wella", "Willow");
	else	  var HALpreF = new Array ("Alain", "Andry", "Anne", "Bella", "Blossom", "Bree", "Callie", "Chenna", "Cora", "Dee", "Dell", "Eida", "Eran", "Euphemia", "Georgina", "Gynnie", "Harriet", "Jasmine", "Jillian", "Jo", "Kithri", "Lavinia", "Lidda", "Maegan", "Marigold", "Merla", "Myria", "Nedda", "Nikki", "Nora", "Olivia", "Paela", "Pearl", "Pennie", "Philomena", "Portia", "Robbie", "Rose", "Saral", "Seraphina", "Shaena", "Stacee", "Tawna", "Thea", "Trym", "Tyna", "Vani", "Verna", "Wella", "Willow");
	if (l==0) var HALnom = new Array ("Fleurdepomme", "Grandcoeur", "Lunebrillante", "Ramassebrosse", "Jouecerise", "Grandfond", "Vieillebaie", "Piedvéloce", "Groslapin", "Vertami", "Trouvedelor", "Bonbaril", "Boncoeur", "Vertbouteille", "Feuilleverte", "Hautecolline", "Roulecolline", "Porcattache", "Potamiel", "Potaconfiture", "Chaudsifflet", "Toutpermis", "Petitpied", "Doigtsagiles", "Potbouilli", "Foulerapide", "Amiduroseau", "Ombréclipse", "Oeildargent", "Mainsdouces", "Pierredupont", "Grandpont", "Bonnebière", "Grosos", "Grandpré", "Petisifflet", "Grandpote", "Feuilledethé", "Dixpieces", "Hautchardon", "Pasdépines", "Lancepavé", "Souslabranche", "Souslespieds", "Eauchaude", "Petitesouris", "Caperebelle", "Coeursauvage", "Sageparcelle");
	else      var HALnom = new Array ("Appleblossom", "Bigheart", "Brightmoon", "Brushgather", "Cherrycheeks", "Copperkettle", "Deephollow", "Elderberry", "Fastfoot", "Fatrabbit", "Glenfellow", "Goldfound", "Goodbarrel", "Goodearth", "Greenbottle", "Greenleaf", "High-hill", "Hilltopple", "Hogcollar", "Honeypot", "Jamjar", "Kettlewhistle", "Leagallow", "Littlefoot", "Nimble-fingers", "Porridgepot", "Quickstep", "Reedfellow", "Shadowquick", "Silvereyes", "Smoothhands", "Stonebridge", "Stoutbridge", "Stoutman", "Strongbones", "Sunmeadow", "Swiftwhistle", "Tallfellow", "Tealeaf", "Tenpenny", "Thistletop", "Thorngage", "Tosscobble", "Underbough", "Underfoot", "Warmwater", "Whispermouse", "Wildcloak", "Wildheart", "Wiseacre");

	var LgNom = new Array ("Noms halfelins masculins", "Halfling Male Names");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var pre = Math.floor(Math.random() * (HALpreM.length-1));
		var nom = Math.floor(Math.random() * (HALnom.length-1));
		Return = Return	+ HALpreM[pre] + " " + HALnom[nom] + "<br />";
	}

	var LgNom = new Array ("Noms halfelins féminins", "Halfling Female Names");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var pre = Math.floor(Math.random() * (HALpreF.length-1));
		var nom = Math.floor(Math.random() * (HALnom.length-1));
		Return = Return	+ HALpreF[pre] + " " + HALnom[nom] + "<br />";
	}
	Return = Return + "</h2>";

	$("#result").html("<div class='result'>"+Return+"</div>");
}

function genNomGNO(l)
{
	var GNOpreM = new Array ("Alston", "Alvyn", "Anverth", "Arumawann", "Bilbron", "Boddynock", "Brocc", "Burgell", "Cockaby", "Crampernap", "Dabbledob", "Delebean", "Dimble", "Eberdeb", "Eldon", "Erky", "Fablen", "Fibblestib", "Fonkin", "Frouse", "Frug", "Gerbo", "Gimble", "Glim", "lgden", "Jabble", "Jebeddo", "Kellen", "Kipper", "Namfoodle", "Oppleby", "Orryn", "Paggen", "Pallabar", "Pog", "Qualen", "Ribbles", "Rimple", "Roondar", "Sapply", "Seebo", "Senteq", "Sindri", "Umpen", "Warryn", "Wiggens", "Wobbles", "Wrenn", "Zaffrab", "Zook");
	var GNOpreF = new Array ("Abalaba", "Bimpnottin", "Breena", "Buvvie", "Callybon", "Caramip", "Carlin", "Cumpen", "Dalaba", "Donella", "Duvamil", "Ella", "Ellyjoybell", "Ellywick", "Enidda", "Lilli", "Loopmottin", "Lorilla", "Luthra", "Mardnab", "Meena", "Menny", "Mumpena", "Nissa", "Numba", "Nyx", "Oda", "Oppah", "Orla", "Panana", "Pynfle", "Quilla", "Ranala", "Reddlepop", "Roywyn", "Salanop", "Shamil", "Siffress", "Symma", "Tana", "Tenena", "Tervaround", "Tippletoe", "Ulla", "Unvera", "Veloptima", "Virra", "Waywocket", "Yebe", "Zanna");
	var GNOnom = new Array ("Albaratie", "Bafflestone", "Beren", "Boondiggles", "Cobblelob", "Daergel", "Dunben", "Fabblestabble", "Fapplestamp", "Fiddlefen", "Folkor", "Garrick", "Gimlen", "Glittergern", "Gobblefirn", "Gummen", "Horcusporcus", "Humplebumple", "Ironhide", "Leffery", "Lingenhall", "Loofollue", "Maekkelferce", "Miggledy", "Munggen", "Murnig", "Musgraben", "Nackle", "Ningel", "Nopenstallen", "Nucklestamp", "Offund", "Oomtrowl", "Pilwicken", "Pingun", "Quillsharpener", "Raulnor", "Reese", "Rofierton", "Scheppen", "Shadowcloak", "Silverthread", "Sympony", "Tarkelby", "Timbers", "Turen", "Umbodoben", "Waggletop", "Welber", "Wildwander");

	var LgNom = new Array ("Noms gnomes masculins", "Gnome Male Names");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var pre = Math.floor(Math.random() * (GNOpreM.length-1));
		var nom = Math.floor(Math.random() * (GNOnom.length-1));
		Return = Return	+ GNOpreM[pre] + " " + GNOnom[nom] + "<br />";
	}

	var LgNom = new Array ("Noms gnomes féminins", "Gnome Female Names");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var pre = Math.floor(Math.random() * (GNOpreF.length-1));
		var nom = Math.floor(Math.random() * (GNOnom.length-1));
		Return = Return	+ GNOpreF[pre] + " " + GNOnom[nom] + "<br />";
	}
	Return = Return + "</h2>";

	$("#result").html("<div class='result'>"+Return+"</div>");
}

function genNomDRA(l)
{
	var DRAclan = new Array ("Akambherylliax", "Argenthrixus", "Baharoosh", "Beryntolthropal", "Bhenkumbyrznaax", "Caavylteradyn", "Chumbyxirinnish", "Clethtinthiallor", "Daardendrian", "Delmirev", "Dhyrktelonis", "Ebynichtomonis", "Esstyrlynn", "Fharngnarthnost", "Ghaallixirn", "Grrrmmballhyst", "Gygazzylyshrift", "Hashphronyxadyn", "Hshhsstoroth", "Imbixtellrhyst", "Jerynomonis", "Jharthraxyn", "Kerrhylon", "Kimbatuul", "Lhamboldennish", "Linxakasendalor", "Mohradyllion", "Mystan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Orexijandilin", "Pfaphnyrennish", "Phrahdrandon", "Pyraxtallinost", "Qyxpahrgh", "Raghthroknaar", "Shestendeliath", "Skaarzborroosh", "Sumnarghthrysh", "Tiammanthyilish", "Turnuroth", "Umbyrphrael", "Vangdondalor", "Verthisathurgiesh", "Wiwyrholdalphiax", "Wystongjiir", "Xephyrbahnor", "Yarjerit", "Zzzxaaxthroth", "Verthisathurgiesh", "Kepeshkmolik", "Shestandeliath", "Ophinshtalajiir", "Yrjixtilex", "Fenkenkabradon", "Churirajachi", "Daardendrien", "Kanjentellequor", "Linxakasendalor", "Prexijandilin");
	var DRAnomM = new Array ("Adrex", "Arjhan", "Azzakh", "Balasar", "Baradad", "Bharash", "Bidreked", "Dadalan", "Dazzazn", "Direcris", "Donaar", "Fax", "Gargax", "Ghesh", "Gorbundus", "Greethen", "Heskan", "Hirrathak", "Ildrex", "Kaladan", "Kerkad", "Kiirith", "Kriv", "Maagog", "Medrash", "Mehen", "Mozikth", "Mreksh", "Mugrunden", "Nadarr", "Nithther", "Norkruuth", "Nykkan", "Pandjed", "Patrin", "Pijjirik", "Quarethon", "Rathkran", "Rhogar", "Rivaan", "Sethrekar", "Shamash", "Shedinn", "Srorthen", "Tarhun", "Torinn", "Trynnicus", "Valorean", "Vrondiss", "Zedaar");
	var DRAnomF = new Array ("Akra", "Aasathra", "Antrara", "Arava", "Biri", "Blendaeth", "Burana", "Chassath", "Daar", "Dentratha", "Doudra", "Driindar", "Eggren", "Farideh", "Findex", "Furrele", "Gesrethe", "Gilkass", "Harann", "Havilar", "Hethress", "Hillanot", "Jaxi", "Jezean", "Jheri", "Kadana", "Kava", "Korinn", "Megren", "Mijira", "Mishann", "Nala", "Nuthra", "Perra", "Pogranix", "Pyxrin", "Quespa", "Raiann", "Rezena", "Ruloth", "Saphara", "Savaran", "Sora", "Surina", "Synthrin", "Tatyan", "Thava", "Uadjit", "Vezera", "Zykroff");

	var LgNom = new Array ("Noms drakéides masculins (clan puis nom)", "Dragonborn Male Names (clan then name)");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var clan = Math.floor(Math.random() * (DRAclan.length-1));
		var nom = Math.floor(Math.random() * (DRAnomM.length-1));
		Return = Return	+ DRAclan[clan] + " " + DRAnomM[nom] + "<br />";
	}

	var LgNom = new Array ("Noms drakéides féminins (clan puis nom)", "Dragonborn Female Names (clan then name)");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var clan = Math.floor(Math.random() * (DRAclan.length-1));
		var nom = Math.floor(Math.random() * (DRAnomF.length-1));
		Return = Return	+ DRAclan[clan] + " " + DRAnomF[nom] + "<br />";
	}
	Return = Return + "</h2>";

	$("#result").html("<div class='result'>"+Return+"</div>");
}

function genNomORC(l)
{
	var ORCnomM = new Array ("Argran", "Braak", "Brug", "Cagak", "Dench", "Dorn", "Dren", "Druuk", "Feng", "Gell", "Gnarsh", "Grumbar", "Gubrash", "Hagren", "Henk", "Hogar", "Holg", "Imsh", "Karash", "Karg", "Keth", "Korag", "Krusk", "Lubash", "Megged", "Mhurren", "Mord", "Nil", "Nybarg", "Odorr", "Ohr", "Rendar", "Resh", "Ront", "Rrath", "Sark", "Scrag", "Sheggen", "Shump", "Tanglar", "Tarak", "Thar", "Thokk", "Trag", "Ugarth", "Varg", "Vilberg", "Yurk", "Zed");
	var ORCnomF = new Array ("Arah", "Baggi", "Bendoo", "Bilga", "Brakka", "Creega", "Drenna", "Ekk", "Emen", "Engong", "Fistula", "Gaaki", "Gorga", "Grai", "Greeba", "Grigi", "Gynk", "Hrathy", "Huru", "Ilga", "Kabbarg", "Kansif", "Lagazi", "Lezre", "Murgen", "Murook", "Myev", "Nagrette", "Neega", "Nella", "Nogu", "Oolah", "Ootah", "Ovak", "Ownka", "Puyet", "Reeza", "Shautha", "Silgre", "Sutha", "Tagga", "Tawar", "Tomph", "Ubada", "Vanchu", "Vola", "Volen", "Vorka", "Yevelda", "Zagga");

	var LgNom = new Array ("Noms demi-orcs masculins", "Half-Orc Male Names");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var nom = Math.floor(Math.random() * (ORCnomM.length-1));
		Return = Return	+ ORCnomM[nom] + "<br />";
	}

	var LgNom = new Array ("Noms demi-orcs féminins", "Half-Orc Female Names");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var nom = Math.floor(Math.random() * (ORCnomF.length-1));
		Return = Return	+ ORCnomF[nom] + "<br />";
	}
	Return = Return + "</h2>";

	$("#result").html("<div class='result'>"+Return+"</div>");
}

function genNomTIE(l)
{
	var TIEnomM   = new Array ("Abad", "Ahrim", "Akmen", "Amnon", "Andram", "Astar", "Balam", "Barakas", "Bathin", "Caim", "Chem", "Cimer", "Cressel", "Damakos", "Ekemon", "Euron", "Fenriz", "Forcas", "Habor", "Iados", "Kairon", "Leucis", "Mamnen", "Mantus", "Marbas", "Melech", "Merihim", "Modean", "Mordai", "Mormo", "Morthos", "Nicor", "Nirgel", "Oriax", "Paymon", "Pelaios", "Purson", "Qemuel", "Raam", "Rimmon", "Sammal", "Skamos", "Tethren", "Thamuz", "Therai", "Valafar", "Vassago", "Xappan", "Zepar", "Zephan");
	var TIEnomF   = new Array ("Akta", "Anakis", "Armara", "Astaro", "Aym", "Azza", "Beleth", "Bryseis", "Bune", "Criella", "Damaia", "Decarabia", "Ea", "Gadreel", "Gomory", "Hecat", "Ishte", "Jezebeth", "Kali", "Kallista", "Kasdeya", "Lerissa", "Lilith", "Makaria", "Manea", "Markosian", "Masterna", "Naamah", "Nemeia", "Nija", "Orianna", "Osah", "Phelaia", "Prosperine", "Purah", "Pyra", "Rieta", "Ronobe", "Ronwe", "Seddit", "Seere", "Sekhmet", "Semyaza", "Shava", "Shax", "Sorath", "Uzza", "Vapula", "Vepar", "Verin");
	if (l==0) var TIEvertue = new Array ("Ambition", "Art", "Charogne", "Chant", "Credo", "Mort", "Débauche", "Désespoir", "Destin", "Doute", "Terreur", "Extase", "Ennui", "Entropie", "Excellence", "Peur", "Gloire", "Gourmandise", "Chagrin", "Haine", "Espoir", "Horreur", "Idéal", "Ignominie", "Rire", "Amour", "Luxure", "Grabuge", "Moquerie", "Meutre", "Muse", "Musique", "Mystère", "Null-part", "Ouverture", "Douleur", "Passion", "Poésie", "Quête", "Hasard", "Révérence", "Dégoût", "Chagrin", "Témérité", "Tourment", "Tragédie", "Vice", "Vertu", "Lassitude", "Esprit");
	else      var TIEvertue = new Array ("Ambition", "Art", "Carrion", "Chant", "Creed", "Death", "Debauchery", "Despair", "Doom", "Doubt", "Dread", "Ecstasy", "Ennui", "Entropy", "Excellence", "Fear", "Glory", "Gluttony", "Grief", "Hate", "Hope", "Horror", "Ideal", "Ignominy", "Laughter", "Love", "Lust", "Mayhem", "Mockery", "Murder", "Muse", "Music", "Mystery", "Nowhere", "Open", "Pain", "Passion", "Poetry", "Quest", "Random", "Reverence", "Revulsion", "Sorrow", "Temerity", "Torment", "Tragedy", "Vice", "Virtue", "Weary", "Wit");

	var LgNom = new Array ("Noms tieffelins masculins", "Tiefling Male Names");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var nom = Math.floor(Math.random() * (TIEnomM.length-1));
		Return = Return	+ TIEnomM[nom] + "<br />";
	}

	var LgNom = new Array ("Noms tieffelins féminins", "Tiefling Female Names");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var nom = Math.floor(Math.random() * (TIEnomF.length-1));
		Return = Return	+ TIEnomF[nom] + "<br />";
	}

	var LgNom = new Array ("Noms tieffelins de « vertu »", "Tiefling Vertue Names");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var nom = Math.floor(Math.random() * (TIEvertue.length-1));
		Return = Return	+ TIEvertue[nom] + "<br />";
	}
	Return = Return + "</h2>";

	$("#result").html("<div class='result'>"+Return+"</div>");
}

function genNomHUM(l)
{
	var HUMnomM = new Array ("Abel", "Adhémar", "Alaric", "Aldéric", "Alexis", "Alrik", "Alvaro", "Alzieu", "Amaury", "Ancelin", "Anselme", "Arno", "Arthur", "Augustin", "Aymeric", "Baudouin", "Bram", "Célestin", "Clovis", "Colin", "Conan", "Conrad", "Dambert", "Diego", "Edgar", "Edwin", "Elias", "Elzéar", "Enguerrand", "Éon", "Ernold", "Elias", "Esteban", "Eudes", "Eudore", "Fabio", "Félix", "Flavien", "Fulbert", "Gamelin", "Gaspard", "Gaubert", "Gaucelin", "Gauthier", "Gauvin", "Ghislain", "Gil", "Guilhem", "Gondolphe", "Gontran", "Gordon", "Grimoard", "Gunter", "Henry", "Herbert", "Herulf", "Hildebert", "Horace", "Hugo", "Hugon", "Hugues", "Isaac", "Isarn", "Isengrim", "Jacquemin", "Jos", "Juhel", "Lancelin", "Léo", "Lothar", "Loup", "Marcus", "Martin", "Maurin", "Milon", "Mordred", "Nils", "Olaf", "Olrik", "Othon", "Paco", "Pelfort", "Pépin", "Pons", "Quentin", "Ranulf", "Robin", "Roland", "Rolf", "Romeu", "Ruben", "Sigebert", "Siegfried", "Simon", "Thibaut", "Tristan", "Ulf", "Ulric", "Willibert", "Wulgrin");
    var HUMnomF = new Array ("Adélaïde", "Adèle", "Aélis", "Agathe", "Agnès", "Alice", "Aliénor", "Aliette", "Alix", "Anne", "Apolline", "Ariane", "Aude", "Aurèle", "Aurore", "Béatrix", "Bélissende", "Berthe", "Blanche", "Clémence", "Clothilde", "Constance", "Éléonore", "Emma", "Fiona", "Flore", "Gisela", "Guillemette", "Gysla", "Héloïse", "Hermine", "Hildegarde", "Huguette", "Ida", "Isolde", "Justine", "Lucie", "Mahaut", "Mathilde", "Mélissande", "Morgan", "Odeline", "Odile", "Olga", "Sara", "Sophia", "Tiphaine", "Ysabelle", "Yolande", "Zoé");
	var LgNom = new Array ("Noms humains masculins", "Human Male Names");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var nom = Math.floor(Math.random() * (HUMnomM.length-1));
		Return = Return	+ HUMnomM[nom] + "<br />";
	}

	var LgNom = new Array ("Noms humains féminins", "Human Female Names");
	Return = Return + "</h2><br /><p>" + LgNom[l] + "</p><h2>";
	for (i=0; i<NUM; i++)
	{
		var nom = Math.floor(Math.random() * (HUMnomF.length-1));
		Return = Return	+ HUMnomF[nom] + "<br />";
	}
	Return = Return + "</h2>";

	$("#result").html("<div class='result'>"+Return+"</div>");
}

function genNomTAV(l)
{
	if (l==0) var TAVtyp = new Array ("taverne calme et discrète", "taverne calme et discrète", "taverne calme et discrète", "taverne calme et discrète", "taverne calme et discrète", "taverne bruyante", "taverne bruyante", "taverne bruyante", "taverne bruyante", "repaire d'une guilde de voleurs", "lieu de rassemblement d'une société secrète", "taverne huppée", "taverne très huppée", "tripot de jeux", "tripot de jeux", "fréquentée principalement par une race spécifique", "fréquentée par une guilde spécifique", "club privé", "bordel", "bordel");
	else      var TAVtyp = new Array ("Quiet, low-key bar", "Quiet, low-key bar", "Quiet, low-key bar", "Quiet, low-key bar", "Quiet, low-key bar", "Raucous dive", "Raucous dive", "Raucous dive", "Raucous dive", "Thieves' guild hangout", "Gathering place for a secret society", "Upper-class dining club",	"Upper-class dining club",	"Gambling den", "Gambling den", "Caters to specific race", "Caters to specific guild", "Members-only club", "Brothel", "Brothel");

	if (l==0) var TAVnom = [ {"nom":"L'anguille",	"g":"f"},
				{"nom":"La truite",		"g":"f"},
				{"nom":"Le nain", 		"g":"m"},
				{"nom":"Le pégase", 	"g":"m"},
				{"nom":"Le poney", 		"g":"m"},
				{"nom":"La rose", 		"g":"f"},
				{"nom":"Le cerf", 		"g":"m"},
				{"nom":"Le loup", 		"g":"m"},
				{"nom":"L'agneau", 		"g":"m"},
				{"nom":"Le démon", 		"g":"m"},
				{"nom":"La chèvre", 	"g":"f"},
				{"nom":"L'esprit", 		"g":"m"},
				{"nom":"La horde", 		"g":"f"},
				{"nom":"Le bouffon", 	"g":"m"},
				{"nom":"La montagne", 	"g":"f"},
				{"nom":"L'aigle", 		"g":"m"},
				{"nom":"Le satyre", 	"g":"m"},
				{"nom":"Le chien", 		"g":"m"},
				{"nom":"L'araignée", 	"g":"f"},
				{"nom":"L'étoile", 		"g":"f"},

				{"nom":"L'ours", 		"g":"m"},
				{"nom":"Le cheval", 	"g":"m"},
				{"nom":"Le taureau", 	"g":"m"},
				{"nom":"Le chat", 		"g":"m"},
				{"nom":"Le renard", 	"g":"m"},
				{"nom":"La forêt", 		"g":"f"},
				{"nom":"Le diable", 	"g":"m"},
				{"nom":"La colline", 	"g":"f"},
				{"nom":"La rivière", 	"g":"f"},
				{"nom":"Le gobelin", 	"g":"m"},
				{"nom":"Le lapin", 		"g":"m"}];

	if (l==0) var TAVadj = [ {"m":"d'argent", 	"f":"d'argent"},
				{"m":"d'or", 		"f":"d'or"},
				{"m":"titubant", 	"f":"titubante"},
				{"m":"riant", 		"f":"riante"},
				{"m":"cabré", 		"f":"cabrée"},
				{"m":"doré", 		"f":"dorée"},
				{"m":"courant", 	"f":"courante"},
				{"m":"hurlant", 	"f":"hurlante"},
				{"m":"mort", 		"f":"morte"},
				{"m":"qui louche", 	"f":"qui louche"},
				{"m":"ivre", 		"f":"ivre"},
				{"m":"bondissant", 	"f":"bondissante"},
				{"m":"rugissant", 	"f":"rugissante"},
				{"m":"triste", 		"f":"triste"},
				{"m":"solitaire", 	"f":"solitaire"},
				{"m":"errant", 		"f":"errante"},
				{"m":"mystérieux",	"f":"mystérieuse"},
				{"m":"aboyant", 	"f":"aboyante"},
				{"m":"noir", 		"f":"noire"},
				{"m":"étincelant",	"f":"étincelante"},

				{"m":"blanc", 		"f":"blanche"},
				{"m":"d'argent", 	"f":"d'argent"},
				{"m":"sauvage", 	"f":"sauvage"},
				{"m":"qui boite", 	"f":"qui boite"},
				{"m":"joyeux", 		"f":"joyeuse"},
				{"m":"qui dort", 	"f":"qui dort"},
				{"m":"qui pleure",	"f":"qui pleure"},
				{"m":"gourmand", 	"f":"gourmande"},
				{"m":"accueillant",	"f":"accueillante"},
				{"m":"scintillant",	"f":"scintillante"},
				{"m":"rouge", 		"f":"rouge"},
				{"m":"farçeur", 	"f":"farceuse"},
				{"m":"sautillant",	"f":"sautillante"}];

	if (l==1) var TAVnom = [ {"nom":"Eel",		"g":"f"},
				{"nom":"Trout",		"g":"f"},
				{"nom":"Dwarf", 	"g":"m"},
				{"nom":"Pagasus", 	"g":"m"},
				{"nom":"Pony", 		"g":"m"},
				{"nom":"Rose", 		"g":"f"},
				{"nom":"Stag", 		"g":"m"},
				{"nom":"Wolf", 		"g":"m"},
				{"nom":"Lamb", 		"g":"m"},
				{"nom":"Demon", 	"g":"m"},
				{"nom":"Goat", 		"g":"f"},
				{"nom":"Spirit", 	"g":"m"},
				{"nom":"Horde", 	"g":"f"},
				{"nom":"Jester", 	"g":"m"},
				{"nom":"Mountain", 	"g":"f"},
				{"nom":"Eagle", 	"g":"m"},
				{"nom":"Satyr", 	"g":"m"},
				{"nom":"Dog", 		"g":"m"},
				{"nom":"Spider", 	"g":"f"},
				{"nom":"Star", 		"g":"f"},

				{"nom":"Bear", 		"g":"m"},
				{"nom":"Horse", 	"g":"m"},
				{"nom":"Bull", 		"g":"m"},
				{"nom":"Cat", 		"g":"m"},
				{"nom":"Fox", 		"g":"m"},
				{"nom":"Forest", 	"g":"f"},
				{"nom":"Devil", 	"g":"m"},
				{"nom":"Hill", 		"g":"f"},
				{"nom":"River", 	"g":"f"},
				{"nom":"Goblin", 	"g":"m"},
				{"nom":"Rabbit", 	"g":"m"}];

	if (l==1) var TAVadj = [ {"m":"The Silver", 		"f":"The Silver"},
				{"m":"The Golden", 		"f":"The Golden"},
				{"m":"The Staggering", 	"f":"The Staggering"},
				{"m":"The Laughing", 	"f":"The Laughing"},
				{"m":"The Prancing", 	"f":"The Prancing"},
				{"m":"The Gilded", 		"f":"The Gilded"},
				{"m":"The Running", 	"f":"The Running"},
				{"m":"The Howling", 	"f":"The Howling"},
				{"m":"The Slaughtered",	"f":"The Slaughtered"},
				{"m":"The Leering", 	"f":"The Leering"},
				{"m":"The Drunken", 	"f":"The Drunken"},
				{"m":"The Leaping", 	"f":"The Leaping"},
				{"m":"The Roaring", 	"f":"The Roaring"},
				{"m":"The Frowning", 	"f":"The Frowning"},
				{"m":"The Lonely", 		"f":"The Lonely"},
				{"m":"The Wandering", 	"f":"The Wandering"},
				{"m":"The Mysterious", 	"f":"The Mysterious"},
				{"m":"The Barking", 	"f":"The Barking"},
				{"m":"The Black", 		"f":"The Black"},
				{"m":"The Gleaming", 	"f":"The Gleaming"},

				{"m":"The White", 		"f":"The White"},
				{"m":"The Silvered", 	"f":"The Silvered"},
				{"m":"The Wild",	 	"f":"The Wild"},
				{"m":"The Limping", 	"f":"The Limping"},
				{"m":"The Happy", 		"f":"The Happy"},
				{"m":"The Sleeping", 	"f":"The Sleeping"},
				{"m":"The Crying", 		"f":"The Crying"},
				{"m":"The Greedy", 		"f":"The Greedy"},
				{"m":"The Friendly",	"f":"The Friendly"},
				{"m":"The Glittering",	"f":"The Glittering"},
				{"m":"The Red", 		"f":"The Red"},
				{"m":"The Jester", 		"f":"The Jester"},
				{"m":"The Hopping",		"f":"The Hopping"}];

	var LgNom = new Array ("Noms de taverne", "Names of Taverns");
	var Return = "<p>" + LgNom[l] +"</p><h2>";
	for (var i=0; i<NUM; i++)
	{
		var rnd = Math.floor(Math.random() * (TAVnom.length-1));
		var nom = TAVnom[rnd]['nom'];
		var gen = TAVnom[rnd]['g'];
		if (gen == "m")
			var adj = TAVadj[rnd]['m'];
		else
			var adj = TAVadj[rnd]['f'];
		var typ = TAVtyp[Math.floor(Math.random() * (TAVtyp.length-1))];

		if (l==0)
			Return = Return + "<h2>" + nom + " " + adj + "</h2> (" + typ + ")<br />";
		else
			Return = Return + "<h2>" + adj + " " + nom + "</h2> (" + typ + ")<br />";
	}

	$("#result").html("<div class='result'>"+Return+"</div>");
}

/* ---------------------- */

function transcripteur()
{
	$.ajax({
		url : 'alphabets.php',
   		type : 'POST',
		data : 't=' + $('#texte').val() + '&l=' + $('#langue').val(),
   		dataType : 'html', // On désire recevoir du HTML
   		success : function(responseText, statut)
		{ 
			$('#output').html(responseText);
		}
	});
}