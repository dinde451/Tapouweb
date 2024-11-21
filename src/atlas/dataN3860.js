var imageW = 1600, imageH = 1128;
var image = "neverwinter-1600-1128.jpg", imageMob = "neverwinter-1600-1128.jpg", mini = "smallN.jpg";
var lineFocus = 5; var dotWidth = 8, dotTrait = 2, zoomMax=2.15, zoomCelMax=1;
var carte = "N", factorDist = 311;
var bilang = 0; 
var auteur = "<a href='https://mikeschley.com/'>Mike Schley</a>";
/* 311 px = 1000 ft */

var zones = [
	{  	name: "Bluelake District",
		txt: "<p>Formely the Blacklake District.</p>",
		couleur: "#EE8080",
        path:"M 254.9,471.8 269.4,452.1 379.8,319.4 488.8,231.3 521.7,209 703,123.6 772.7,126.2 770,135.4 747.7,149.8 729.3,177.4 721.4,197.1 724,202.4 751.6,210.3 767.4,219.5 783.2,249.7 780.6,281.2 763.5,308.8 745.1,325.9 729.3,340.4 724,350.9 728,382.4 728,391.6 713.5,400.8 703,399.5 697.8,408.7 697.8,417.9 707,428.4 703,454.7 712.2,466.5 714.8,481 701.7,503.3 671.5,507.3 633.4,521.7 613.7,537.5 594,557.2 572.9,595.3 548,616.3 516.4,625.5 492.8,629.5 465.2,625.5 453.4,622.9 446.8,609.8 431,601.9 416.6,586.1 424.4,569 419.2,557.2 390.3,541.4 C 390.3,541.4 374.5,532.2 366.6,532.2 358.7,532.2 340.3,529.6 340.3,529.6 L 265.4,490.2 Z"	
	},
	{  	name: "Tower District",
		txt: "<p>Formely the River District.</p>",
		couleur: "#AA0C0C",
        path:"M 772.7,126.2 770,135.4 747.7,149.8 729.3,177.4 721.4,197.1 724,202.4 751.6,210.3 767.4,219.5 783.2,249.7 780.6,281.2 763.5,308.8 745.1,325.9 729.3,340.4 724,350.9 728,382.4 728,391.6 713.5,400.8 703,399.5 697.8,408.7 697.8,417.9 707,428.4 703,454.7 712.2,466.5 714.8,481 701.7,503.3 708.3,504.6 751.6,516.5 789.8,520.4 846.3,538.8 879.1,536.2 908,541.4 934.3,534.9 956.6,530.9 C 956.6,530.9 1014,524.3 1025,524.3 1035,524.3 1060,529.6 1060,529.6 L 1133,541.4 1181,541.4 1243,533.5 1318,532.2 1377,525.7 1407,525.7 1436,527 1477,524.3 1389,302.3 1380,290.4 1251,211.6 1239,205 1080,152.5 1039,143.3 C 1039,143.3 933,127.5 927.7,126.2 922.5,124.9 791.1,126.2 791.1,126.2 Z"	
	},
	{  	name: "Protector's Enclave",
		txt: "<p></p>",
		couleur: "#AA0C0C",
        path:"M 222.1,709.6 C 236.5,703.1 283.8,668.9 283.8,668.9 L 310.1,638.7 339,620.3 353.7,617.2 368,608.4 377.5,609.2 393.3,605.7 403.4,611.1 412.6,633.4 425.1,641.4 429.7,655.8 463.9,667.6 C 463.9,667.6 496.7,672.8 507.2,670.2 517.7,667.6 565.2,657.1 565.2,657.1 L 582.5,642.9 606.5,597.9 630.7,570.3 662,548.2 687.3,548.5 724,544.1 757.9,545.6 801.3,551.9 804.2,586.1 805.5,607.1 830.5,809.5 831.5,940.6 741.1,939.6 739.8,1006 626.8,1004 542.7,980.3 503.3,964.6 369.3,866 247,730.7 Z"	
	},
	{  	name: "New District",
		txt: "<p></p>",
		couleur: "#EE8080",
        path:"M 749,1003 C 749,1003 808.8,1013 812.7,1013 816.7,1013 1011,979.5 1011,979.5 L 1142,982.4 1188,975.5 1268,951 1281,943.2 1347,903 1362,892.2 1415,783.4 1441,725.5 1450,697.1 1459,657.9 1463,630.4 1474,567.7 1463,567.7 1437,567.7 1421,562.8 1389,558.9 1359,562.5 1321,565.7 1277,568.7 C 1277,568.7 1225,573.6 1222,573.6 1218,573.6 1199,571.6 1199,571.6 L 1167,578.5 1125,581.4 1098,574.3 1079,575.5 C 1079,575.5 1050,566.7 1044,566.7 1038,566.7 1017,564.8 1017,564.8 L 991.2,560.8 963.7,557.9 937.3,562.8 894.3,572.7 C 894.3,572.7 884.3,568.7 877.5,568.7 870.6,568.7 852.9,566.7 848,565.7 843.1,564.8 821.6,558.9 821.6,558.9 L 801.3,551.9 804.2,586.1 805.5,607.1 830.5,809.5 831.5,940.6 741.1,939.6 739.8,1002 Z"	
	}
];

