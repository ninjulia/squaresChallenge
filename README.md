# Six Squares Coding Challenge

Code solution for the coding challenge presented in the FreeCodeCamp article: [How to Build Successful Projects as a Junior Developer](https://www.freecodecamp.org/news/how-to-build-projects-as-a-junior-developer/) by Spruce Emmanuel.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Continued Development](#continued-development)
- [Acknowledgments](#Acknowledgments)

## Overview

### The Challenge

- Build 6 squares with no color
- Each square turns green on click
- When all 6 squares have turned green, all squares return to no color
- Squares return to initial state in the order that they were clicked
- Squares do not return to initial state at the same time

### Screenshot

![screenshot](./screenshot.png?raw=true)

### Links

- Solution URL [github.com/ninjulia/squaresChallenge](https://github.com/ninjulia/squaresChallenge)
- Live Site URL: [ninjulia.github.io/squaresChallenge](https://ninjulia.github.io/squaresChallenge/)

## My Process

- Step 1: Create the Button HTML

  - Build HTML leveraging buttons for built in accessibility
  - Use `type="button"` to prevent page submissions
  - Give each button text for screen readers, apply `sr-only` class to hide visually
  - Give each button a unique id to leverage when selected color is removed

- Step 2: Set up CSS to toggle class && leverage transition timing

  - Reset button styles for consistent display cross browser
  - Set up CSS with transition timing (delay when applying && removing class)
  - Leverage `prefers-reduced-motion:no-preference` and CSS custom properties for 1s transition timing ONLY IF no preference is indicated.

- Step 3: Set up JS to change button color on click

  - Add `click` event listener to each button
  - Prevent additional clicks to selected buttons
  - Add `.selected` class
  - Track which button was clicked via `buttonList` array
  - If 6 buttons are clicked, add an event listener to the last clicked button and start reversing process

- Step 4: Revert buttons to starting state based on the reverse order they were clicked

  - Loop through `buttonList` and grab the last button clicked
  - Remove `.selected` class and add a `transitionend` event listener to begin the process with the new last button only after transition is complete
  - Once all button styling has been reverted, reset buttons to start fresh

- Step 5: Gratuitous improvements

  - Add descriptive header and footer attributions
  - Leverage Google Fonts for consistent display across browsers
  - Leverage Utopia provided font/spacing units for more fluid layouts without using media queries
  - Leverage CSS Grid for layout
  - Set up themeing using Material Design for shades of green (because `green` is ugly)
  - Leverage CSS custom properties for light and dark mode
  - Add button::after element to use a cool 'growing dot' method to apply color changes
  - Add a button:hover/:focus animation because why not?
  - Add confetti effect when all buttons clicked and process is about to reverse

### Built With

- Semantic HTML markup
- CSS custom properties
- CSS grid
- CSS transition timings
- Vanilla JS

### What I Learned

I took on this challenge after glancing at the "How to Think About the Problem" section within the initial article and noticing Spruce Emmanuel was using buttons. I usually try to avoid using buttons out side of a `form` element, but after some googling I realized that Spruce had the right idea. Using `buttons` instead of `divs` gives you built-in keyboard accessibility - which is something I was planning on working on anyway. As a note, this IS NOT a use case for empty link tags since there are no urls to visit. Since I'd never actually used buttons in this manner, I wanted to see how hard it would be to style them.

In addition, I knew I could leverage `transitionend` to space out removing the color from the clicked buttons. In the article, Spruce used a timing function. I'm not sure what the performance impacts are, but I figured for this small example why not add a little pizazz to the design to solve the same problem? My choice did, however, result in my having to add a `removeEventListener` on the transitionend event to each button to fully reset them.

### Continued Development

In order to track the order the buttons were clicked, I ended up pushing them to an array. My initial intent was to grab the buttons by their ids to remove the styling, but found I could just pop them off the array, do the reset and move on to the next one on transition end. While I avoided having to loop through the `buttonList` array, this did result in a recursive function. I am not sure what the performance trade-offs are on that. Calling `.pop()` to get the target button does have the added benefit of clearing the array as the function progresses.

Overall, I'm pleased with the functionality of my code to solve the problem as described. Would this solution work as well for a larger set of buttons? What's the business use case for this?

## Acknowledgments && Resources

- Google Fonts [Open Sans](https://fonts.google.com/specimen/Open+Sans)
- Refresher on the sr-only class [Inclusively Hidden](https://css-tricks.com/inclusively-hidden/)
- Button CSS resets from [Normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)
- Leveraged [utopia.fyi](https://utopia.fyi/) for sizing
- Why use `<button>` vs a styled `div`? [When To Use The Button Element](https://css-tricks.com/use-button-element/)
- Confetti effect **with disableForReducedMotion options** via [Canvas Confetti](https://github.com/catdad/canvas-confetti)
