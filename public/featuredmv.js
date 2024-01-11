//this script is by sadness at https://codepen.io/sadness97/pen/WNXJOPR

// here's where we list the pages. The first item is the URL and the second item is the title.
var webPages = [
        ["https://youtu.be/xv-70a6yXfM?si=39ed4zsEai0j8gSu", "<img title='CLICK TO WATCH: LosT by Bring Me The Horizon' src='decor/lostbmth.jpg'>"],
    
        ["https://youtu.be/L5uV3gmOH9g?si=wZxyeRwC7pbMPEBo", "<img title='CLICK TO WATCH: Teardrops by Bring Me The Horizon' src='decor/teardropsbmth.jpg'>"],
    
        ["https://youtu.be/k3Yk6FrjMkQ?si=yqMLGxzQnfAPTY4Y", "<img title='CLICK TO WATCH: Say So (MTV EMA 2020 performance) by Doja Cat' src='decor/saysomtv.jpg'>"],
    
        ["https://youtu.be/YSCMoI-CSU0?si=Lugq-SprRUjdFsv_", "<img title='CLICK TO WATCH: Can You Feel My Heart (Mothica Version) by Mothica' src='decor/cyfmhmothica.jpg'>"],
    
        ["https://youtu.be/YyacCX-CFUM?si=Wkd1j-O6SRRXMHs7", "<img title='CLICK TO WATCH: Kool-Aid by Bring Me The Horizon' src='decor/koolaidbmth.jpg'>"]
        ]

// this function shuffles the array (reorder the items randomly)
function shuffle(webPages) {
	let currentIndex = webPages.length, randomIndex;

	// while there are items left to shuffle...
	while (currentIndex != 0) {
	// pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);

	// decrease
	currentIndex--;

	// swap with current element
	[webPages[currentIndex], webPages[randomIndex]] = [webPages[randomIndex], webPages[currentIndex]];
	}
	return webPages;
}

function displayLinks(num) {
  shuffle(webPages);
  
  for (let i = 0; i < num; i++) {
    var link = "<a href='" + webPages[i][0] + "' target='_blank'>" + webPages[i][1] + "</a><br>";
    document.getElementById('ftmv').innerHTML += link;
   }
}

/* below is the code that executes our program 
you can change the '5' number to anything 
as long as it's lower than the total number of links in your array. */

/* it is guaranteed to have no duplicates! */ 
document.addEventListener("DOMContentLoaded", function() {
  displayLinks(1);
});