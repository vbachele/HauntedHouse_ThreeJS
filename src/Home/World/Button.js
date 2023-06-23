

export default class Button
{
		constructor()
		{
			this.displayText();
			this.handleClick();
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
			this.button.addEventListener("click", () => {
			this.tl
				.to(".container", {
					duration: 3,
					opacity: 0,
					y: "-100%",
					onComplete: function () {
						window.location.href = "/Experience/haunted-house.html";
					}
				}, "-=0.5");
			});
		}
		showButton() 
		{
			this.button.style.display = "block";
		}
}