import { fullscreen, toggleLyricsView } from "./util.js";

function bindWindowControls(){
	document.getElementsByClassName("minimize")[0].onclick = () => window.np.minimize();
	document.getElementsByClassName("close")[0].onclick = () => window.np.close();
	document.getElementsByClassName("fullscreen")[0].onclick = () => fullscreen();

	// Lyrics mode will be hidden if no token is there
	if (window.localStorage.mxmusertoken)
		document.getElementsByClassName("lyrics-btn")[0].onclick = () => toggleLyricsView();
	else
		document.getElementsByClassName("lyrics-btn")[0].style.display = "none";
}

function bindPlaybackControls(){
	document.getElementById("shuffle").onclick = () => window.np.shuffle();
	document.getElementById("previous").onclick = () => window.np.previous();
	document.getElementById("playpause").onclick = () => window.np.playpause();
	document.getElementById("next").onclick = () => window.np.next();
	document.getElementById("repeat").onclick = () => window.np.repeat();
}

bindWindowControls();
bindPlaybackControls();