import * as THREE from 'three';
import Experience from '../Experience.js';

export default class Bush
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.setGeometry();
		this.setMaterial();
		this.setBush1();
		this.setBush2();
		this.setBush3();
		this.setBush4();
	}
	setGeometry()
	{
		this.geometry = new THREE.SphereGeometry(1, 16, 16);
	}

	setMaterial()
	{
		this.material = new THREE.MeshStandardMaterial({
			map: this.experience.ressources.items.bushColorTexture,
			aoMap: this.experience.ressources.items.bushAmbientOcclusionTexture,
			normalMap: this.experience.ressources.items.bushNormalTexture,
			roughnessMap: this.experience.ressources.items.bushRoughnessTexture,
			displacementMap: this.experience.ressources.items.bushHeightTexture,
			displacementScale: 0.01,
		});
	}
	setBush1()
	{
		this.bush1 = new THREE.Mesh(this.geometry, this.material);
		this.bush1.scale.set(0.5, 0.5, 0.5);
		this.bush1.position.set(0.8, 0.2, 2.2)
		this.scene.add(this.bush1);
	}
	setBush2()
	{
		this.bush2 = new THREE.Mesh(this.geometry, this.material);
		this.bush2.scale.set(0.25, 0.25, 0.25);
		this.bush2.position.set(1.4, 0.1, 2.1);
		this.scene.add(this.bush2);
	}
	setBush3()
	{
		this.bush3 = new THREE.Mesh(this.geometry, this.material);
		this.bush3.scale.set(0.4, 0.4, 0.4);
		this.bush3.position.set(- 0.8, 0.1, 2.2);
		this.scene.add(this.bush3);
	}
	setBush4()
	{
		this.bush4 = new THREE.Mesh(this.geometry, this.material);
		this.bush4.scale.set(0.15, 0.15, 0.15);
		this.bush4.position.set(- 1, 0.05, 2.6);
		this.scene.add(this.bush4);
	}
}