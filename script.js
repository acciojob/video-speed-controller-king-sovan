const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const volume = player.querySelector('.volume');
const playbackSpeed = player.querySelector('.playbackSpeed');
const speedDisplay = player.querySelector('.speed-display');
const rewindButton = player.querySelector('.rewind');
const forwardButton = player.querySelector('.forward');

function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}

function updateButton() {
	const icon = video.paused ? '>' : '| |';
	toggle.textContent = icon;
}

function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressBar.style.flexBasis = `${percent}%`;
}

function rewind(){
	video.currentTime -= 10;
}

function forward() {
	video.currentTIme += 10;
}

function handleVolumeUpdate() {
	video.volume = volume.value;
}

function handlePlaybackSpeedUpdate() {
	video.playbackRate = playbackSpeed.value;
	speedDisplay.textContent = `${playbackSpeed.value}×`;
}

function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime - scrubTime;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton;
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);
volume.addEventListener('input', handleVolumeUpdate);
playbackSpeed.addEventListener('input', handlePlaybackSpeedUpdate);

rewindButton.addEventListener('click', rewind);
forwardButton.addEventListener('click', forward);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);