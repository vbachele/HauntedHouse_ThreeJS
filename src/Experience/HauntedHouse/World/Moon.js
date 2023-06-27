import * as THREE from 'three';
import Experience from '../../Experience';

export default class Moon
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.ressources = this.experience.ressources;
		this.ressource = this.ressources.items.moonModel.scene;
		this.x = -15;
		this.y = 12;
		this.z = -20;
		this.setMoon();
		this.setMoonLight();
	}

	setMoon()
	{
		this.moon = this.ressource.clone();
		this.moon.scale.set(0.4, 0.4, 0.4);
		this.moon.position.set(this.x, this.y, this.z);
		this.moon.traverse((child) => {
			if (child instanceof THREE.Mesh) {
				child.material.fog = false;
			  }
		  });
		  this.moon.castShadow = true;
		this.scene.add(this.moon);
	}

	setMoonLight()
	{
		this.moonLight = new THREE.PointLight(0xffffff, 4, 100);
		this.moonLight.position.set(this.x, this.y, this.z);
		//camera helper
		const helper = new THREE.PointLightHelper(this.moonLight);
		this.scene.add(helper);
		this.scene.add(this.moonLight);

		this.moonLight.shadow.mapSize.width = 512;
		this.moonLight.shadow.mapSize.height = 512;
		this.moonLight.shadow.camera.near = 0.5;
		this.moonLight.shadow.camera.far = 500;
	}
}