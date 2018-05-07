# react-simple-starter

## What is this

There are so many different npm packages out there to get started with a React project. I have been using create-react-app for a long time, but I have been wanting to experiment with the latest React features.

I built this from the ground up including the webpack config to ensure everything works together.

So this is a React starter, complete with react-router v4, hot-reload &amp; sass.
Additionally, the project utilizes the new Context API and soon will utilize Suspense once it has some more support.

## How to install

`npm i -g react-simple-starter` to install the package.

`react-simple-starter folderName` to start the boilerplate into `folderName` folder.

## Project structure

I have been building React apps for awhile and I have come to the conclusion that this structure is what works best for my work flow. 

**Assets:** This is for any images, svgs, icons etc.

**Components:** Only stateless components here. All events and dynamic text are passed as props.

* These should adhere to the AirBnB syntax as:

    `const myButton = ({text, action}) => (<button onClick={action}>Hello {text}</button>)`
* Use Fragments to wrap components with multiple html elements
* Style is set by global colors/theme in utilities section.

**Containers:** Each container is a class based function that holds a local state object for that particular route. All components are referenced in the render method.
For Context: The routes are wrapped as Providers so that all child components in its render method have access to state and actions. This way, if a child component nested 3 nodes deep calls a method that updates its parent containers state, all children of this container are re-rendered and the new state is passed.

**Style:** Contains all colors, media queries, global font sizes, colors etc.

* Colors: Object that is referenced any time inline css-in-js is used.
* Theme: Object with media queries, box sizes, scroll-bar etc.
* Style: SCSS file with each container/component specific style

**Utilities:** Tests, Service Workers, all other items.

## Tests

Tests are written with the Mocha and Jasmine.

## Eslint

This project uses AirBnB Javascript specs so you can write error-free react and javascript code, if you use Visual Studio Code, you can install eslint from the extension tab to activate this function, other editors just google _name of the editor + eslint_ you will find how to enable it for your editor.

## How to contribute

I will update this later, but for now feel free to make pull requests and add issues. I know that a lot of these new features will break soon so be kind:)
