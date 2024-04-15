//javascript theme switcher by squidknees @ neocities.

//list of all theme names in toggling order. edit this line to put your theme names here
const thms = ["default", "light"];

//remove all theme classes
function removeTheme(){
	var b = document.getElementById("body");
	for (let i = 0; i < thms.length; i++){
		b.classList.remove(thms[i]);
	}
}

//run setTheme function on load
setTheme()
//give the body the appropriate theme class
function setTheme(){
	var b = document.getElementById("body");
	if (thms.indexOf(localStorage.theme) == -1){
		localStorage.theme = thm[0];
	}
	removeTheme();
	b.classList.add(localStorage.theme);
}

//switchTheme("themename") changes the theme to themename. when using in html, replace quotation marks with &quot;
function switchTheme(themename){
	var b = document.getElementById("body");
	removeTheme();
	b.classList.add(themename);
	localStorage.theme = themename;
}

//toggle to the next theme in a cycle
function toggleTheme(){
	var currenttheme = thms.indexOf(localStorage.theme);
	if (currenttheme == -1){
		switchTheme(thms[1]);
	}
	else if (currenttheme == thms.length - 1){
		switchTheme(thms[0]);
	}
	else{
		switchTheme(thms[currenttheme + 1]);
	}
}