import Particles from './Particles.js';
import Button from './Button.js';
import Experience from '../../Experience.js';

export default class Home
{
	constructor()
	{
		this.home = new Experience();
		this.scene = this.home.scene;
		this.time = this.home.time;
		this.ressources = this.home.ressources;
		this.camera = this.home.camera;
		this.ressources.on('ready', () =>
		{
			// this.particules = new Particles();
			this.button = new Button();		
		});
	}

	update()
	{
		if (this.button)
		{
			if(this.button.clicked)
			{
				this.button.update();
			}
		}
		// if(this.button.clicked)
		// {
		// 	this.rain.update();
		// }
		// this.particules.update();
	}
}