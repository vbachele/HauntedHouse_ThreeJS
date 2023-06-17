import Experience from "../Experience.js"
import Floor from "./Floor.js";
import Environment from "./Environment.js";
import House from "./House.js";
import Graveyard from "./Graveyard.js";
import Ghost from "./Ghost.js";
import Fog from "./Fog.js";
import Bush from "./Bush.js";
import LightningStrikes from "./LightningStrike.js";

export default class World
{
	constructor()
	{
		this.experience = new Experience();
		this.scene = this.experience.scene;
		this.ressources = this.experience.ressources;
		this.ressources.on('ready', () =>
		{
			this.floor = new Floor();
			this.environment = new Environment();
			this.fog = new Fog();
			this.house = new House();
			this.graveyard = new Graveyard();
			this.ghosts = new Ghost();
			this.bushes = new Bush();
			this.lightningStrike = new LightningStrikes();
		});
	}

	update()
	{
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
	}
}