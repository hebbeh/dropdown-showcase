# Getting Started with Create React App

The TypeScript + React application was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and contains the examples where the dropdown is showcased in the applications only page. Prettier is used to ensure all files follow the same guidelines.

Try resizing the window to see how the dropdowns place the menu in different scenarios!

# The Dropdown
The `Dropdown`is a composable component that provides the inner components `Dropdown.Menu`, and `Dropdown.Option`. The Dropdown takes three properties; `children`, `renderTrigger` and `menuPlacement`. The children are in all examples wrapped with `Dropdown.Menu` to give them the styling decided for the dropdown. A different wrapper can be used. Inside the menu, the consumer defines each item in the dropdown by wrapping them in `Dropdown.Option`. The `Dropdown.Option` fires the provided action function, as well as handles toggling the dropdown visibility.

To trigger opening and closing the dropdown using a trigger, a `renderTrigger` is passed in as a property. This can be any component, but the user needs to include a support for the trigger to accept an onClick function. This is so that the click is defined inside the trigger so the consumer controls it, and not wrapped around it out of the consumers reach. 

In addition to `Dropdown` there is are some additional components, used for input, composing the examples and the home page,

- `Typography`
- `Divider`
- `Space`
- `Button`


# Get started
#### 1. Dependencies

To run the application on you will need

- Node.js: The JavaScript runtime used to run the React application. The version used for this app is *v14.4.0*
- Yarn: A package/project manager for Node.js applications.

#### 2. Clone the repo to your machine & cd into it

#### 3. Available Scripts

Make sure you are on node version v14.4.0. To install all dependencies, run

### `yarn`

To start the app, run

### `yarn start`

I runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. Currently only two simple tests that render a dropdown and emulate a click on it exist.
