	//VIDEO PLAYER SCRIPT
	
	let vid, video__pause, video__seek, video__bar, video__time, video__timeTotal, video__mute, video__volume, video__soundBar, fullscreenbtn;
	
	function intializePlayer(){
	
	vid = document.querySelector(".my_video");
	video__seek = document.querySelector(".video__seek");
	video__bar = document.querySelector(".video__bar");
    video__pause = document.querySelector(".video__pause");
		video__time = document.querySelector(".video__time");
	video__timeTotal = document.querySelector(".video__time-total");
	video__mute = document.querySelector(".video__mute");

	fullscreenbtn = document.querySelector(".fullscreenbtn");
	
	vid.addEventListener("click",playPause,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
fullscreenbtn.addEventListener("click",toggleFullScreen,false);	
	

	const timeDrag = false; /* Drag status */
	video__seek.addEventListener( "pointerdown" , function(event) {
		timeDrag = true;
		updatebar(event.pageX);
	});
		document.addEventListener( "pointerup" , function(event) {
		if(timeDrag) {
			timeDrag = false;
			updatebar(event.pageX);
		}
	});
		document.addEventListener( "pointermove" , function(event) {
		if(timeDrag) {
			updatebar(event.pageX);
		}
	});
	
	
}
window.onload = intializePlayer;
function playPause(){
	if(vid.paused){
		vid.play();
		vid.style.background = "#00000099";
		video__pause.style.backgroundImage = "url(/svg/play.svg)";
	} else {
		vid.pause();
		video__pause.style.backgroundImage = "url(/svg/pause.svg)";
	}
}
	

const updatebar = function(x) {
	const progress = video__seek;
	const maxduration = vid.duration;
	const position = x - progress.getBoundingClientRect().left;
	const percentage = 100 * position / progress.offsetWidth;
	
	if(percentage > 100) {
		percentage = 100;
	}
	if(percentage < 0) {
		percentage = 0;
	}
	
//	Update progress bar and video currenttime
	video__bar.style.width = percentage + "%";
	vid.currentTime = maxduration * percentage / 100;
	
};

const updateSound = function(x) {
	const progress = video__volume;
	const position = x - progress.getBoundingClientRect().left;
	const percentage = 100 * position / progress.offsetWidth;
	
	if(percentage > 100) {
		percentage = 100;
	}
	if(percentage < 0) {
		percentage = 0;
	}
	
	video__soundBar.style.width = percentage + "%";
	vid.volume = percentage / 100;

	
};
	
function seektimeupdate(){
	const currentPos = vid.currentTime;
	const maxduration = vid.duration;
	const percentage = 100 * currentPos / maxduration;
	video__bar.style.width=percentage+"%";
	
	const curmins = Math.floor(vid.currentTime / 60);
	const cursecs = Math.floor(vid.currentTime - curmins * 60);
	const durmins = Math.floor(vid.duration / 60);
	const dursecs = Math.floor(vid.duration - durmins * 60);
	if(cursecs < 10){ cursecs = "0"+cursecs; }
	if(dursecs < 10){ dursecs = "0"+dursecs; }
	if(curmins < 10){ curmins = "0"+curmins; }
	if(durmins < 10){ durmins = "0"+durmins; }
	video__time.innerHTML = curmins+":"+cursecs;
	video__timeTotal.innerHTML = durmins+":"+dursecs;
}

function vidmute(){
	if(vid.muted){
		vid.muted = false;
		video__mute.style.backgroundClip="border-box";
	} else {
		vid.muted = true;
		video__mute.style.backgroundClip="content-box";
	}
}

function setvolume(){
	vid.volume = video__volume.value / 100;
}

function toggleFullScreen(){
	if(vid.requestFullScreen){
		vid.requestFullScreen();
	} else if(vid.webkitRequestFullScreen){
		vid.webkitRequestFullScreen();
	} else if(vid.mozRequestFullScreen){
		vid.mozRequestFullScreen();
	}
}
	
	//END OF VIDEO PLAYER SCRIPT