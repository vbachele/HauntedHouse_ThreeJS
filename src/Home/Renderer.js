import * as THREE from 'three';
import Home from './Home.js';


export default class Renderer
{
	constructor()
	{
		this.home = new Home();
		this.scene = this.home.scene;
		this.sizes = this.home.sizes;
		this.time = this.home.time;
		this.canvas = this.home.canvas;
		this.camera = this.home.camera;
		this.setBackgroundColor();
		this.setInstance();
	}

	setInstance()
	{
		this.instance = new THREE.WebGLRenderer({
			canvas: this.canvas,
			alpha: true
		})
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
		this.instance.render(this.scene, this.camera.instance);
	}

}
	