import * as THREE from 'three';
import Experience from '../Experience.js';

export default class Bush
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.ressources = this.experience.ressources;
		this.ressource = this.ressources.items.bushModel.scene;
		this.setBush1();
		this.setBush2();
		this.setBush3();
		this.setBush4();
	}

	setBush1()
	{
		this.bush1 = this.ressource.clone()
		this.bush1.scale.set(1.5, 1.5, 1.5);
		this.bush1.position.set(0.8, 0.2, 2.2)
		this.scene.add(this.bush1)
	}
	setBush2()
	{
		this.bush2 = this.ressource.clone();
		this.bush2.scale.set(0.75, 0.75, 0.75);
		this.bush2.position.set(1.4, 0.1, 2.1)
		this.scene.add(this.bush2)
	}
	setBush3()
	{
		this.bush3 = this.ressource.clone();
		this.bush3.scale.set(1.3, 1.3, 1.3);
		this.bush3.position.set(-0.8, 0.1, 2.2)
		this.scene.add(this.bush3)
	}
	setBush4()
	{
		this.bush4 = this.ressource.clone();
		this.bush4.scale.set(0.8, 0.8, 0.8);
		this.bush4.position.set(-1, 0.05, 2.6)
		this.scene.add(this.bush4)
	}
}