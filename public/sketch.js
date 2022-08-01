let soundFile;
let fft;

let filter, filterFreq, filterRes;
let loaded = false;
let freq = 1;
function preload() {
	soundFormats('mp3', 'ogg');
	soundFile = loadSound('assets/music');
}
function setup() {
	console.log('brimstone');
	animate();
	// put setup code here
	loaded = true;
	// loop the sound file
	// soundFile.loop();
	soundFile.setVolume(0.1);

	filter = new p5.LowPass();

	// Disconnect soundfile from master output.
	// Then, connect it to the filter, so that we only hear the filtered sound
	soundFile.disconnect();
	soundFile.connect(filter);

	fft = new p5.FFT();
}
function toggleSound(active) {
	if (active && freq < 5) {
		freq++;
		setTimeout(toggleSound(active), 1000);
	} else if (!active && freq > 1) {
		freq--;
		setTimeout(toggleSound(active), 1000);
	}
}

function draw() {
	// put drawing code here
	// Map mouseX to a the cutoff frequency from the lowest
	// frequency (10Hz) to the highest (22050Hz) that humans can hear
	filterFreq = map(1, 0, width, 0, 22050);

	// Map mouseY to resonance (volume boost) at the cutoff frequency
	filterRes = map(0, 0, height, 15, 5);

	// set filter parameters
	filter.set(filterFreq, filterRes);
	let spectrum = fft.analyze();
}
