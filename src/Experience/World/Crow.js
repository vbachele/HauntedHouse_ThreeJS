import * as THREE from 'three';
import Experience from '../Experience.js';

export default class Crow
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.ressources = this.experience.ressources;
		this.ressource = this.ressources.items.crowModel.scene;
		this.setCrow1();

		this.time = 0; // Current time
		this.rotationSpeed = 0.01; // Speed of rotation
		this.radius = 7; // Radius of circular motion
	  }
		// this.setCrow2();

	setCrow1()
	{
		this.crow1 = this.ressource.clone()
		this.crow1.scale.set(3, 3, 3);
		this.crow1.position.x = 0;
		this.crow1.position.z = 0;
		this.crow1.rotation.z = -Math.PI * 0.5;
		this.scene.add(this.crow1);
	}

	update()
	{
		this.time += this.rotationSpeed;

		const angle = this.time; // Use the time directly for angle calculation
		const x = Math.cos(angle) * this.radius;
		const z = Math.sin(angle) * this.radius;
		this.crow1.position.set(x, 3, z -0.5);

		// Update the rotation of the crow
		this.crow1.rotation.y = -angle; // Negative angle to rotate in the opposite direction
	}
}