import * as THREE from 'three';
import Experience from '../../Experience.js';
import crowAudio from '/audio/crow.mp3';

export default class Crow
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.ressources = this.experience.ressources;
		this.timer = this.experience.time;
		this.ressource = this.ressources.items.crowModel.scene;
		this.camera = this.experience.camera.instance;
		this.house = this.experience.world.house;
		this.setCrow1();
		this.setCrowSound();
		this.time = 0; // Current time
		this.rotationSpeed = 0.013; // Speed of rotation
		this.radius = 8; // Radius of circular motion
	  }

	setCrow1()
	{
		this.crow1 = this.ressource.clone()
		this.crow1.scale.set(3, 3, 3);
		this.crow1.position.x = -2;
		this.crow1.position.z = -2;
		this.crow1.position.y = 5;
	
		this.crow1.rotation.x = Math.PI * 0.55;

		this.scene.add(this.crow1);
	}

	setCrowSound()
	{
		
		this.listener = new THREE.AudioListener();
		this.camera.add(this.listener);
		this.crow = new THREE.Audio(this.listener);
		this.audioLoader = new THREE.AudioLoader();
		this.audioLoader.load(crowAudio, (buffer) => {
			this.crow.setBuffer(buffer);
			this.crow.setLoop(true);
			this.crow.setVolume(0.2);
			this.crow.play(0);
		});
		this.minDistance = 10;
		this.maxDistance = 15; // Adjust the maximum distance threshold as needed
		this.fadeoutDuration = 1.5; // Adjust the fadeout duration in seconds
		this.scene.add(this.crow);
	}
	update()
	{
		this.time += this.rotationSpeed;

		const angle = this.time; // Use the time directly for angle calculation
		const x = Math.cos(angle) * this.radius -7;
		const z = Math.sin(angle) * this.radius -6;
	  
		// Calculate the distance between the crow and the camera
		const distanceToCamera = this.crow1.position.distanceTo(this.camera.position);
		let y = Math.max(1 + distanceToCamera * 0.4, 2);
		this.crow1.position.set(x, y, z);
		this.crow1.rotation.y = -angle + 0.3; // Negative angle to rotate in the opposite direction
		
		//Calculate the wing rotation
		const wingRotation = Math.sin(this.time * 3) * Math.PI * 0.20; // Adjust the speed and amplitude of the wing movement
		this.crow1.traverse((child) => {
		  if (child.name[6]) { // Assuming the wings are named 'wing'
			
			if (distanceToCamera > 6) 
			{ // Set a threshold distance to prevent rotation
				this.crow1.rotation.z = wingRotation; // Negative angle to rotate in the opposite direction
			}
		  }
		});
		const volume = Math.max(0, Math.min(0.2, 0.2 - (distanceToCamera - this.minDistance) * 0.2 / (this.maxDistance - this.minDistance)));
 		 this.crow.setVolume(volume);

	}
}