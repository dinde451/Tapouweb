var imageW = 1676, imageH = 1062;
var image = "baldur-1676-1062.jpg", imageMob = "baldur-1676-1062.jpg", mini = "smallB.jpg";
var lineFocus = 5; var dotWidth = 6, dotTrait = 2, zoomMax=2.15, zoomCelMax=1;
var carte = "B", factorDist = 120;
var bilang = 0; 
var auteur ="<a href='https://mikeschley.com/'>Mike Schley</a>";
/* 600 px = 5000 ft -> 120 px = 1000 ft */

var zones = [
	{  	name: "Upper City",
		txt: "<p>The Upper City, home to the patriar aristocracy of Baldur's Gate, is a place of beauty and splendor.</p>",
		couleur: "#EE8080",
        path:"M 122.4,547.7 188.8,345.4 165.7,296.2 321,150.6 470.2,187.2 458.3,212.6 455.3,236.5 455.3,247.6 447.1,255.9 424,261.8 408.3,272.3 380.7,293.9 353.8,319.3 340.4,336.5 329.9,364.8 321.7,388.7 302.3,404.4 280.7,420.8 261.2,445.5 254.5,465.6 247.1,489.5 248.6,515.6 C 248.6,515.6 230.6,523.8 226.2,523.8 221.7,523.8 196.3,538.8 196.3,538.8 Z"
	},
	{  	name: "Lower City",
		txt: "<p>The Lower City is a chaotic tangle of conjoined, slate-roofed buildings.</p>",
		couleur: "#AA0C0C",
        path:"M 470.2,187.2 458.3,212.6 455.3,236.5 455.3,247.6 447.1,255.9 424,261.8 408.3,272.3 380.7,293.9 353.8,319.3 340.4,336.5 329.9,364.8 321.7,388.7 302.3,404.4 280.7,420.8 261.2,445.5 254.5,465.6 247.1,489.5 248.6,515.6 C 248.6,515.6 230.6,523.8 226.2,523.8 221.7,523.8 196.3,538.8 196.3,538.8 L 122.4,547.7 178.4,607.4 223.9,653.7 228,677.6 268.7,673.1 279.9,668.6 295.6,665.6 303,653 316.5,645.5 326.2,633.6 330.7,616.4 335.9,605.9 341.1,591.8 326.9,567.9 326.9,558.9 315,546.2 309.8,531.3 309.8,508.2 295.6,480.5 313.9,455.5 329.9,440.2 356.8,420.1 402.3,447.7 407.5,448.4 411.3,432.8 413.4,416.4 421.3,420 422.4,411.5 372.5,402.5 372.1,390.2 377.3,387.2 424.7,394.7 426.2,388.7 421.7,388 425.5,378.3 400.5,355.2 397.8,349.5 403.5,342.1 410.1,342 430.7,360.4 444.1,361.1 C 444.1,361.1 447.9,352.9 450.8,351.4 453.8,349.9 457.6,344.6 457.6,344.6 L 458,304 470.2,297.7 514.3,361.1 475.5,385 471,377.5 456.8,387.2 450.1,425.3 471.7,429.8 497.1,414.8 497.9,401.4 526.2,381.3 560.6,402.2 564.3,432.8 545.7,442.8 550.1,455.2 605.4,461.1 615.8,478.3 619.5,476.8 630,494 634.5,494 649.8,515.3 659.1,520.8 680.7,529.8 681.8,526.9 687.5,527 694.6,533.9 702.4,537.3 708.4,534.3 721,539.5 733,549.2 736,558.9 725.5,567.1 722.5,577.6 C 722.5,577.6 721,584.3 724,582.8 727,581.3 762.1,563 762.1,563 L 777.4,411.9 619.5,224.5 Z"
	},
];

