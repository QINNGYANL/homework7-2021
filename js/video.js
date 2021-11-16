var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

//play
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volupdate.textContent = volume.value + "%";
});
//pause
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});
//slow down
document.querySelector("#slower").addEventListener("click", ()=>{
	video.playbackRate = 0.95 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});
//speed up
document.querySelector("#faster").addEventListener("click", ()=>{
	video.playbackRate = 1.05 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});
//skip ahead
document.querySelector("#skip").addEventListener("click", ()=>{
	console.log("Original location " + video.currentTime);
	//console.log(video.duration);
	if ((video.duration - video.currentTime) > 15){
		video.currentTime = video.currentTime + 15;
		console.log("New location "+ video.currentTime);
	}
	else {
		video.currentTime =  0;
		console.log("Go back to beginning");
	}
})
//mute
const mutebutton = document.querySelector("#mute");
//console.log(mutebutton.textContent);
//console.log(video.muted);
mutebutton.addEventListener("click", ()=>{
	if (video.muted == false){
		video.muted = true;
		mutebutton.textContent = "Unmute";
	}
	else {
		video.muted = false;
		mutebutton.textContent = "Mute";
	}
});
//volume sider
const volume = document.querySelector("#slider");
const volupdate = document.querySelector("#volume");
console.log(volupdate.textContent);
//console.log(volume.value);

document.querySelector("#slider").addEventListener("change", ()=>{
	video.volume = volume.value / 100;
	//console.log(volume.value);
	console.log("video volume " + video.volume);
	volupdate.textContent = volume.value + "%";
});
//styled
document.querySelector("#vintage").addEventListener("click", ()=>{
	video.classList.add("oldSchool");
});
//original
document.querySelector("#orig").addEventListener("click", ()=>{
	video.classList.remove("oldSchool");
});