var groupe = [											
{ name:"GROUP", color:"#FF0000", x:0, y:0, txt:"Places"},
{ name:"Beached Leviathan", color:"#FF0000", x:295, y:478, txt:"<p>Three-decked tavern that catered to sailors, smugglers, slavers, merchants, and others arriving by sea. Was built in and around the refurbished wreckage of a ship. The innkeeper is a sallow former pirate captain.</p>"},
{ name:"Bluelake", color:"#FF0000", x:655, y:299, txt:"<p></p>"},
{ name:"Board Laid Bare", color:"#FF0000", x:1101, y:176, txt:"<p>This place just inside the city's northeast gate offers dining for very low prices. It serves no beer, wine, or spirits, but fills guests full of fresh fish cooked in cream sauces.</p>"},
{ name:"Castle Never", color:"#FF0000", x:500, y:551, txt:"<p>Castle Never stands as a monument to the city's former glory. Now it's a dangerous ruin, home for banshees and ghosts.</p>"},
{ name:"Chasm", color:"#FF0000", x:1118, y:781, txt:"<p>After the eruption of Mount Hotenow in 1451, much of the southeastern quadrant of the city collapsed into a yawning pit, known as the Chasm, that continually spawned horrors. Neverwinter remained in ruins for decades, but thanks to Lord Neverember's efforts the city was repaired to its former glory and the Chasm has been sealed by powerful magic.</p>"},
{ name:"Cloak Tower", color:"#FF0000", x:1392, y:450, txt:"<p>Meeting place and citadel of the Many-Starred Cloak, a band of wizards.</p>"},
{ name:"Dannar's Mechanical Marvels", color:"#FF0000", x:486, y:318, txt:"<p>This shop sells gnomish and dwarven clockwork wonders.</p>"},
{ name:"Docks", color:"#FF0000", x:315, y:640, txt:"<p>The commercial heart of the city. Supplies and coin flow into Neverwinter through here.</p>"},
{ name:"Dolphin Bridge", color:"#FF0000", x:612, y:566, txt:"<p>Bridge.</p>"},
{ name:"Driftwood Tavern", color:"#FF0000", x:319, y:504, txt:"<p>Prices for room and board in this tavern are high. Home of the Graycloaks faction where they meet to discuss their plans.</p>"},
{ name:"(The) Fallen Tower", color:"#FF0000", x:1187, y:296, txt:"<p>One of the most popular taverns in Neverwinter. Deep cellars beneath the old circular tower. Was run by orcs in the past.</p>"},
{ name:"Fisher's Float", color:"#FF0000", x:90, y:1034, txt:"<p>Home and workplace of fishers who have lived on this earthmote since the Spellplague. Fearless of the weather and the turbulent sea, they provide a great deal of food for the city.</p>"},
{ name:"Graveyard - main", color:"#FF0000", x:777, y:839, txt:"<p>The cruel mistress of the graveyard, called Neverdeath, is the sorceress Valindra Shadowmantle. After the cataclysm, visitors who breach Neverdeath walls came under attack from undead creatures that emerge from the ground.</p>"},
{ name:"Graveyard - pauper's section", color:"#FF0000", x:687, y:929, txt:"<p></p>"},
{ name:"Hall of Justice", color:"#FF0000", x:379, y:667, txt:"<p>Former temple of Tyr, located on a cliff overlooking the Sea of Swords, and one of the few buildings left almost untouched by the pyroclastic flow. Seat of government since Dagult Neverember arrived in the city.</p>"},
{ name:"House of a Thousand Faces", color:"#FF0000", x:684, y:408, txt:"<p>Popular tavern in the Bluelake District. A secret basement serves as command center for the Harpers. The owner is the elf Theryis, an harper.</p>"},
{ name:"House of Knowledge", color:"#FF0000", x:768, y:578, txt:"<p>A temple to Oghma located at one end of the Dolphin Bridge.</p>"},
{ name:"Iron Flagon Inn", color:"#FF0000", x:566, y:897, txt:"<p>Located in the market district, the Iron Flagon Inn is knownn for its Poison Serpent ale, so named for its potency, and a spot for adventurers. The Inn is run by a former adventurer, the beautiful Lyrana Delmont.</p>"},
{ name:"Jaesor's Fineware", color:"#FF0000", x:477, y:290, txt:"<p>Here the Ryndyl family craft and sell painted plates. Many local families and personalities like to have their family arms or personal likenesses painted on their dinnerware.</p>"},
{ name:"Manycoins Moneylending", color:"#FF0000", x:298, y:444, txt:"<p>Moneychanger where you can changes money from coinage to coinage for small fees. Owned and run by professional thieves.</p>"},
{ name:"Maskado's Maps and Legends", color:"#FF0000", x:1068, y:763, txt:"<p>This shop is specialized in maps, records, hints and tales of the North concerned with exploration, treasure, trails, and hidden ways.</p>"},
{ name:"Moonstone Mask", color:"#FF0000", x:187, y:633, txt:"<p>Quiet inn of comfortable quality famous among sailors, it's also one of the most reknowned festhalls (on the upper floor) in Neverwinter. Most of the staff are beautiful anonymous women with moonstone-adorned half-masks. A bridge between the earthmote and the docks allows visitors to enter and exit the Moonstone. The cellars of the Mask conceal a gate, but the destination reached by this magic still remains a mystery.</p>"},
{ name:"(The) Mute Lute", color:"#FF0000", x:465, y:261, txt:"<p>Built around an old oak tree, this house is the home of an half-elven lutemaker.</p>"},
{ name:"Neverwinter River", color:"#FF0000", x:1134, y:561, txt:"<p>The waters are so warm that the harbor never freezes.</p>"},
{ name:"Pirates' Skyhold", color:"#FF0000", x:113, y:97, txt:"<p>Once unassailable harbor for sky pirates in the years following the Spellplague, Pirates' Skyhold has long been abandoned.</p>"},
{ name:"Sacred Park of Sune", color:"#FF0000", x:1289, y:291, txt:"<p>Before the cataclysm, this was one of the most famous shrines to the goddess of love and beauty. Now a ruin.</p>"},
{ name:"Shard of Night", color:"#FF0000", x:998, y:274, txt:"<p>Bleak tower of black stone that rises high into the sky over Neverwinter.</p>"},
{ name:"Shining Knight Arms and Armor", color:"#FF0000", x:746, y:755, txt:"<p>Down the street from the Hall of Knowledge to the southwest, stand  a shop where the best armor can be ordered. Produced speedily thanks to good dwarven contacts and a mage owner who has mastered some spells to reshape metal.</p>"},
{ name:"Shining Serpent Inn", color:"#FF0000", x:877, y:457, txt:"<p>Was the largest and most popular guesthouse in Neverwinter. A clean and safe place to stay.</p>"},
{ name:"Sleeping Dragon Bridge", color:"#FF0000", x:456, y:647, txt:"<p>Bridge.</p>"},
{ name:"Tarmalune Trade House", color:"#FF0000", x:334, y:642, txt:"<p>Large warehouse complex next to the docks. The Tarmalune Trade House is a busy area where contacts gather, deals are made, and adventurers find their services in high demand.</p>"},
{ name:"Wall", color:"#FF0000", x:814, y:691, txt:"<p>The wall that separated the rest of the city from the Chasm and its horrors is now torn down.</p>"},
{ name:"Winged Wyvern Bridge", color:"#FF0000", x:562, y:636, txt:"<p>After the eruption of Mount Hotenow, the city was almost entirely destroyed. Of the three bridges, only the Winged Wyvern remained functional.</p>"}
];