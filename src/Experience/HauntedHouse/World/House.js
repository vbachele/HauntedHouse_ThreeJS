import * as THREE from 'three';
import Experience from "../../Experience.js";

export default class House
{
	constructor()
	{
		this.experience = new Experience();
		this.camera = this.experience.camera;
		this.scene = this.experience.scene;
		this.timer  = this.experience.time;
		this.ressources = this.experience.ressources;
		this.ressource = this.ressources.items.houseModel.scene;
		this.house = new THREE.Group()
		this.scene.add(this.house)
		this.setHouse();
		this.isDoorLightSpookey = true
	}

	setHouse()
	{
		this.houseModel = this.ressource.clone();
		this.houseModel.scale.set(0.4, 0.4, 0.4);
		this.houseModel.position.set(0, 0.2, 0);
		this.scene.add(this.houseModel);
		this.setDoorLight();
	}


	setDoorLight()
	{
		this.doorLight = new THREE.PointLight('#ff7d46', 1.5, 7);
		this.doorLight.position.set(0, 2.2, 2.5);
		this.doorLight.castShadow = true;
		this.doorLight.shadow.mapSize.width = 256;
		this.doorLight.shadow.mapSize.height = 256;
		this.doorLight.shadow.camera.far = 7;
		this.house.add(this.doorLight);
	}
	
	doorLightUpdate()
	{
		this.doorLightBlinkDelay = Math.floor((Math.random() + 0.8) * 3);
		this.doorLightBlinkTimer = Math.floor(this.timer.elapsed) % this.doorLightBlinkDelay === 0;
		if (this.doorLightBlinkTimer && this.isDoorLightSpookey)
		{
			this.doorLight.distance = (Math.random()) * 10;
		}
	}

}