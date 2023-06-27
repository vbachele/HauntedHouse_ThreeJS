import Experience from "../../Experience.js"
import Floor from "./Floor.js";
import Environment from "./Environment.js";
import House from "./House.js";
import Graveyard from "./Graveyard.js";
import Ghost from "./Ghost.js";
import Fog from "./Fog.js";
import Bush from "./Bush.js";
import LightningStrikes from "./LightningStrike.js";
import Rain from "./Rain.js";
import Crow from "./Crow.js";
import Moon from "./Moon.js";
import * as CANNON from "cannon-es";


export default class World
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.time = this.experience.time;
		this.ressources = this.experience.ressources;
		this.launchAnimation = false;
		this.ressources.on('ready', () =>
		{
			this.environment = new Environment();
			this.fog = new Fog();
			this.floor = new Floor();
			this.rain = new Rain();
			this.moon = new Moon();
		});
	}


	update()
	{
		if(this.experience.home.button.clicked && !this.launchAnimation)
		{
			this.ghosts = new Ghost();
			this.bushes = new Bush();
			this.lightningStrike = new LightningStrikes();
			this.crow = new Crow();		
			this.graveyard = new Graveyard();
			this.house = new House();
			this.launchAnimation = true;
		}
		if (this.physicsWorld)
			this.physicsWorld.step(1 / 60, this.experience.delta, 3);
		if(this.house)
			this.house.doorLightUpdate();
		if(this.ghosts)
		{
			this.ghosts.update();
		}
		if(this.lightningStrike)
		{
			this.lightningStrike.update();
		}
		if(this.rain)
		{
			this.rain.update();
		}
		if(this.crow)
		{
			this.crow.update();
		}
	}
}