import * as THREE from 'three'
import Time from './Utils/Time.js'
import Sizes from './Utils/Sizes.js'
import Renderer from './Renderer.js';
import Camera from './Camera.js';
import World from './HauntedHouse/World/World.js';
import sources from './sources.js';
import Ressources from './Utils/Ressources.js';
import HomePage from './Home/World/Home.js';

let instance = null; // Singleton to store the instance of the class

export default class Experience
{
	constructor(canvas) {

		if (instance)
			return instance
		instance = this;

		this.canvas = canvas;
		// Set up
		this.time = new Time();
		this.scene = new THREE.Scene();
		this.ressources = new Ressources(sources);
		this.sizes = new Sizes();
		this.camera = new Camera();
		this.renderer = new Renderer();
		this.home = new HomePage(); // homepage
		this.world = new World(); // haunted house
		this.home = new HomePage(); // homepage

		// this.pages = [this.home, this.world];

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
		if (this.home.button)
		{
			if(this.home.button.clicked)
			{
				this.world.update();
			}
		}
		this.home.update();
		this.renderer.update();
	}


}