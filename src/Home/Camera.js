import * as THREE from 'three';
import Home from './Home.js';

export default class Camera
{
	constructor()
	{
		this.home = new Home();
		this.sizes = this.home.sizes;
		this.scene = this.home.scene;

		this.canvas = this.home.canvas;
		this.fov = 35
		this.setInstance();
	}

	setInstance()
	{
		this.instance = new THREE.PerspectiveCamera(this.fov, this.sizes.width / this.sizes.height, 0.1, 100);
		this.instance.position.z = 6;
		this.scene.add(this.instance);
	}

	resize()
	{
		this.instance.aspect = this.sizes.width / this.sizes.height;
		this.instance.updateProjectionMatrix();
	}

	update()
	{
		
	}

}