import Home from './Home.js';

export default class Button
{
		constructor()
		{
			this.home = new Home();
			this.displayText();
			this.handleClick();
			this.clicked = false;
		}
		
		displayText()
		{
			this.content = CSSRulePlugin.getRule(".content::before");
			this.h1 = document.querySelector(".textHome");
			this.button = document.querySelector(".playButton");
			this.tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
			this.tl.from(
			  this.content,
			  {delay: 0.5, duration: 4, cssRule: { scaleX: 0}})
			  .to(this.h1, { duration: 2, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" , y: '30px'}, "-=3")
			  .to(this.button, { duration: 2, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)", y: '30px' }, "-=2");
		}

		handleClick()
		{
			// this.ressources.on('ready', () =>
			// {
				const self = this;
				this.button.addEventListener("click", () => {
				this.tl
					.to(".container", {
						duration: 2,
						opacity: 0,
						y: "-100%",
						onComplete: function () {
							self.clicked = true
							self.update();
							// window.location.href = "/Experience/haunted-house.html";
						}
					}, "-=0.5");
				});
			// })
		}

		update()
		{
			this.clicked = true
		}
}