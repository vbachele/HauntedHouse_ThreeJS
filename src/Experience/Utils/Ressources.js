import * as THREE from 'three';
import EventEmitter from "./EventEmitter.js";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

export default class Ressources extends EventEmitter
{
	constructor(sources)
	{
		super();

		//Options
		this.sources = sources;
		// Set up
		this.items = {};
		this.toLoad = this.sources.length; // Number of items to load
		this.loaded = 0; // Number of items already loaded

		this.setLoaders();
		this.startLoading();
	}

	setLoaders()
	{
		this.loaders = {};
		this.loaders.gltfLoader = new GLTFLoader();
		this.loaders.textureLoader = new THREE.TextureLoader();
		this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
	}

	startLoading()
	{
		for(const source of this.sources)
		{
			if (source.type === 'gltfModel')
			{
				this.loaders.gltfLoader.load(source.path, (file) =>
				{
					this.sourceLoaded(source, file);
				}
				);
			}
			else if (source.type === 'texture')
			{
				this.loaders.textureLoader.load(source.path, (file) =>
				{
					this.sourceLoaded(source, file);
				}
				);
			}
			if (source.type === 'cubeTexture')
			{
				this.loaders.cubeTextureLoader.load(source.path, (file) =>
				{
					this.sourceLoaded(source, file);
				}
				);
			}
		}
	}

	sourceLoaded(source, file)
	{
		this.items[source.name] = file; // Add the file to the items object
		this.loaded++; // Increment the number of loaded items
		console.log(this.loaded, this.toLoad);

		if (this.loaded === this.toLoad)
		{
			console.log('All sources loaded');
			this.trigger('ready')
		}
	}
}