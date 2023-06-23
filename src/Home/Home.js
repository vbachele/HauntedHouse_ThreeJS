import * as THREE from 'three';
import EventEmitter from "../Experience/Utils/EventEmitter.js";
import Time from "../Experience/Utils/Time.js";
import sources from "../Experience/sources.js";
import Ressources from "../Experience/Utils/Ressources.js";
import Sizes from "../Experience/Utils/Sizes.js";
import Renderer from "./Renderer.js";
import World from "./World/World.js";
import Camera from "./Camera.js";

let instance = null; // Singleton to store the instance of the class

export default class Home 
{
	constructor(canvas)
	{
		console.log('Home constructor');
		if(instance)
			return instance;
		instance = this;
		this.canvas = canvas;
		this.scene = new THREE.Scene();
		this.time = new Time();
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

	scrolling()
	{
		const scrollSpeed = 0.01; // Adjust the speed of the downward movement
		let scrollPosition = 0;
	}
	resize() // resize the camera and renderer
	{		
		this.camera.resize();
		this.renderer.resize();
	}

	update() // Update each frame
	{
		this.camera.update();
		// this.world.update();
		this.renderer.update();
	}
}