import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
	constructor() {
		super()
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		window.addEventListener('resize', () => {
			this.resize();
		});
	}
	resize() {
		this.width = window.innerWidth;
		this.height = window.innerHeight;
		this.pixelRatio = Math.min(window.devicePixelRatio, 2); // 1, 1.5, 2
		this.trigger('resize');
	}
}