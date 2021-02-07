# Dropdown

`dropdown-showcase` is a TypeScript + React application bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and contains a dropdown component. To showcase the dropdown there is are three examples on the home page. 

Try resizing the window to see how the dropdowns place the menu in different scenarios!

For design reference, see the [Figma sketch 🖍](https://www.figma.com/file/g83tMuzotKP5enbBxnmEJr/Dropdown-%F0%9F%8D%B1?node-id=0%3A1).

Prettier is used to ensure all files follow the same guidelines.

# The API
The `Dropdown`is a composable component that provides the inner components `Dropdown.Menu`, and `Dropdown.Option`. The Dropdown takes three properties; `children`, `renderTrigger` and `menuPlacement`. The children are in all examples wrapped with `Dropdown.Menu` to give them the styling decided for the dropdown. A different wrapper can be used. Inside the menu, the consumer defines each item in the dropdown by wrapping them in `Dropdown.Option`. 

The `Dropdown.Option` takes children and an onChange function. It contains styling for the size its content takes, background color, hover and pressed state, and padding. The provided onChange fires when the `Dropdown.Option` is pressed/clicked. Internally, it also hides the dropdown menu. It's put inside the `Dropdown` to signal it's a core part of the parent component.

```
export interface OptionProps {
  children: ReactNode;
  onChange(): void;
}
```

To trigger opening and closing the dropdown using a trigger, a `renderTrigger` is passed in as a property. This can be any component, but the user needs to include a support for the trigger to accept an onClick function. This is so that the click is defined inside the trigger so the consumer controls it, and not wrapped around it out of the consumers reach. In the below example the visibility for the menu is toggled on and off when the div around the `Icon` is clicked.

```
 renderTrigger={(onChange: any) => {
        return (
          <div onClick={onChange}>
            <Icon type="menu" />
          </div>
        );
      }}
```

In addition to `Dropdown` there is are some additional components, used for input, composing the examples and the home page,

- `Typography`
- `Divider`
- `Space`
- `Button`

The positioning of the menu is done with [`Popper.js` lib](https://popper.js.org/).

# Get started
#### 1. Dependencies

To run the application on you will need

- Node.js: The JavaScript runtime used to run the React application. The version used for this app is *v14.4.0*
- Yarn: A package/project manager for Node.js applications. The version used for this app is *1.22.4*

#### 2. Clone the repo to your machine & cd into it

#### 3. Available Scripts

Make sure you are on node version v14.4.0. To install all dependencies, run

### `yarn`

To start the app, run

### `yarn start`

I runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode. Currently only two simple tests that render a dropdown and emulate a click on it exist.

# TODOS
- Only breakpoints for phone and desktop taken into consideration to save time, design and breakpoints needed for tablets, TV as well.

- Ellipsis functionaity in Typography to avoid cutting too long text in `OptionList`.

- Move colors to color tokens, only use variables when referencing colors.

- Menu could be extracted as a separate card component, depending on the overall design and component structure of the system.

- Options could be extracted as a separate `ListItem` component, that can be used in tables etc. Depending on the difference is styling this would vary in value? Might become messy with props and too broad usecase.

- Test screens for Jest snapshot testing of components, as well as functional testing of the `Dropdown`.

- Support for tab navigation, where the focus state is only shown when a keyboard is used. Decided to not include the first iteration of tab navigation added in [9892746](https://github.com/hebbeh/dropdown-showcase/commit/98927461e8aca8a2f1b7fb6b270e14381bd1fd62), since it meant the other interactive states where not properly handled.
