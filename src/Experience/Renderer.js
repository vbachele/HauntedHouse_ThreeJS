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
		this.sceneLoaded = false;
		this.targetY = 2;
		this.currentY = 10;
		this.currentZ = 10;
		this.setBackgroundColor();
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
		this.instance.setClearColor(this.darkerColorHex)
		this.instance.setSize(this.sizes.width, this.sizes.height)
		this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2))
		this.camera.instance.renderOrder = 1;

	}

	setBackgroundColor()
	{
		const darkerColor = 0x262837;
		const color = new THREE.Color(darkerColor);
		const darkerColorAdjusted = color.multiplyScalar(0.5);
		this.darkerColorHex = darkerColorAdjusted.getHex();
	}

	resize()
	{
		this.instance.setSize(this.sizes.width, this.sizes.height)
		this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio , 2))
	}

	update()
	{
		if (!this.sceneLoaded)
			this.loadFirstScene();
		this.instance.render(this.scene, this.camera.instance);
	}

	loadFirstScene()
	{
		this.currentY -= 0.08;
		this.currentX -= 0.08;
		this.camera.instance.position.y = this.currentY;
		this.camera.instance.position.z = this.currentZ;
		if (this.currentY < 2)
		{
			this.sceneLoaded = true;
		}
	}
}