var imageW = 5786, imageH = 4008;
var image = "icewind-dale-5786-4008.jpg", imageMob = "icewind-dale-3210-2224.jpg", mini = "smallI.jpg";
var lineFocus = 11; var dotWidth = 20, dotTrait = 4, zoomMax=1, zoomCelMax=1;
var carte = "I", factorDist = 62.7;
var bilang = 1; 
var auteur ="<a href='https://mikeschley.com/'>Mike Schley</a>";
/* 1254 px = 20 miles -> 38.96 px = 1 mile */

var zones = [
];

var groupe = [ 
{ name0:"GROUP", name1:"GROUP", name2:"GROUP", color:"#FF0000", x:0, y:0, txt0:"Lieux", txt1:"Places", txt2:"Places"},
{ name0:"Bremen", name1:"Bremen", name2:"Bremen", color:"#FF0000", x:1565, y:2050, txt0:"", txt1:"<p>Population 150.</p><p>Leader: Speaker Dorbulgruf Shalescar (dwarf).</p>", txt2:"<p>Bevölkerung: 150.</p><p>Anführer: Sprecher Dorbulgruf Shalescar (Zwerg).</p>", img:"<img src='images/bremen-small.jpg' width='140' height='180' alt='' />"},
{ name0:"Bryn Shander", name1:"Bryn Shander", name2:"Bryn Shander", color:"#FF0000", x:1841, y:2279, txt0:"", txt1:"<p>Population 1200.</p><p>Leader: Speaker Duvessa Shane.</p><p>Biggest city and capital of Ten Towns. Trading center in Icewind Dale.</p>", txt2:"<p>Bevölkerung: 1200.</p><p>Anführerin: Sprecherin Duvessa Shane (Mensch).</p><p>Größte Siedlung der Zehn-Städte. Handelszentrum in Eiswindtal.</p>", img:"<img src='images/bryn-shander-small.jpg' width='180' height='140' alt='' />"},
{ name0:"Caer-Dineval", name1:"Caer-Dineval", name2:"Caer-Dineval", color:"#FF0000", x:2726, y:2068, txt0:"", txt1:"<p>Population 100.</p><p>Leader: Speaker Crannoc Siever.</p>", txt2:"<p>Bevölkerung: 100.</p><p>Anführer: Sprecher Crannoc Siever (Mensch).</p>", img:"<img src='images/caer-dineval-small.jpg' width='140' height='180' alt='' />"},
{ name0:"Caer-Konig", name1:"Caer-Konig", name2:"Caer-Konig", color:"#FF0000", x:2884, y:1850, txt0:"", txt1:"<p>Population 150.</p><p>Leader: Speaker Trovus (dragonborn).</p>", txt2:"<p>Bevölkerung: 150.</p><p>Anführer: Sprecher Trovus (Drachengeborener).</p>", img:"<img src='images/caer-konig-small.jpg' width='140' height='180' alt='' />"},
{ name0:"Dougan's Hole", name1:"Dougan's Hole", name2:"Dougans Loch", color:"#FF0000", x:2007, y:2663, txt0:"", txt1:"<p>Population 50.</p><p>Leader: Speaker Edgra Durmoot.</p>", txt2:"<p>Bevölkerung: 50.</p><p>Anführerin: Sprecherin Edgra Durmoot (Mensch).</p>", img:"<img src='images/dougans-hole-small.jpg' width='140' height='180' alt='' />"},
{ name0:"Easthaven", name1:"Easthaven", name2:"Osthafen", color:"#FF0000", x:2700, y:2399, txt0:"", txt1:"<p>Population 750.</p><p>Leader: Speaker Danneth Waylen.</p>", txt2:"<p>Bevölkerung: 750.</p><p>Anführer: Sprecher Danneth Waylen (Mensch).</p>", img:"<img src='images/easthaven-small.jpg' width='180' height='140' alt='' />"},
{ name0:"Good Mead", name1:"Good Mead", name2:"Gutanger", color:"#FF0000", x:2241, y:2539, txt0:"", txt1:"<p>Population 100.</p><p>Leader: Speaker Kendrick Rielsbarrow.</p>", txt2:"<p>Bevölkerung: 100.</p><p>Anführer: Sprecher Kendrick Rielsbarrow.</p>", img:"<img src='images/good-mead-small.jpg' width='140' height='180' alt='' />"},
{ name0:"Lonelywood", name1:"Lonelywood", name2:"Einsamwald", color:"#FF0000", x:1978, y:1743, txt0:"", txt1:"<p>Population 100.</p><p>Leader: Speaker Nimsy Huddle (halfling).</p>", txt2:"<p>Bevölkerung: 100.</p><p>Anführerin: Sprecherin Nimsy Huddle (Halbling).</p>", img:"<img src='images/lonelywood-small.jpg' width='140' height='180' alt='' />"},
{ name0:"Targos", name1:"Targos", name2:"Targos", color:"#FF0000", x:1653, y:2150, txt0:"", txt1:"<p>Population 1000.</p><p>Leader: Speaker Naerth Maxildanarr.</p>", txt2:"<p>Bevölkerung: 1000.</p><p>Anführer: Sprecher Naerth Maxildanarr.</p>", img:"<img src='images/targos-small.jpg' width='140' height='180' alt='' />"},
{ name0:"Termalaine", name1:"Termalaine", name2:"Termalaine", color:"#FF0000", x:2095, y:1832, txt0:"", txt1:"<p>Population 600.</p><p>Leader: Speaker Oarus Masthew.</p>", txt2:"<p>Bevölkerung: 600.</p><p>Anführer: Sprecher Oarus Masthew (Halb-Ork).</p>", img:"<img src='images/termalaine-small.jpg' width='140' height='180' alt='' />"},
{ name0:"Revel's End", name1:"Revel's End", name2:"Revel's End", color:"#FF0000", x:2145, y:725, txt0:"", txt1:"", txt2:""},
{ name0:"Skytower Shelter", name1:"Skytower Shelter", name2:"Skytower Shelter", color:"#FF0000", x:4481, y:2767, txt0:"", txt1:"", txt2:""},
{ name0:"The Accursed Tower", name1:"The Accursed Tower", name2:"The Accursed Tower", color:"#FF0000", x:1690, y:1730, txt0:"", txt1:"<p>The ruins of a tower on the west bank of Maer Dualdon said to have been occupied by a powerful necromancer involved with the Arcane Brotherhood.</p>", txt2:""},
{ name0:"Jarlmoot", name1:"Jarlmoot", name2:"Jarlmoot", color:"#FF0000", x:599, y:2431, txt0:"", txt0:"", txt1:"<p>Seven empty, ice-glazed thrones form a ring atop a snow-covered hillock. It is said that under the light of a full moon, the apparitions of dead frost giant jarls appear on the thrones.</p>", txt2:""},
{ name0:"Sunblight", name1:"Sunblight", name2:"Sunblight", color:"#FF0000", x:2439, y:3348, txt0:"", txt1:"<p>Sequestered among the crags of the Spine of the World is a grim fortress hewn out of the rock. This fortress is home to Xardorok Sunblight, a mad Duergar warchief. It's a heavily defended gateway between the Underdark and the surface.</p>", txt2:""}, 

{ name0:"GROUP", name1:"GROUP", name2:"GROUP", color:"#FF8000", x:0, y:0, txt0:"Reliefs", txt1:"Mountainous", txt2:"Mountainous"},
{ name0:"Kelvin's Cairn", name1:"Kelvin's Cairn", name2:"Kelvin's Cairn", color:"#FF8000", x:2652, y:1612, txt0:"", txt1:"", txt2:""},
{ name0:"Wyrmdoom Crag", name1:"Wyrmdoom Crag", name2:"Wyrmdoom Crag", color:"#FF8000", x:4974, y:2508, txt0:"", txt1:"<p>The Cavern hold of the Thunlakalaga clan of Goliaths, guided by Ogolai 'Old Goat' Orcsplitter and rivals of the Akannathi Goliaths of Skytower Shelter.</p>", txt2:""},
{ name0:"Reghed Glacier", name1:"Reghed Glacier", name2:"Reghed Glacier", color:"#FF8000", x:5281, y:773, txt0:"", txt1:"<p>A wall of ice reaching hundreds of feet into the sky, the Reghed Glacier has stood since before mortal memory. Its massive form stretches from the base of the Spine of the World into arctic lands few mortal creatures dare trod. Katabatic winds sweep down from the Reghed Glacier into the rest of Icewind Dale, ceaselessly battering anything that dares to grow or breathe.</p><p>Atop the glacier is said to be the home of the great white dragon Arveiaturace, known to Ten-Towners simply as the White Wyrm. Thankfully, she prefers the taste of reindeer, walrus, and polar bear flesh to that of humanoids. Arveiaturace has never threatened Ten-Towns directly, though it wouldn't take much to provoke her into doing so.</p>", txt2:""},

{ name0:"GROUP", name1:"GROUP", name2:"GROUP", color:"#58ACFA", x:0, y:0, txt0:"Eaux", txt1:"Waters", txt2:"Waters"},
{ name0:"Lac Dinneshere", name1:"Lac Dinneshere", name2:"Lac Dinneshere", color:"#58ACFA", x:2860, y:2172, txt0:"", txt1:"", txt2:""},
{ name0:"Maer Dualdon", name1:"Maer Dualdon", name2:"Maer Dualdon", color:"#58ACFA", x:1922, y:1831, txt0:"", txt1:"", txt2:""},
{ name0:"Redwaters", name1:"Redwaters", name2:"Redwaters", color:"#58ACFA", x:2404, y:2628, txt0:"", txt1:"", txt2:""},
];