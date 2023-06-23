import Home from '../Home.js';
import Particles from './Particles.js';
import Button from './Button.js';

export default class World
{
	constructor()
	{
		this.home = new Home();
		this.scene = this.home.scene;
		this.time = this.home.time;
		this.particules = new Particles();
		this.button = new Button();
	}

	update()
	{
		// this.particules.update();
	}
}