import * as THREE from 'three'
import * as dat from 'lil-gui'
import { LightningStrike } from 'three/examples/jsm/geometries/LightningStrike.js'
import thunderAudio from "/audio/thunder.mp3"


/**
 * Debug
 */
const gui = new dat.GUI()

const parameters = {
	particulesCount: 5000,
	particulesSize: 0.05,
	particulesColor: '#ffffff',
	cursorX: 0.2,
	cursorY: 0,
	cursorZ: 0,
	rotationSpeed: 0.02,
	lightColor: '#2c75ff',
	backgroundColor: 0x090909,
	flashColor: '#ffffff',
}
/**
 * Textures
 */

const textureLoader = new THREE.TextureLoader()
const particulesTexture = textureLoader.load('/textures/sky/rain3.png')

/**
 * Base
 */	

// Canvas

const canvas = document.querySelector('canvas.webgl')

// Scene

const scene = new THREE.Scene()


/**
 * Particles
*/ 

// Geometry

let particlesGeometry = null;
let particlesMaterial = null;
let particles = null;

const generateParticles = () => { 

	if(particles !== null){
        particlesGeometry.dispose(); // dispose of the geometry
        particlesMaterial.dispose(); //  dispose of the material
        scene.remove(particles); // remove the points from the scene
    }
	particlesGeometry = new THREE.BufferGeometry();
	const positions  = new Float32Array(parameters.particulesCount * 3);
	const colors = new Float32Array(parameters.particulesCount * 3);

	for(let i = 0; i < parameters.particulesCount; i++) {
		// const i3 = i * 3;
		positions[i] = (Math.random() - 0.5) * (Math.random() * 8);
	}

particlesGeometry.setAttribute(
		'position',
		new THREE.BufferAttribute(positions, 3)
	)
// particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

// material

particlesMaterial = new THREE.PointsMaterial({
	// color: parameters.particulesColor,
	transparent: true,
	size: parameters.particulesSize,
	map: particulesTexture,
	alphaMap: particulesTexture,
})

// Paticles
particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

}


// lightning strikes --- RAY LIGHTNING
const rayLightParameters = { 
    sourceoffset: new THREE.Vector3(0, -6, -150), // When ray starts
    destOffset: new THREE.Vector3(0, -8, -150), // When ray ends

    radius0: 1, // Radius main trunk at the start
    radius1: 0.1, // Radius main trunk at the end
    radius0factor: 0.5, // Radius of a subray;  = this factor * radius0 parent (Radius multiplier for the first subray)
    radius1factor: 0.2, // Radius multiplier for the second subray
    minRadius: 2, // Minimum radiusthat radius0 and radius1 can get
    maxIterations: 10, // Maximum number of iterations of rays ligtning

    isEternal: false, // If true, the ray will never disappear
    birthTime: 0.2, // Time at which the ray is created
    deathTime: 2, // Time at which the ray disappears
    timeScale: 0.7, // Speed of the ray
    propagationTimeFactor: 0.05, // Speed of the ray
    vanishingTimeFactor: 0.95, // lifetime factor at which ray ends the steady phase
    subrayPeriod: 1, // Time between subrays
    subrayDutyCycle: 0.6, // Percentage of time that the ray is active
    maxSubrayRecursion: 3, // Maximum number of subrays
    ramification: 7, // Number of subrays (children) per ray (parent)
    recursionProbability: 1, // Probability of a ray to generate a subray
    roughness: 0.85, // Roughness of the ray
    straightness: 0.65, // Straightness of the ray
}

// lightning strikes --- Mesh LIGHTNING


const lightningStrike = new LightningStrike(rayLightParameters)
const lightningStrikeMaterial = new THREE.MeshBasicMaterial({ color: 0xB0FFFF })
lightningStrikeMaterial.blending = THREE.AdditiveBlending;


const lightningStrikeMesh1 = new THREE.Mesh(lightningStrike, lightningStrikeMaterial)
lightningStrikeMesh1.position.set(-2, 0, 0);
lightningStrikeMesh1.scale.set(0.1, 0.15, 0.1);
const lightningStrikeMesh2 = new THREE.Mesh(lightningStrike, lightningStrikeMaterial)
lightningStrikeMesh2.position.set(4, 0, -2);
lightningStrikeMesh2.scale.set(0.1, 0.15, 0.1);

scene.add(lightningStrikeMesh1, lightningStrikeMesh2);

/**
 * Lights
 */

const DirectionalLight = new THREE.DirectionalLight(parameters.lightColor, 1);
DirectionalLight.position.set(1, 1, 0);
scene.add(DirectionalLight);