var groupe = [											
{ name:"GROUP", color:"#58ACFA", x:0, y:0, txt:"City buildings"},
{ name:"High Hall", color:"#58ACFA", x:254, y:305, txt:"<p>The center of almost all governmental activity in Baldur's Gate.</p>"},
{ name:"Seatower of Balduran", color:"#58ACFA", x:389, y:553, txt:"<p>Headquarters of the Flaming Fist.</p>"},
{ name:"Watch Citadel", color:"#58ACFA", x:169, y:296, txt:"<p>The Upper City's guard force uses the Watch Citadel as training grounds, barracks, and organizational offices.</p>"},
{ name:"Wyrm's Rock", color:"#58ACFA", x:1483, y:718, txt:"<p>First checkpoint at which Baldur's Gate taxes northbound travelers.</p>"},
{ name:"Sea Gate", color:"#58ACFA", x:198, y:534, txt:"<p></p>"},
{ name:"Manor Gate", color:"#58ACFA", x:259, y:449, txt:"<p></p>"},
{ name:"Gond Gate", color:"#58ACFA", x:322, y:383, txt:"<p></p>"},
{ name:"Citadel Gate", color:"#58ACFA", x:201, y:314, txt:"<p></p>"},
{ name:"Baldur's Gate", color:"#58ACFA", x:355, y:317, txt:"<p>The oldest and least impressive of the city's gates.</p>"},
{ name:"Heap Gate", color:"#58ACFA", x:455, y:229, txt:"<p></p>"},
{ name:"Basilisk Gate", color:"#58ACFA", x:698, y:317, txt:"<p>This gate connects the Lower City to the great Coast Way.</p>"},
{ name:"Cliffgate", color:"#58ACFA", x:770, y:485, txt:"<p>This minor gate grants access to the Tumbledown neighborhood and its graveyards.</p>"},
{ name:"Black Dragon Gate", color:"#58ACFA", x:259, y:208, txt:"<p></p>"},

{ name:"GROUP", color:"#FFFF00", x:0, y:0, txt:"Temples"},
{ name:"Church of Last Hope", color:"#FFFF00", x:1470, y:553, txt:"<p></p>"},
{ name:"Hall of Wonders", color:"#FFFF00", x:314, y:341, txt:"<p>This large, stately building serves as a quasi-religious museum for the magnificent inventions wrought in Gond's name.</p>"},
{ name:"High House of Wonders", color:"#FFFF00", x:290, y:354, txt:"<p>This vast workshop is the center of Gond's religion in Baldur's Gate.</p>"},
{ name:"Lady's Hall", color:"#FFFF00", x:220, y:407, txt:"<p>Tymora's temple in Baldur's Gate.</p>"},
{ name:"Rose Portal", color:"#FFFF00", x:382, y:178, txt:"<p></p>"},
{ name:"Shrine of the Suffering", color:"#FFFF00", x:546, y:238, txt:"<p>Shrine to Ilmater.</p>"},
{ name:"Unrolling Scroll", color:"#FFFF00", x:336, y:291, txt:"<p>Temple of Oghma.</p>"},
{ name:"Watchful Shield", color:"#FFFF00", x:171, y:440, txt:"<p>Helm's shrine in Baldur's Gate.</p>"},
{ name:"Water Queen's House", color:"#FFFF00", x:403, y:436, txt:"<p>The oldest temple in Baldur's Gate. Dedicated to Umberlee.</p>"},

{ name:"GROUP", color:"#FF0000", x:0, y:0, txt:"Inns, Taverns, Festhalls"},
{ name:"Blade and Stars", color:"#FF0000", x:637, y:342, txt:"<p>Inn.</p>"},
{ name:"Blushing Mermaid", color:"#FF0000", x:486, y:265, txt:"<p>Tavern and inn.</p>"},
{ name:"Elfsong Tavern", color:"#FF0000", x:609, y:343, txt:"<p>This tavern is one of the most popular in Baldur's Gate.</p>"},
{ name:"Helm and Cloak", color:"#FF0000", x:264, y:338, txt:"<p></p>"},
{ name:"Jopalin's", color:"#FF0000", x:537, y:369, txt:"<p>Teahouse.</p>"},
{ name:"The Low Lantern", color:"#FF0000", x:605, y:467, txt:"<p>Notorious festhall and tavern.</p>"},
{ name:"Oasis Theater", color:"#FF0000", x:940, y:113, txt:"<p></p>"},
{ name:"The Smilin' Boar", color:"#FF0000", x:289, y:438, txt:"<p></p>"},
{ name:"The Splurging Sturgeon", color:"#FF0000", x:523, y:287, txt:"<p></p>"},
{ name:"Three Old Kegs", color:"#FF0000", x:274, y:255, txt:"<p></p>"},
{ name:"Whitkeep Hostel", color:"#FF0000", x:1172, y:196, txt:"<p></p>"},

{ name:"GROUP", color:"#FF00FF", x:0, y:0, txt:"Businesses"},
{ name:"Baldur's Mouth", color:"#FF00FF", x:508, y:327, txt:"<p>Baldur's Mouth is the city's primary news service and gossip rag.</p>"},
{ name:"Bathhouse", color:"#FF00FF", x:490, y:228, txt:"<p></p>"},
{ name:"Candulhallow's Funeral Arrangements", color:"#FF00FF", x:657, y:286, txt:"<p></p>"},
{ name:"Counting House", color:"#FF00FF", x:415, y:387, txt:"<p>Center of trade.</p>"},
{ name:"Danthelon's Dancing Axe", color:"#FF00FF", x:1468, y:671, txt:"<p>This shop sells everything an adventurer might need.</p>"},
{ name:"Felogyr's Fireworks", color:"#FF00FF", x:445, y:260, txt:"<p></p>"},
{ name:"Garmult's House of Mastery", color:"#FF00FF", x:653, y:433, txt:"<p>Martial arts training school and a social club.</p>"},
{ name:"Hamhocks Slaughterhouse", color:"#FF00FF", x:1374, y:322, txt:"<p></p>"},
{ name:"Harbreeze Bakery", color:"#FF00FF", x:370, y:187, txt:"<p></p>"},
{ name:"Hissing Stones", color:"#FF00FF", x:185, y:583, txt:"<p>Bathhouse.</p>"},
{ name:"Sorcerous Sundries", color:"#FF00FF", x:601, y:262, txt:"<p></p>"},
{ name:"Garynmor Stabbles and Menagerie", color:"#FF00FF", x:780, y:282, txt:"<p></p>"},
{ name:"Garynmor Stables", color:"#FF00FF", x:72, y:132, txt:"<p></p>"},
{ name:"AmberDune Books", color:"#FF00FF", x:419, y:240, txt:"<p>Book shop stall in the wide.</p>"},

{ name:"GROUP", color:"#AAAAAA", x:0, y:0, txt:"Miscellaneous"},
{ name:"Hhune House", color:"#AAAAAA", x:202, y:482, txt:"<p></p>"},
{ name:"Bormul House", color:"#AAAAAA", x:223, y:459, txt:"<p></p>"},
{ name:"Eomane House", color:"#AAAAAA", x:240, y:421, txt:"<p></p>"},
{ name:"Rillyn House", color:"#AAAAAA", x:180, y:404, txt:"<p></p>"},
{ name:"Vanthampur Villa", color:"#AAAAAA", x:253, y:334, txt:"<p></p>"},
{ name:"Mandorcai's Mansion", color:"#AAAAAA", x:264, y:512, txt:"<p></p>"},
{ name:"Ramazith's Tower", color:"#AAAAAA", x:298, y:246, txt:"<p></p>"},
{ name:"Sewer Keep", color:"#AAAAAA", x:241, y:667, txt:"<p></p>"},
{ name:"Seskergates", color:"#AAAAAA", x:276, y:487, txt:"<p></p>"},
{ name:"Harborside Hospital", color:"#AAAAAA", x:752, y:469, txt:"<p></p>"},
{ name:"Insight Park", color:"#AAAAAA", x:742, y:551, txt:"<p></p>"},
{ name:"Cliffside Cemetery", color:"#AAAAAA", x:878, y:579, txt:"<p></p>"},
{ name:"Distant Shores", color:"#AAAAAA", x:355, y:197, txt:"<p></p>"},
{ name:"Eastway Expeditions", color:"#AAAAAA", x:654, y:374, txt:"<p></p>"},
{ name:"Silvershield Estate", color:"#AAAAAA", x:139, y:527, txt:"<p></p>"},

{ name:"GROUP", color:"#FFFFFF", x:0, y:0, txt:"Area"},
{ name:"The Wide", color:"#FFFFFF", x:364, y:248, txt:"<p></p>"},
{ name:"Riverveins", color:"#FFFFFF", x:813, y:613, txt:"<p></p>"},
{ name:"Balduran Looks Out to Sea", color:"#FFFFFF", x:903, y:617, txt:"<p></p>"},
{ name:"Rivington", color:"#FFFFFF", x:1558, y:912, txt:"<p>Village of anglers and river-powered mills.</p>"},
{ name:"Wyrm's Crossing", color:"#FFFFFF", x:1462, y:753, txt:"<p></p>"},
{ name:"Twin Songs", color:"#FFFFFF", x:1401, y:603, txt:"<p>Twin Songs is renowned for its enormous diversity of shrines and places of worship.</p>"},
{ name:"Sow's Foot", color:"#FFFFFF", x:1400, y:350, txt:"<p></p>"},
{ name:"Whitekeep", color:"#FFFFFF", x:1114, y:176, txt:"<p></p>"},
{ name:"Little Calimshan", color:"#FFFFFF", x:962, y:131, txt:"<p></p>"},
{ name:"Norchapel", color:"#FFFFFF", x:913, y:162, txt:"<p>The quietest of the Outer City neighborhoods.</p>"},
{ name:"Stoneyeyes", color:"#FFFFFF", x:813, y:231, txt:"<p></p>"},
{ name:"Tumbledown", color:"#FFFFFF", x:882, y:513, txt:"<p></p>"},
{ name:"Blackgate", color:"#FFFFFF", x:215, y:160, txt:"<p></p>"},
{ name:"Dusthawk Hill", color:"#FFFFFF", x:1060, y:310, txt:"<p></p>"},
{ name:"River Chionthar", color:"#FFFFFF", x:757, y:689, txt:"<p></p>"},
{ name:"Trade Way", color:"#FFFFFF", x:64, y:100, txt:"<p>Trade Way to Waterdeep</p>"},
{ name:"Coast Way", color:"#FFFFFF", x:1636, y:959, txt:"<p>Coast Way to Calimshan</p>"},
];