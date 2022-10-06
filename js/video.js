
	
	let vid, videoPause, videoSeek,vidRep, videoBar, videoMute, videoVolume, videoSoundBar, fullscreenbtn;
	
	function intializePlayer(){
	
	vid = document.querySelector(".my_video");
	videoSeek = document.querySelector(".video__seek");
	videoBar = document.querySelector(".video__bar");
    videoPause = document.querySelector(".video__pause");
	videoMute = document.querySelector(".video__mute");
	vidRep = document.querySelector(".video__replay");

	fullscreenbtn = document.querySelector(".fullscreenbtn");
	
	vid.addEventListener("click",playPause,false);
	vid.addEventListener("timeupdate",seektimeupdate,false);
    fullscreenbtn.addEventListener("click",toggleFullScreen,false);	
	vidRep.addEventListener("click",()=>{
		vid.currentTime = 0;
	})
	videoPause.addEventListener("click",playPause,false)

	const timeDrag = false; /* Drag status */
	videoSeek.addEventListener( "pointerdown" , function(event) {
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
		videoPause.style.backgroundImage="url(../svg/play.svg)";
	} else {
		vid.pause();
		videoPause.style.backgroundImage = "url(../svg/pause.svg)";
	}
}
	

   const updatebar = function(x) {
	const progress = videoSeek;
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
	videoBar.style.width = percentage + "%";
	vid.currentTime = maxduration * percentage / 100;
	
};

  const updateSound = function(x) {
	const progress = videoVolume;
	const position = x - progress.getBoundingClientRect().left;
	const percentage = 100 * position / progress.offsetWidth;
	
	if(percentage > 100) {
		percentage = 100;
	}
	if(percentage < 0) {
		percentage = 0;
	}
	
	videoSoundBar.style.width = percentage + "%";
	vid.volume = percentage / 100;	
};
	
function seektimeupdate(){
	const currentPos = vid.currentTime;
	const maxduration = vid.duration;
	const percentage = 100 * currentPos / maxduration;
	videoBar.style.width=percentage + "%";
}

function vidmute(){
	if(vid.muted){
		vid.muted = false;
		videoMute.style.backgroundClip="border-box";
	} else {
		vid.muted = true;
		videoMute.style.backgroundClip="content-box";
	}
}

function setvolume(){
	vid.volume = videoVolume.value / 100;
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
	
