import * as THREE from 'three';
import rainAudio from "/audio/rain.mp3"
import Experience from "../Experience";
import * as CANNON from "cannon-es";



export default class Rain
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.camera = this.experience.camera;
		this.ressources = this.experience.ressources;
		this.physicsWorld = this.experience.world.physicsWorld;
		this.timer = this.experience.time;
		this.setRain();
	}

	setTest()
	{
		// Create sphere
		const sphereGeometry = new THREE.SphereGeometry(1, 20, 20)
		const sphereMaterial = new THREE.MeshStandardMaterial
			({
				metalness: 0.3,
				roughness: 0.4,
				envMapIntensity: 0.5
			})
		this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
		this.sphere.castShadow = true;
		this.sphere.scale.set(1, 1, 1);
		this.sphere.position.copy(new THREE.Vector3(3, 7, 3));
		this.scene.add(this.sphere);

		this.concreteMaterial = new CANNON.Material("concrete");
		this.plasticMaterial = new CANNON.Material("plastic");
		const concretePlasticContactMaterial = new CANNON.ContactMaterial(this.concreteMaterial, this.plasticMaterial, {
			friction: 0.1,
			restitution: 0.7,
		});
		this.physicsWorld.addContactMaterial(concretePlasticContactMaterial);


		this.sphereShape = new CANNON.Sphere(1);
		this.sphereBody = new CANNON.Body({ 
			mass: 1,
			shape: this.sphereShape,
			position: new CANNON.Vec3(3, 7, 3), 
			material: this.plasticMaterial,
		});
		this.physicsWorld.addBody(this.sphereBody);
		console.log("physics = ", this.physicsWorld);


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
		let rainCount = 1000;
		this.rainGeometry = new THREE.BufferGeometry();
		const vertices = [];
		for (let i = 0; i < rainCount; i++) 
		{
			this.rainDrop = new THREE.Vector3
			(
				(Math.random() - 0.5) * 50,
				(Math.random() - 0.1) * 50, // Generate y-coordinate based on interval
				(Math.random() - 0.5) * 50,
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
		  size: 0.15,
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
		let x = vertices[i];
		let y = vertices[i + 1];
		let z = vertices[i + 2];
		let velocity = vertices[i + 3];
		
		y += velocity;
		z -= 0.002; // Update the Z coordinate
		x = (Math.random() - 0.5) * 50; // Update the X coordinate with a sine wave
		if (isNaN(y) || isNaN(z) || isNaN(velocity)) {
			continue; // Skip this iteration and proceed to the next vertex
		}
		if (y < -5) {
			y = 99;
			velocity = 0;
		}

		vertices[i] = x;
		vertices[i + 1] = y;
		vertices[i + 2] = z;
		vertices[i + 3] = velocity;
		}
		
		positionAttribute.needsUpdate = true;
		this.rainGeometry.rotateY(0.002);

	}
}