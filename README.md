Here is the approach with which I did:

1. 	I thought of a UI first and then divided into multiple components. 
2. 	I have divided our application into multiple pages in our website. So, if you see you 
3. 	Think of a Model now, like you are trying to render a graph which is an array of objects and each objects has 
	x & y cordinate. So, our application state is an array of objects having x and y properties. I don't know the actual usage of data but I can assume y being number of trains. Hence we name our model as TrainsFrequency.
4. 	You now can create Application State file - AppState.tsx, which contains an array of TrainsFrequency. 
5. 	You can now decide which actions are possible on your model. We decided to have following:
	- getTrainsFrequencies: get the frequencies of trains for the given dates.
		* When there is no date input, we return all full data.
		* When there are input, then we filter data based on dates.
	- AddFrequency: You should be able to add frequency for any given date. 
6. 	Create Action Creators now, because we have two actions, we will have two action creators.
7. 	Now come up with reducer with pure funcitons.
8.  It's store turns,,,




This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
