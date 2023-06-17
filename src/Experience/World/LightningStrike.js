import * as THREE from 'three';
import Experience from '../Experience';
import { LightningStrike } from 'three/examples/jsm/geometries/LightningStrike.js'
import thunderAudio from '/audio/thunder.mp3'


export default class LightningStrikes
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.camera = this.experience.camera;
		this.ressources = this.experience.ressources;
		this.timer = this.experience.time;
		this.flashColor = '#2c75ff',
		this.setLightningStrike();
	}

	setLightningStrike()
	{
		this.setLights();
		this.setLightningStrikeParameters();
		this.setGeometry();
		this.setMaterial();
		this.lightningStrike1();
		this.lightningStrike2();
		this.lightningStrike3();
		this.lightningStrike4();
		this.setAudio();
	}

	setLights()
	{
		this.flash = new THREE.PointLight(this.flashColor, 30, 500, 1);
		this.flash.position.set(30, 99, -30);
		this.scene.add(this.flash);
	}

	setLightningStrikeParameters()
	{
		this.rayLightParameters = { 
		    sourceoffset: new THREE.Vector3(0, -6, -150), // When ray starts
		    destOffset: new THREE.Vector3(0, -5, -150), // When ray ends

		    radius0: 1, // Radius main trunk at the start
		    radius1: 0.1, // Radius main trunk at the end
		    radius0factor: 0.5, // Radius of a subray;  = this factor * radius0 parent (Radius multiplier for the first subray)
		    radius1factor: 0.2, // Radius multiplier for the second subray
		    minRadius: 2, // Minimum radiusthat radius0 and radius1 can get
		    maxIterations: 10, // Maximum number of iterations of rays ligtning

		    isEternal: false, // If true, the ray will never disappear
		    birthTime: 0.2, // Time at which the ray is created
		    deathTime: 2, // Time at which the ray disappears
		    timeScale: 0.7, // Speed of the ray
		    propagationTimeFactor: 0.05, // Speed of the ray
		    vanishingTimeFactor: 0.95, // lifetime factor at which ray ends the steady phase
		    subrayPeriod: 1, // Time between subrays
		    subrayDutyCycle: 0.6, // Percentage of time that the ray is active
		    maxSubrayRecursion: 3, // Maximum number of subrays
		    ramification: 7, // Number of subrays (children) per ray (parent)
		    recursionProbability: 1, // Probability of a ray to generate a subray
		    roughness: 0.85, // Roughness of the ray
		    straightness: 0.65, // Straightness of the ray
		}

	}

	setGeometry()
	{
		this.lightningStrikeGeometry = new LightningStrike(this.rayLightParameters);
	}

	setMaterial()
	{
		this.lightningStrikeMaterial = new THREE.MeshBasicMaterial({ color: 0xB0FFFF });
		this.lightningStrikeMaterial.fog = false;
		this.lightningStrikeMaterial.blending = THREE.AdditiveBlending;
	}

	lightningStrike1()
	{
		this.lightningStrikeMesh1 = new THREE.Mesh(this.lightningStrikeGeometry, this.lightningStrikeMaterial)
		this.lightningStrikeMesh1.position.set(30, 0, -30);
		this.lightningStrikeMesh1.scale.set(0.1, 0.15, 0.1);
		this.scene.add(this.lightningStrikeMesh1);
	}

	lightningStrike2()
	{
		this.lightningStrikeMesh2 = new THREE.Mesh(this.lightningStrikeGeometry, this.lightningStrikeMaterial)
		this.lightningStrikeMesh2.position.set(-10, 0, -50);
		this.lightningStrikeMesh2.scale.set(0.1, 0.15, 0.1);
		this.scene.add(this.lightningStrikeMesh2);
	}

	lightningStrike3()
	{
		this.lightningStrikeMesh3 = new THREE.Mesh(this.lightningStrikeGeometry, this.lightningStrikeMaterial)
		this.lightningStrikeMesh3.position.set(-20, 0, 20);
		this.lightningStrikeMesh3.scale.set(0.1, 0.15, 0.1);
		this.scene.add(this.lightningStrikeMesh3);
	}

	lightningStrike4()
	{
		this.lightningStrikeMesh4 = new THREE.Mesh(this.lightningStrikeGeometry, this.lightningStrikeMaterial)
		this.lightningStrikeMesh4.position.set(50, 0, 20);
		this.lightningStrikeMesh4.scale.set(0.1, 0.15, 0.1);
		this.scene.add(this.lightningStrikeMesh4);
	}

	setAudio()
	{
		this.listener = new THREE.AudioListener();
		this.camera.instance.add(this.listener);
		this.thunder = new THREE.Audio(this.listener);
		this.audioLoader = new THREE.AudioLoader();
		this.audioLoader.load(thunderAudio, (buffer) => {
			this.thunder.setBuffer(buffer);
			this.thunder.setLoop(false);
			this.thunder.setVolume(0.2);
			this.thunder.play(0);
		});
		this.scene.add(this.thunder);
	}

	update()
	{
		this.lightningStrikeGeometry.update(this.timer.elapsed * 0.1);
		if (this.timer.elapsed > 2 && this.timer.elapsed < 12)
		{
			if (Math.random() > 0.93 || this.flash.power > 100 || this.timer.elapsed < 5) {
		        if (this.flash.power < 100) {
		                this.flash.position.set(
		                    Math.random() * -30,
		                    98 + Math.random(),
		                    Math.random() * 30
		                );
		            }
		            this.flash.power = 50 + Math.random() * 500;
		        }
		}else
		{
		    this.flash.power = 0;
		}
		if (this.timer.elapsed > 12) {
		        this.scene.remove(this.lightningStrikeMesh1, 
				this.lightningStrikeMesh2,
				this.lightningStrikeMesh3,
				this.lightningStrikeMesh4);
		}
	}
}