const flash = new THREE.PointLight(parameters.flashColor, 30, 30, 1.7);
flash.position.set(30,  1, -30);
scene.add(flash);

/**
 * Sizes
 */

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight
}

window.addEventListener('resize', () => {
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;

	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();

	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

/**
 * Camera
 */	

// Group

const cameraGroup = new THREE.Group();
scene.add(cameraGroup);
// Base camera
let fov = 35;

if (isMobileDevice()) {
	// Code for mobile devices
	fov = 75;
}


const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	alpha: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const color1 = parameters.backgroundColor;
renderer.setClearColor(new THREE.Color(color1), 1);

/**
 * Sounds
 */
const listener = new THREE.AudioListener();
camera.add(listener);
const thunder = new THREE.Audio(listener);

const audioLoader = new THREE.AudioLoader();
audioLoader.load(thunderAudio, function (buffer) {
    thunder.setBuffer(buffer);
    thunder.setLoop(false);
    thunder.setVolume(0.05);
});

scene.add(thunder)

/**
 * gui debug
 */

gui.add(parameters, 'particulesCount').min(100).max(100000).step(100).onFinishChange(generateParticles);
gui.add(parameters, 'particulesSize').min(0.001).max(0.1).step(0.001).onFinishChange(generateParticles)
gui.addColor(parameters, 'particulesColor').onChange(() => {
	particlesMaterial.color.set(parameters.particulesColor);
})
gui.addColor(parameters, 'backgroundColor').onChange(() => {
	renderer.setClearColor(new THREE.Color(parameters.backgroundColor), 1);
})

/**	
 * Cursor
 */



window.addEventListener('mousemove', (event) => {
    parameters.cursorX = event.clientX / sizes.width - 0.5; // we want to have a value between -0.5 and 0.5 so we divide by the width of the screen and we substract 0.5
    parameters.cursorY = event.clientY / sizes.height - 0.5; // if negative i am on the top, if positive i am on the bottom
})


generateParticles();

/**
 * Animate
 */

const clock = new THREE.Clock();
let previousTime = 0;

const lightningStrikeAnimation = (elapsedTime) => {
	lightningStrike.update(elapsedTime * 0.1);
	   if (Math.random() > 0.93 || flash.power > 100) {
		   if (flash.power < 100) {
				   flash.position.set(
					   Math.random() * -30,
					   98 + Math.random(),
					   Math.random() * 30
				   );
			   }
			   flash.power = 50 + Math.random() * 500;
		   }
}

const rainDrop = (elapsedTime) => {
	thunder.play(0);
	lightningStrikeAnimation(elapsedTime);
	const positionAttribute = particlesGeometry.getAttribute('position');
    const vertices = positionAttribute.array;

	parameters.particulesSize = 0.1;

    for (let i = 0; i < vertices.length; i += 3) {
		// let test =(Math.random() - 0.5) * (Math.random() * 8)
      const x = vertices[i];
      let y = vertices[i + 1];
      let z = vertices[i + 2];
      let velocity = vertices[i + 3];
    
      y += velocity;
      z -= 0.002; // Update the Z coordinate
      if (isNaN(y) || isNaN(z) || isNaN(velocity)) {
        continue; // Skip this iteration and proceed to the next vertex
      }
      if (y < -99) {
        y = 99;
        velocity = 0;
      }

      vertices[i + 1] = y;
      vertices[i + 2] = z;
      vertices[i + 3] = velocity;
    }
	positionAttribute.needsUpdate = true;
   	particlesGeometry.rotateY(0.002);
};	

let buttonclick= false;
const animate = () => {
	const elapsedTime = clock.getElapsedTime();
	const deltaTime = elapsedTime - previousTime; // this is to make sure that the animation is going to be the same on every computer
    previousTime = elapsedTime;
	if(buttonclick === true){
		rainDrop(elapsedTime);
	}
	// Particles rotation
	particles.rotation.y = -0.1 * elapsedTime;

	particles.rotation.x = -parameters.cursorY * (elapsedTime * 0.1);
	particles.rotation.y = parameters.cursorX * (elapsedTime *0.1);
	// particles.rotation.z = parameters.rotationX * elapsedTime * 0.1;

	renderer.render(scene, camera);

	// call animate again on the next frame
	window.requestAnimationFrame(animate);
}
animate();


//ButtonClick
const playButton = document.getElementById('playButton'); // Replace 'play-button' with the actual ID of your play button element
	playButton.addEventListener('click', () => {
		buttonclick = true;
		setTimeout(() => {
			window.location.href = './Experience/haunted-house.html';
		  }, 4000); // Delay time in milliseconds (2 seconds in this example)
});



function isMobileDevice() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }
  