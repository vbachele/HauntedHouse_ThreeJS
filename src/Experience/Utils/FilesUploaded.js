import sources from "../sources.js";
import Ressources from "./Ressources.js";


export default class UploadFiles
{
	constructor()
	{
		this.ressources = new Ressources(sources);
		this.ressources.on('ready', () =>
		{
			console.log('Files uploaded');
			this.loaded = true;
		}
		)
	}
}