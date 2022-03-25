# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
My challenge is to build out this advice generator app using the [Advice Slip API](https://api.adviceslip.com) and get it looking as close to the design as possible.

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Web](/images/screenshot.jpeg)

### Links

- Solution URL: [Github](https://github.com/salma247/Advice-generator-app)
- Live Site URL: [Live site](https://salma247.github.io/Advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

This is my first time dealing with APIs! 🎉

```js
 var url = `https://api.adviceslip.com/advice`;
  
    fetch(url)
      .then(response => {
        return response.json();
      })
  
      .then(data => {
        /* created variables to store the data from the api */
        let slipId = data.slip.id;
        let slipAdvice = data.slip.advice;
  
        id.textContent = `Advice #${slipId}`;
        advice.textContent = `${slipAdvice}`;
      })
  
    //error text is thrown if the data fetched cannot be retrieved
    .catch(err => alert("Something not good happened"));
  };
```

## Author

- LinkedIn - [Salma Ahmed](https://www.linkedin.com/in/salma-ahmed-mohammed/)
- Frontend Mentor - [@salma247](https://www.frontendmentor.io/profile/salma247)

