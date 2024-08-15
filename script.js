const video = document.querySelector('.viewer');
const speedSlider = document.quertSelector('.speed-slider');
const speedValue = document.querySelector(.'speed-value');

function updatedSpeed() {
	const speed = speedSlider.value;
	video.playbackRate = speed;
	speedValue.textContent = `${speed}`;
}

speedSlider.addEventListener('input', updatedSpeed);

updatedSpeed();