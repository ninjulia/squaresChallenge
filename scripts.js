//get buttons
const buttons = document.querySelectorAll('button');
//set click requirement based on selecting all buttons OR set a number
const maxButtons = buttons.length;
let buttonList = [];

//remove selected effects from buttons
function resetButtons() {
	//gratuitous confetti effect, disabled for prefers reduced motion
	if (buttonList.length === maxButtons) {
		confetti({ spread: 180, disableForReducedMotion: true });
	}
	if (buttonList.length > 0) {
		//last button in, first out
		let nextButton = buttonList.pop();
		nextButton.classList.toggle('selected');
		//wait until transition stops to get the next button, go back to start
		nextButton.addEventListener('transitionend', resetButtons);
	} else {
		//reset buttons once all effects are done
		buttons.forEach((button) => {
			button.disabled = false;
			button.removeEventListener('transitionend', resetButtons);
		});
		return;
	}
}

//onClick, turn green (via selected class), prevent clicks to .selected buttons, track click order
function handleClick() {
	this.disabled = true;
	this.classList.toggle('selected');
	buttonList.push(this);

	//if this is click 6, begin removing selected class
	if (buttonList.length === maxButtons) {
		//wait until the transition stops, then reverse
		this.addEventListener('transitionend', resetButtons);
	}
}

//add onClick event listeners to the buttons (works with keyboards too!)
buttons.forEach((button) => button.addEventListener('click', handleClick));
