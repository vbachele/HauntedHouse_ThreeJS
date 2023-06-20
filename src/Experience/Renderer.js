import * as THREE from 'three';
import Experience from './Experience.js';

export default class Renderer
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.sizes = this.experience.sizes;
		this.time = this.experience.time;
		this.canvas = this.experience.canvas;
		this.camera = this.experience.camera;
		this.setInstance();
	}

	setInstance()
	{
		this.instance = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true
		});
		this.instance.physicallyCorrectLights = true
		this.instance.outputEncoding = THREE.sRGBEncoding
		this.instance.toneMapping = THREE.CineonToneMapping
		this.instance.toneMappingExposure = 1.75
		this.instance.shadowMap.enabled = true
		this.instance.shadowMap.type = THREE.PCFSoftShadowMap
		this.instance.setClearColor('#262837')
		this.instance.setSize(this.sizes.width, this.sizes.height)
		this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
		this.camera.instance.renderOrder = 1;

	}

	resize()
	{
		this.instance.setSize(this.sizes.width, this.sizes.height)
		this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio , 2))
	}

	update()
	{
		this.instance.render(this.scene, this.camera.instance);
	}
}