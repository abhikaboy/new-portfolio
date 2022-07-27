const canvas = document.getElementById('mousetrails');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particlesArray = [];
let hue = 0;
let frame = 0;
const cols = 4;
const rows = 4;

const sheetW = 64;
const sheetH = 64;

const frameW = sheetW / cols;
const frameH = sheetH / rows;
window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});
const mouse = {
	x: undefined,
	y: undefined,
};
document.addEventListener('mousemove', ({ x, y }) => {
	mouse.x = x;
	mouse.y = y;
	if (frame % 1 === 0) {
		for (let i = 0; i < 1; i++) {
			particlesArray.push(new Particle(mouse.x, mouse.y, 1, 1.2, false));
		}
	}
});
const orb = new Image();
orb.src =
	'https://cdn.discordapp.com/attachments/760776202121117706/1000521269437014036/experience_orb_1.png';
class Particle {
	constructor(x, y, speed, life, white) {
		this.x = x;
		this.y = y;
		this.size = Math.random() * 10 + 1;
		this.speedX = (Math.random() * 5 - 1.5) * speed;
		this.speedY = (Math.random() * 5 - 1.5) * speed;
		this.color = 'hsl(' + hue + ', 100%, 100%)';
		this.currentFrame = 0;
		this.currCol = 0;
		this.currRow = 0;
		this.opacity = 0.7;
		this.life = life;
		this.white = white;
		if (this.white) {
			this.brighntess = Math.floor(Math.random() * 1000);
		} else {
			this.brighntess = 100;
		}
	}
	update() {
		this.x += this.speedX;
		this.y += this.speedY;
		if (this.size > 0.2) this.size -= 0.15 * this.life;
		this.opacity -= 0.1;
	}
	draw() {
		this.currCol = this.currentFrame % cols;
		this.currRow = Math.floor(this.currentFrame / cols);
		ctx.filter = `brightness(${this.brighntess}%)`;
		ctx.drawImage(
			orb,
			this.currCol * frameW,
			this.currRow * frameH,
			frameW,
			frameH,
			this.x - (frameW * this.size) / 8,
			this.y - (frameH * this.size) / 8,
			(frameW * this.size) / 4,
			(frameH * this.size) / 4,
		);

		if (frame % 1 == 0) {
			this.currentFrame++;
			if (this.currentFrame == 15) {
				this.currentFrame = 0;
			}
		}
		// this.currentFrame = this.currentFrame % (cols * rows);
	}
}

function handleParticles() {
	for (let i = 0; i < particlesArray.length; i++) {
		for (let j = i; j < particlesArray.length; j++) {
			const dx = particlesArray[i].x - particlesArray[j].x;
			const dy = particlesArray[i].y - particlesArray[j].y;
		}
		particlesArray[i].update();
		particlesArray[i].draw();

		if (particlesArray[i].size <= 0.3) {
			particlesArray.splice(i, 1);
			i--;
		}
	}
}
let headOpacity = 0;
function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	handleParticles();
	frame++;
	if (frame < 10) {
		for (let i = 0; i < 3; i++) {
			particlesArray.push(
				new Particle(
					(Math.random() * canvas.width) / 3 + canvas.width / 3,
					(Math.random() * canvas.height) / 4 + canvas.height / 3,
					0.3,
					3,
					false,
				),
			);
		}
		for (let i = 0; i < 5; i++) {
			particlesArray.push(
				new Particle(
					(Math.random() * canvas.width) / 1.1 + canvas.width / 10,
					(Math.random() * canvas.height) / 1 / 1 + canvas.height / 10,
					0.3,
					3,
					true,
				),
			);
		}
	}
	if (frame > 30 && frame < 45) {
		const header = document.getElementById('name');
		const sub = document.getElementById('sub');
		header.style.display = 'block';
		sub.style.display = 'block';
		for (let i = 0; i < 5; i++) {
			particlesArray.push(
				new Particle(
					(Math.random() * canvas.width) / 3 + canvas.width / 3,
					(Math.random() * canvas.height) / 4 + canvas.height / 3,
					10,
					1,
					false,
				),
			);
		}
	} else if (frame > 60 && frame % 3 == 0 && window.scrollY < 600) {
		particlesArray.push(
			new Particle(
				(Math.random() * canvas.width) / 1.1 + canvas.width / 10,
				(Math.random() * canvas.height) / 1 / 1 + canvas.height / 10,
				0.8,
				0.8,
				true,
			),
		);
	}
	if (frame > 100 && window.scrollY < 100) {
		console.log('dripoploguy');
		const header = document.getElementById('name');
		const sub = document.getElementById('sub');
		header.style.display = 'block';
		sub.style.display = 'block';
	}
	if (window.scrollY > 900 && frame % 5 == 0) {
		const header = document.getElementById('name');
		const sub = document.getElementById('sub');
		// @TO-DO calculate this value later. Probably duration + 1.5 * width smth like that?
		if (window.scrollY > 1000) {
			header.style.display = 'none';
			sub.style.display = 'none';
		}
		const dimensions = document
			.getElementById('engineer')
			.getBoundingClientRect();

		const left = window.innerWidth / 2 - dimensions.width * 0.5;
		console.log(dimensions);
		console.log(left);
		particlesArray.push(
			new Particle(
				Math.random() * dimensions.width + left,
				dimensions.bottom,
				0.4,
				2,
				false,
			),
		);
	}
	requestAnimationFrame(animate);
}
animate();
