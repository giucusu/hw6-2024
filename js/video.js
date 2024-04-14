var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
    console.log('autoplay is set to' + video.autoplay);
    console.log('loop is set to' + video.loop);
});

window.addEventListener("click", function() {
    if (event.target.id === "play") {
        console.log("Play Video");
        video.play();
    }
});

window.addEventListener("click", function() {
    if (event.target.id === "pause") {
        console.log("Pause Video");
        video.pause();
    }
});

window.addEventListener("click", function() {
    if (event.target.id === "mute") {
        console.log("Mute Video");
        video.muted = !video.muted;
        event.target.textContent = video.muted ? "Unmute" : "Mute";
    }
});

window.addEventListener("input", function() {
    if (event.target.id === "slider") {
        console.log("Changing Volume");
        video.volume = event.target.value / 100;
        console.log(video.volume);
    }
});

window.addEventListener("click", function() {
    if (event.target.id === "vintage") {
        console.log("Changing CSS");
        video.classList.add("oldSchool");
    }
});

window.addEventListener("click", function() {
    if (event.target.id === "orig") {
        console.log("Removing CSS");
        video.classList.remove("oldSchool");
    }
});

window.addEventListener("click", function() {
    if (event.target.id === "slower") {
        console.log("Slowing Down Video");
        video.playbackRate -= 0.1;
        console.log("New Playback Rate: " + video.playbackRate);
    }
});

window.addEventListener("click", function() {
    if (event.target.id === "faster") {
        console.log("Speeding Up Video");
        video.playbackRate += 0.1;
        console.log("New Playback Rate: " + video.playbackRate);
    }
});

window.addEventListener("click", function() {
    if (event.target.id === "skip") {
        console.log("Skipping Ahead");
        video.currentTime += 10;
        if (video.currentTime > 67.403332) {
            video.currentTime = 0;
        }
        console.log("Current Time: " + video.currentTime);
    }
});
