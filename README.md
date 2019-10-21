This is my take on [Gympass' Front End Test](https://github.com/Gympass/front-end-coding-test) <br />

Check out the **[Live Demo](http://willianwelbert.github.io/gympass-front-end-test)**

## General Approach

  I chose to approach this project as two pages rendering a list of items. These items are either repositories or commits, depending on that variation the application renders using different props.

  Repositories and commits come from `reactjs`'s account (instead of my own), since the quantity of information there is bigger, allowing me to deal with a more realistic scenario.

### ES6 Features

  As requested [here](https://github.com/Gympass/front-end-coding-test#solution), I explain two ES6+ features used in this project:

  1 - Object Destructuring
  Used in this project especially when referencing props is necessary along with nested objects:

  ```
  const {
    itemType,
    repoURLParam,
    reposData : { isFetchingRepos, repoCount, reposList, ...},
    commitsData : {isFetchingCommits, lastCommiter, commits, ...},
    error : { error, errorMessage }
    } = props;
  ```
  Then **avoiding repetition**, making code **easier to read**, calling `itemType` instead of `props.itemType`, and more importantly calling `repoCount` instead of `props.reposData.repoCount` etc.

  
  2 - Default Parameters
  Whenever a function depends on parameters passed to it, a default parameter is passed along with their declaration:

  ```
  export const fetchMoreCommitsAsync = (repoName, pageNumber = '2' ) => {
    ...
  }
  ```
  If the prop **pageNumber** is not passed at function call, **'2'** will be provided as default. This is an extra layer to avoid errors, improves readabilty of the code and makes the function more modular.


### Stack

* React / Hooks (useEffect);
* React Router DOM
* Redux
* Redux Thunk
* [React Lottie](https://github.com/chenqingspring/react-lottie) (for animations)
* Styled Components
* Storybook
* Jest + Enzyme

### Components Layout

To check each component in isolation run `yarn storybook`, the source for those are in `src/stories`

### Next Steps

If continued, I imagine that the following features could be implemented ~~(a.k.a I wish I had time for this)~~:

* Debounce
  - Searching experience might be non-optimal since filters run on every key stroke, might become a performance issue

* Integration Testing

## Please note

Since I'm using `react-lottie`, testing is configured a little differently. If `yarn test` does not run as expected, please make sure that you have `@rescripts/cli` and `canvas-prebuilt` correctly installed as dev dependencies. For more information, check [this issue](https://github.com/pixijs/pixi.js/issues/4769).
