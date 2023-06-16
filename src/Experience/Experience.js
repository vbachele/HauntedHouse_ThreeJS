import * as THREE from 'three'
import Time from './Utils/Time.js'
import Sizes from './Utils/Sizes.js'
import Renderer from './Renderer.js';
import Camera from './Camera.js';
import World from './World/World.js';
import sources from './sources.js';
import Ressources from './Utils/Ressources.js';

let instance = null; // Singleton to store the instance of the class

export default class Experience
{
	constructor(canvas) {

		if (instance)
			return instance
		instance = this;
		this.canvas = canvas

		// Set up
		this.time = new Time();
		this.scene = new THREE.Scene();
		this.ressources = new Ressources(sources);

		this.sizes = new Sizes();
		this.camera = new Camera();
		this.renderer = new Renderer();
		this.world = new World();


			
		this.sizes.on('resize', () =>
		{
			this.resize();
		})
		// Listeners
		this.time.on('tick', () =>
		{
			this.update();
		})
		
	}
	// Methods

	resize() // resize the camera and renderer
	{		
		this.camera.resize();
		this.renderer.resize();
	}

	update() // Update each frame
	{
		this.camera.update();
		this.world.update();
		this.renderer.update();
	}

}