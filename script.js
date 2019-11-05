
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


///////////////////////////////
var btn_lancer = document.querySelector(".btn-lancer");
var images = ["de-1.png","de-2.png","de-3.png","de-4.png","de-5.png","de-6.png"];
var tempScore = 0;

function lance(){
	
	var joueur_actif = document.querySelector(".actif .score-joueur-courent");
	var nbr_alt = Math.floor(Math.random()*6);
	var alt = images[nbr_alt];

	de.setAttribute("src", alt);
	de.style.visibility = "visible";
	nbr_alt++;
	tempScore += nbr_alt;


	if(nbr_alt!=1)
	joueur_actif.innerHTML = tempScore;


	else {
	tempScore = 0;
	joueur1.classList.toggle('actif');
	joueur0.classList.toggle('actif');
	joueur_actif.innerHTML = 0;
	de.style.visibility = "hidden";
	}
}
btn_lancer.addEventListener("click",lance,false);

/////////////////////////////////
