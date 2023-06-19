import * as THREE from 'three';
import rainAudio from "/audio/rain.mp3"
import Experience from "../Experience";


export default class Rain
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.camera = this.experience.camera;
		this.ressources = this.experience.ressources;
		this.timer = this.experience.time;
		this.setRain();
	}

	setRain()
	{
		this.setRainGeometry();
		this.setRainMaterial();
		this.setRainMesh();
		this.setRainAudio();
	}

	setRainGeometry()
	{
		let rainCount = 1500;
		this.rainGeometry = new THREE.BufferGeometry();
		const vertices = [];
		for (let i = 0; i < rainCount; i++) 
		{
			this.rainDrop = new THREE.Vector3
			(
				(Math.random() - 0.5) * 100,
				(Math.random() - 0.5) * 100, // Generate y-coordinate based on interval
				(Math.random() - 0.5) * 100,
			);
			vertices.push(this.rainDrop.x, this.rainDrop.y, this.rainDrop.z);
			this.rainDrop.velocity = 0; // Assign the initial velocity as 0
		}
			
		this.rainGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
	}

	setRainMaterial()
	{
		this.rainMaterial = new THREE.PointsMaterial({
		  transparent: true,
		  size: 0.1,
		  sizeAttenuation: true,
		  map: this.ressources.items.rainNormalTexture,
		  alphaMap: this.ressources.items.rainNormalTexture,
		  depthWrite: false, // if true, it will write to the depth buffer
		});
	}

	setRainMesh()
	{
		this.rainMeshParticles = new THREE.Points(this.rainGeometry, this.rainMaterial);
		this.scene.add(this.rainMeshParticles);
		this.rainMaterial.fog = false;
	}

	setRainAudio()
	{
		this.listener = new THREE.AudioListener();
		this.camera.instance.add(this.listener);
		this.rain = new THREE.Audio(this.listener);
		this.audioLoader = new THREE.AudioLoader();
		this.audioLoader.load(rainAudio, (buffer) => {
			this.rain.setBuffer(buffer);
			this.rain.setLoop(false);
			this.rain.setVolume(0.2);
			this.rain.play(0);
		});
		this.scene.add(this.rain);
	}

	update()
	{
		const positionAttribute = this.rainGeometry.getAttribute('position');
		const vertices = positionAttribute.array;
		for (let i = 0; i < vertices.length; i += 3) {
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
		// console.log(vertices[i + 1]);
		vertices[i + 2] = z;
		vertices[i + 3] = velocity;
		}
		
		positionAttribute.needsUpdate = true;
		this.rainGeometry.rotateY(0.002);
	}
}