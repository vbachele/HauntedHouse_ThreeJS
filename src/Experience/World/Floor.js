import * as THREE from "three";
import Experience from "../Experience";

export default class Floor
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.ressources = this.experience.ressources;
		this.setGeometry();
		this.setTextures();
		this.setMaterial();
		this.setMesh();
	}

	setGeometry()
	{
		this.geometry =  new THREE.PlaneGeometry(20, 20);
	}

	setTextures()
	{
		this.texture = {}
		this.texture.color = this.ressources.items.grassColorTexture;
		console.log(this.texture.color);
		this.texture.color.encoding = THREE.sRGBEncoding;
		this.texture.color.repeat.set(8, 8);
		this.texture.color.wrapS = THREE.RepeatWrapping;
		this.texture.color.wrapT = THREE.RepeatWrapping;

		this.texture.ambiantOcclusion = this.ressources.items.grassAmbientOcclusionTexture;
		this.texture.ambiantOcclusion.repeat.set(8, 8);
		this.texture.ambiantOcclusion.wrapS = THREE.RepeatWrapping;
		this.texture.ambiantOcclusion.wrapT = THREE.RepeatWrapping;

		this.texture.normal = this.ressources.items.grassNormalTexture;
		this.texture.normal.repeat.set(8, 8);
		this.texture.normal.wrapS = THREE.RepeatWrapping;
		this.texture.normal.wrapT = THREE.RepeatWrapping;

		this.texture.roughness = this.ressources.items.grassRoughnessTexture;
		this.texture.roughness.repeat.set(8, 8);
		this.texture.roughness.wrapS = THREE.RepeatWrapping;
		this.texture.roughness.wrapT = THREE.RepeatWrapping;

	}

	setMaterial()
	{
		this.material = new THREE.MeshStandardMaterial({
			map: this.texture.color, // color texture
			aoMap: this.texture.ambiantOcclusion, // ambient occlusion texture (darken the corners)
			normalMap: this.texture.normal, // normal texture (add some details)
			roughnessMap: this.texture.roughness, // roughness texture (add some roughness)
		});
	}

	setMesh()
	{
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.rotation.x = - Math.PI * 0.5;
		this.mesh.position.y = 0;
		this.mesh.receiveShadow = true;
		this.scene.add(this.mesh);
	}
}