$.get('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=the+weeknd&api_key=70dff5849ea754eb39ce7760f9e87b5d&format=json') //appel de l'url pour renvoyer le JSON
.then(function (data) { // une fois que l'url renvoie le JSON, elle execute ma fonction 
	console.log(data); // récupère les données via une API externe
	$("#image").css({'background-image':'url('+data.artist.image[3]['#text']+')'}); // Affiche l'img en background
	$('#bio').html("<b>Bio:</b>" + '<br/>' + data.artist.bio.content); // écrire sur html la bio de l'artiste
	//$(#'image').pretend('')
	$('#stats').html("<b>Listeners: </b>" + data.artist.stats.listeners + " <b>Playcount: </b>" + data.artist.stats.playcount); // écrire un + ou mettre les strings entre parenthèse pour que cela fonctionne
	$('#name').html(data.artist.similar.artist[1].name);
	$('#img').css({'background-image':'url('+data.artist.similar.artist[1].image[5]['#text']+')'});
	$('#name2').html(data.artist.similar.artist[0].name);
	$('#img2').css({'background-image':'url('+data.artist.similar.artist[0].image[5]['#text']+')'});
	$('#name3').html(data.artist.similar.artist[2].name);
	$('#img3').css({'background-image':'url('+data.artist.similar.artist[2].image[5]['#text']+')'});
});
// API est une interface qui est entre moi et le programme, en gros c'est la partie visibile de l'écran

// si tu remplaces artist.search et cher par artist.getinfo&artist et par the+weeknd tu auras toutes les infos de the weeknd

// $.get('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=the+weeknd&the+weeknd&api_key=70dff5849ea754eb39ce7760f9e87b5d&format=json')
// .then(function (data) {
// 	$('#tracks').html(data.toptracks.track[48].mbid);
// 	console.log(data.toptracks.track[48]);
// });