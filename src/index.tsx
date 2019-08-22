import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { getTrainFrequenciesActionCreator } from './pages/train-frequency/actions/ActionCreator';
import { BrowserRouter as Router } from 'react-router-dom';
import AppState  from './AppState';
import configureStore from './store';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap.js'
 
interface Props {
  store: Store<AppState>; 
}

/* 
Create a root component that receives the store via props
and wraps the App component with Provider, giving props to containers.

Make the store available to all container 
components in the application without passing it explicitly 
*/
const Root: React.FunctionComponent<Props> = props => {
  return (
    <Provider store={props.store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
};

// Generate the store
const store = configureStore();
//dispatch to get all data
store.dispatch(getTrainFrequenciesActionCreator());

// Render the App
ReactDOM.render(<Root store={store} />, document.getElementById(
  'root'
) as HTMLElement);
