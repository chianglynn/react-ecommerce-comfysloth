# React E-Commerce Project - ComfySloth

This is a react project from the [React Tutorial and Projects Course](https://www.udemy.com/course/react-tutorial-and-projects-course/).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Structure](#structure)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Other Notes](#other-notes)

## Overview

### Screenshot

![img](https://github.com/chianglynn/react-ecommerce-comfysloth/blob/main/src/screenshot/screenshot.png?raw=true)


### Structure

![img](https://github.com/chianglynn/react-ecommerce-comfysloth/blob/main/structure.png?raw=true)

### Links

- Solution URL: [https://github.com/chianglynn/react-ecommerce-comfysloth](https://github.com/chianglynn/react-ecommerce-comfysloth)
- Live Site URL: [https://react-ecommerce-comfysloth.netlify.app](https://react-ecommerce-comfysloth.netlify.app)

## My process

### Built with

- Application - React (Hooks)
- Global state management - React useContext, React useReducer
- Routing - React Router
- Styles - CSS, styled-components
- [Netlify Functions](https://www.netlify.com/products/functions/)
- [Stripe Checkout](https://stripe.com/docs/payments/checkout)

### What I learned

- Pluging the "Stripe Checkout" into the React application using "Netlify Functions"(a serverless function).
- Using "Auth0" to add authentication and gain access to user profile information in the React application.

The useful resources are as follows.

- [Netlify - Configure and deploy Functions](https://docs.netlify.com/functions/configure-and-deploy/)
- [Netlify - Build serverless functions with JavaScript
](https://docs.netlify.com/functions/build-with-javascript/)
- [Stripe - Custom payment flow integration](https://stripe.com/docs/payments/integration-builder)
- The payment process flow on Stripe

![img](https://b.stripecdn.com/docs-srv/assets/charge-workflow.330ac424ab8c0a423195b3e1020eedb9.png)

-[Auth0 - Docs for React](https://auth0.com/docs/quickstart/spa/react)

## Author

- Website - [Lynn Chiang's Portfolio](https://chianglynn.github.io/personal-website/)
- Blog - [Lynn's Self-taught Records](https://lynnchiang.wordpress.com/)
- Frontend Mentor - [@chianglynn](https://www.frontendmentor.io/profile/chianglynn)

## Other Notes

#### Older React Version

```
"react": "^16.13.1",
"react-dom": "^16.13.1",
"react-scripts": "3.4.3",
```

#### Current React Version

```
"react": "^17.0.1",
"react-dom": "^17.0.1",
"react-scripts": "4.0.0",
```

#### Alternative fix

.env file in the root
FAST_REFRESH=FALSE