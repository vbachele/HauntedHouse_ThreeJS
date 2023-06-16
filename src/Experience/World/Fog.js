import * as THREE from 'three';
import Experience from '../Experience.js';

export default class Fog
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.setFog();	
		this.scene.fog = new THREE.Fog('#262837', 1, 15);
	}

	setFog()
	{
		this.fog = new THREE.Fog('#262837', 1, 15)
		this.scene.fog = this.fog
	}
}