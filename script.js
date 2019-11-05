
var score_0 = document.getElementById("score-0");
var score_1 = document.getElementById("score-1");
var courent_0 = document.getElementById("courent-0");
var courent_1 = document.getElementById("courent-1");
var joueur0 = document.querySelector(".panel-joueur-0");
var joueur1 = document.querySelector(".panel-joueur-1");
var de = document.querySelector("img");



var init = function()
{
	score_0.innerHTML = 0;
	score_1.innerHTML = 0;
	courent_0.innerHTML = 0;
	courent_1.innerHTML = 0;
	joueur1.classList.remove('actif');
	joueur0.classList.add('actif');
	de.style.visibility = "hidden";
}

document.body.onload = init;
