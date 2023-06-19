import Experience from "../Experience.js";
import * as THREE from 'three';

export default class Environment
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.ressources = this.experience.ressources;
		this.setMoonLight();
		this.setEnvironmentMap();	
	}

	setEnvironmentMap()
	{
		this.environmentMap = {}
		this.environmentMap.texture = this.ressources.items.grassNormalTexture;
		console.log(this.environmentMap.texture);
		this.environmentMap.intensity = 2.4;
		this.environmentMap.texture.encoding = THREE.sRGBEncoding;

		this.scene.environment = this.environmentMap.texture;
		this.environmentMap.updateMaterials = () =>
		{
			this.scene.traverse(child =>
			{
				if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
				{
					child.material.envMap = this.environmentMap.texture;
					child.material.envMapIntensity = this.environmentMap.intensity;
					child.material.needsUpdate = true;
					child.castShadow = true;
					child.receiveShadow = true;
				}
			});	
		}
		this.environmentMap.updateMaterials();
	}

	setMoonLight()
	{
		this.ambientLight = new THREE.AmbientLight('#94979A', 0.12);
		this.scene.add(this.ambientLight);
		this.moonLight = new THREE.DirectionalLight('#94979A', 0.12)
		this.moonLight.position.set(4, 5, - 2)
		this.scene.add(this.moonLight)
	}
}