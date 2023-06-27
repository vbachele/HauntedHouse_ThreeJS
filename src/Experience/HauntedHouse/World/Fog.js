import * as THREE from 'three';
import Experience from '../../Experience.js';

export default class Fog
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.setFog();	

	}

	setFog()
	{
		this.fog = new THREE.Fog('#000000', 0.2, 15);
		this.scene.fog = this.fog
	}
}