import * as THREE from "three";
import Experience from "../../Experience";

export default class Graveyard
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.ressources = this.experience.ressources;
		this.graves = new THREE.Group();
		this.scene.add(this.graves);
		this.setGeometry();
		this.setMaterial();
		this.setMeshes();
	}

	setGeometry()
	{
		this.graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2);
		this.graveGeometry.setAttribute('uv2', new THREE.Float32BufferAttribute(this.graveGeometry.attributes.uv.array, 2)) // add uv2 to the grave geometry

	}

	setMaterial()
	{
		this.graveMaterial = new THREE.MeshStandardMaterial({
			map: this.ressources.items.graveyardColorTexture, // color texture
			aoMap: this.ressources.items.graveyardAmbientOcclusionTexture, // ambient occlusion texture (darken the corners)
			normalMap: this.ressources.items.graveyardNormalTexture, // normal texture (add some details)
			roughnessMap: this.ressources.items.graveyardRoughnessTexture, // roughness texture (add some roughness)
			displacementMap: this.ressources.items.graveyardHeightTexture, // displacement texture (add some displacement)
			displacementScale: 0.005,
		});
	}

	setMeshes()
	{
		for(let i = 0; i < 50; i++)
		{
			const angle = Math.random() * Math.PI * 2; // random angle between 0 and 2PI
			const radius = 3 + Math.random() * 6; // random radius between 3 and 9
			const x = Math.sin(angle) * radius;
			const z = Math.cos(angle) * radius;
			

			const grave = new THREE.Mesh(this.graveGeometry, this.graveMaterial);
			grave.position.set(x, 0.3, z);
			grave.rotation.y = (Math.random() - 0.5) * 0.4; // random rotation between -0.2 and 0.2
			grave.rotation.z = (Math.random() - 0.5) * 0.4; // random rotation between -0.2 and 0.2
			grave.castShadow = true // enable shadow
			this.graves.add(grave);
		}

	}
}

// for (let i = 0; i < 50; i++) {
//     const angle = Math.random() * Math.PI * 2; // random angle between 0 and 2PI
//     const radius = 3 + Math.random() * 6; // random radius between 3 and 9
//     const x = Math.sin(angle) * radius;
//     const z = Math.cos(angle) * radius;
    

//     const grave = new THREE.Mesh(graveGeometry, graveMaterial);
//     grave.position.set(x, 0.3, z);
//     grave.rotation.y = (Math.random() - 0.5) * 0.4; // random rotation between -0.2 and 0.2
//     grave.rotation.z = (Math.random() - 0.5) * 0.4; // random rotation between -0.2 and 0.2
//     grave.castShadow = true // enable shadow
//     graves.add(grave);

// }