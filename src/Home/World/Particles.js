import * as THREE from 'three';
import Home from '../Home.js';

export default class Particles
{
	constructor()
	{
		this.home = new Home();
		this.scene = this.home.scene;
		this.time = this.home.time;
		console.log('Particles constructor');
		this.setparticulesParameters();
		this.setParticules();
		this.generateParticles();
	}

	setparticulesParameters()
	{
		this.parameters =
		{
			particulesCount: 3000,
			particulesSize: 0.01,
			particulesColor: '#ffffff',
			cursorX: 0.2,
			cursorY: 0,
			cursorZ: 0,
			rotationSpeed: 0.02,
			lightColor: '#2c75ff',
			backgroundColor: 0x090909,
			flashColor: '#ffffff',
		}
	}

	setParticules()
	{
		this.particlesGeometry = null;
		this.particlesMaterial = null;
		this.particles = null;

		this.generateParticles = () => { 

			if(this.particles !== null){
				this.particlesGeometry.dispose(); // dispose of the geometry
				this.particlesMaterial.dispose(); //  dispose of the material
				this.scene.remove(particles); // remove the points from the scene
			}
			this.particlesGeometry = new THREE.BufferGeometry();
			this.positions  = new Float32Array(this.parameters.particulesCount * 3);
			this.colors = new Float32Array(this.parameters.particulesCount * 3);

			for(let i = 0; i < this.parameters.particulesCount; i++) {
				// const i3 = i * 3;
				this.positions[i] = (Math.random() - 0.5) * (Math.random() * 8);
			}

		this.particlesGeometry.setAttribute(
				'position',
				new THREE.BufferAttribute(this.positions, 3)
			)
		// particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

		// material

		this.particlesMaterial = new THREE.PointsMaterial({
			// color: parameters.particulesColor,
			transparent: true,
			size: this.parameters.particulesSize,
			map: this.particulesTexture,
			alphaMap: this.particulesTexture,
		})

		// Particles
		this.particles = new THREE.Points(this.particlesGeometry, this.particlesMaterial);
		this.scene.add(this.particles);		
	}

	}

}