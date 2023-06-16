import * as THREE from 'three';
import Experience from '../Experience';

export default class Ghost
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.timer = this.experience.time;
		this.setGhost1();
		this.setGhost2();
		this.setGhost3();
	}

	setGhost1()
	{
		this.ghost1 = new THREE.PointLight('#ff00ff', 2, 3);
		this.ghost1.castShadow = true;
		this.ghost1.shadow.mapSize.width = 256;
		this.ghost1.shadow.mapSize.height = 256;
		this.ghost1.shadow.camera.far = 7;
		
		this.scene.add(this.ghost1);
	}

	setGhost2()
	{
		this.ghost2 = new THREE.PointLight('#00ffff', 2, 3);
		this.ghost2.castShadow = true;
		this.ghost2.shadow.mapSize.width = 256;
		this.ghost2.shadow.mapSize.height = 256;
		this.ghost2.shadow.camera.far = 7;
		this.scene.add(this.ghost2);
	}

	setGhost3()
	{
		this.ghost3 = new THREE.PointLight('#ffff00', 2, 3)
		this.ghost3.castShadow = true;
		this.ghost3.shadow.mapSize.width = 256;
		this.ghost3.shadow.mapSize.height = 256;
		this.ghost3.shadow.camera.far = 7;
		this.scene.add(this.ghost3);
	}

	/**
	 * ANIMATIONS
	 */

	update()
	{
		this.ghost1animation();
		this.ghost2animation();
		this.ghost3animation();
	}

	ghost1animation()
	{
		this.ghost1Angle = this.timer.elapsed * 0.5;
		this.ghost1.position.x = Math.cos(this.ghost1Angle) * 4;
		this.ghost1.position.z = Math.sin(this.ghost1Angle) * 4;
		this.ghost1.position.y = Math.sin(this.timer.elapsed * 3);
	}

	ghost2animation()
	{
		this.ghost2Angle = - this.timer.elapsed * 0.32;
		this.ghost2.position.x = Math.cos(this.ghost2Angle) * 5;
		this.ghost2.position.z = Math.sin(this.ghost2Angle) * 5;
		this.ghost2.position.y = Math.sin(this.timer.elapsed * 4) + Math.sin(this.timer.elapsed * 2.5);
	}

	ghost3animation()
	{
		this.ghost3Angle = - this.timer.elapsed * 0.18;
		this.ghost3.position.x = Math.cos(this.ghost3Angle) * (7 + Math.sin(this.timer.elapsed * 0.32));
		this.ghost3.position.z = Math.sin(this.ghost3Angle) * (7 + Math.sin(this.timer.elapsed * 0.5));
		this.ghost3.position.y = Math.sin(this.timer.elapsed * 4) + Math.sin(this.timer.elapsed * 2.5);
	}
}
