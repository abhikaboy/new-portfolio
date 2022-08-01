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

let enableTrails = true;
// import { projectHighlight } from '../src/Components/Landing';

let started = false;
let projectAnimation = false;
let projectAnimationX = 0;
let projectParticles = false;
let projectHighlight = false;
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
	if (frame % 2 == 0 && enableTrails) {
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
		this.opacity = this.opacity < 0 ? 0 : this.opacity - 0.01;
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
			// ? lol what
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
class Triangle extends Particle {
	constructor(x, y, speed, life, white) {
		super(x, y, speed, life, white);
		this.rotation = Math.random() * 180;
	}
	draw() {
		this.rotation += 2;
		ctx.save();
		ctx.globalCompositeOperation = 'overlay';
		ctx.globalAlpha = this.opacity;
		this.opacity -= 0.01;
		ctx.filter = `brightness(${this.brighntess}%)`;
		ctx.translate(this.x, this.y);
		ctx.rotate((this.rotation * Math.PI) / 180);
		ctx.translate(-this.x, -this.y);
		// ctx.rotate(-(this.rotation * Math.PI) / 180);
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.moveTo(this.x, this.y);
		ctx.lineTo(this.x + 50, this.y + 25);
		ctx.lineTo(this.x + 50, this.y - 25);
		ctx.fill();
		ctx.restore();
		ctx.globalCompositeOperation = 'blend';

		ctx.globalAlpha = 1;
		// ctx.rotate(-(this.rotation * Math.PI) / 180);
	}
}
let headOpacity = 0;
let then = Date.now();
let rightHighlight = false;
let leftHighlight = false;
let projectListenersAdded = false;
const fpsInterval = 33;
function animate() {
	console.log(location.pathname);
	now = Date.now();
	elapsed = now - then;
	if (
		(elapsed > fpsInterval &&
			location.pathname.toLocaleLowerCase() == '/home') ||
		location.pathname.toLocaleLowerCase() == '/'
	) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		handleParticles();
		then = now - (elapsed % fpsInterval);
		if (frame == 10) {
			const projectText = document.getElementById('projects');
			projectText.addEventListener('mouseenter', () => {
				projectHighlight = true;
				toggleSound(true);
			});
			projectText.addEventListener('mouseout', () => {
				projectHighlight = false;
				toggleSound(false);
			});
		}
		frame++;
		if (projectHighlight) {
			const dimensions = document
				.getElementById('projects')
				.getBoundingClientRect();
			particlesArray.push(
				new Particle(
					(Math.random() * canvas.width) / 1.1 + canvas.width / 10,
					(Math.random() * canvas.height) / 1 / 1 + canvas.height / 10,
					0.3,
					3,
					true,
				),
			);
			particlesArray.push(
				new Particle(
					(Math.random() * canvas.width) / 3 + canvas.width / 3,
					Math.random() * dimensions.height + dimensions.top,
					0.3,
					3,
					false,
				),
			);
		}
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
			projectAnimation = false;
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
		if (window.scrollY > 1500) {
			const dimensions = document
				.getElementById('projectText')
				.getBoundingClientRect();
			if (!projectAnimation) {
				for (let i = 0; i < 2; i++) {
					particlesArray.push(
						new Particle(projectAnimationX, dimensions.bottom, 4, 2, false),
					);
				}
				projectAnimationX += 50;
				if (projectAnimationX > window.innerWidth) {
					projectAnimation = true;
					projectAnimationX = 0;
				}
			}
		}
		if (window.scrollY > 900 && frame % 5 == 0 && window.scrollY < 1400) {
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

			const text = document.getElementById('aboutText');
			text.style.display = 'flex';

			const left = window.innerWidth / 2 - dimensions.width * 0.5;
			if (frame % 10 == 0) {
				particlesArray.push(
					new Triangle(
						Math.random() * window.innerWidth,
						Math.random() * window.innerHeight,
						0.3,
						0.2,
						true,
					),
				);
			}
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
	} else if (
		elapsed > fpsInterval &&
		location.pathname.toLocaleLowerCase() == '/projects'
	) {
		then = now - (elapsed % fpsInterval);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		handleParticles();
		if (!projectListenersAdded) {
			document.getElementById('right').addEventListener('mouseover', () => {
				rightHighlight = true;
			});
			document.getElementById('right').addEventListener('mouseout', () => {
				rightHighlight = false;
			});
			document.getElementById('left').addEventListener('mouseover', () => {
				leftHighlight = true;
			});
			document.getElementById('left').addEventListener('mouseout', () => {
				leftHighlight = false;
			});
			projectListenersAdded = true;
		}
		if (rightHighlight) {
			for (let i = 0; i < 1; i++) {
				particlesArray.push(
					new Particle(
						window.innerWidth - Math.random() * 350,
						Math.random() * window.innerHeight,
						2,
						3,
						true,
					),
				);
			}
		}
		if (leftHighlight) {
			for (let i = 0; i < 1; i++) {
				particlesArray.push(
					new Particle(
						Math.random() * 350,
						Math.random() * window.innerHeight,
						2,
						3,
						true,
					),
				);
			}
		}
	} else if (
		elapsed > fpsInterval &&
		location.pathname.toLocaleLowerCase() == '/photography'
	) {
		frame++;
		then = now - (elapsed % fpsInterval);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		handleParticles();
		if (frame % 15 == 0) {
			particlesArray.push(
				new Triangle(
					Math.random() * window.innerWidth,
					Math.random() * window.innerHeight,
					0.1,
					0.1,
					true,
				),
			);
		}
	} else if (elapsed > fpsInterval) {
		then = now - (elapsed % fpsInterval);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		handleParticles();
	}
	requestAnimationFrame(animate);
}
