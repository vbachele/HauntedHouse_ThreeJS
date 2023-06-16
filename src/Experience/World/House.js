import * as THREE from 'three';
import Experience from "../Experience.js";

export default class House
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.timer  = this.experience.time;
		this.ressources = this.experience.ressources;
		this.house = new THREE.Group()
		this.scene.add(this.house)
		this.setWall();
		this.setRoof();
		this.setDoor();
		this.isDoorLightSpookey = true
	}

	setWall()
	{
		this.setWallGeometry();
		this.setWallMaterial();
		this.setWallMesh();
	}

	setWallGeometry()
	{
		this.wallGeometry = new THREE.BoxGeometry(4, 2.5, 4);
	}

	setWallMaterial()
	{
		this.wallMaterial = new THREE.MeshStandardMaterial({
			map: this.ressources.items.wallColorTexture,
			aoMap: this.ressources.items.wallAmbientOcclusionTexture,
			normalMap: this.ressources.items.wallNormalTexture,
			roughnessMap: this.ressources.items.wallRoughnessTexture
		}
		);
	}

	setWallMesh()
	{
		this.wallMesh = new THREE.Mesh(this.wallGeometry, this.wallMaterial);
		this.wallMesh.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(this.wallMesh.geometry.attributes.uv.array, 2)) // add uv2 to the walls geometry
		this.wallMesh.position.y = 1.25
		this.house.add(this.wallMesh);
	}

	setRoof()
	{
		this.setRoofGeometry();
		this.setRoofTexture();
		this.setRoofMaterial();
		this.setRoofMesh();
	}

	setRoofGeometry()
	{
		this.roofGeometry = new THREE.ConeGeometry(3.5, 1, 4);
	}

	setRoofTexture()
	{
		this.texture = {}
		this.texture.color = this.ressources.items.roofColorTexture;
		this.texture.color.repeat.set(8, 8);
		this.texture.color.wrapS = THREE.RepeatWrapping;
		this.texture.color.wrapT = THREE.RepeatWrapping;

		this.texture.ambientOcclusion = this.ressources.items.roofAmbientOcclusionTexture;
		this.texture.ambientOcclusion.repeat.set(8, 8);
		this.texture.ambientOcclusion.wrapS = THREE.RepeatWrapping;
		this.texture.ambientOcclusion.wrapT = THREE.RepeatWrapping;

		this.texture.normal = this.ressources.items.roofNormalTexture;
		this.texture.normal.repeat.set(8, 8);
		this.texture.normal.wrapS = THREE.RepeatWrapping;
		this.texture.normal.wrapT = THREE.RepeatWrapping;

		this.texture.roughness = this.ressources.items.roofRoughnessTexture;
		this.texture.roughness.repeat.set(8, 8);
		this.texture.roughness.wrapS = THREE.RepeatWrapping;
		this.texture.roughness.wrapT = THREE.RepeatWrapping;

		this.texture.displacement = this.ressources.items.roofHeightTexture;
	}

	setRoofMaterial()
	{
		this.roofMaterial = new THREE.MeshStandardMaterial({
			map: this.texture.color,
			aoMap: this.texture.ambientOcclusion,
			normalMap: this.texture.normal,
			roughnessMap: this.texture.roughness,
			displacementMap: this.texture.displacement,
			displacementScale: 0.001,
		});
	}

	setRoofMesh()
	{
		this.roofMesh = new THREE.Mesh(this.roofGeometry, this.roofMaterial);
		this.roofMesh.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(this.roofMesh.geometry.attributes.uv.array, 2)) // add uv2 to the roof geometry
		this.roofMesh.position.y = 2.5 + 0.5;
		this.roofMesh.rotation.y = Math.PI * 0.25;
		this.house.add(this.roofMesh);
	}

	setDoor()
	{
		this.setDoorGeometry();
		this.setDoorMaterial();
		this.setDoorMesh();
		this.setDoorLight();
	}

	setDoorGeometry()
	{
		this.doorGeometry = new THREE.PlaneGeometry(2.2, 2.2, 100, 100);
	}

	setDoorMaterial()
	{
		this.doorMaterial = new THREE.MeshStandardMaterial({
			map: this.ressources.items.doorColorTexture,
			transparent: true,
			alphaMap: this.ressources.items.doorAlphaTexture,
			aoMap: this.ressources.items.doorAmbientOcclusionTexture,
			normalMap: this.ressources.items.doorNormalTexture,
			roughnessMap: this.ressources.items.doorRoughnessTexture,
			metalnessMap: this.ressources.items.doorMetalnessTexture,
			displacementMap: this.ressources.items.doorHeightTexture,
			displacementScale: 0.1,
		});

	}

	setDoorMesh()
	{
		this.doorMesh = new THREE.Mesh(this.doorGeometry, this.doorMaterial);
		this.doorMesh.geometry.setAttribute('uv2', new THREE.Float32BufferAttribute(this.doorMesh.geometry.attributes.uv.array, 2)) // add uv2 to the door geometry
		this.doorMesh.position.y = 1;
		this.doorMesh.position.z = 2 + 0.01;
		this.house.add(this.doorMesh);
	}

	setDoorLight()
	{
		this.doorLight = new THREE.PointLight('#ff7d46', 1, 7);
		this.doorLight.position.set(0, 2.2, 2.7);
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