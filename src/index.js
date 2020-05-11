import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
 import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
 import Loading from './components/Loading';
// phần react-redux
/*import { createStore } from 'redux';
import myReducer from './reducers/index';
import { Provider } from 'react-redux';

const store = createStore(
	myReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
*/

import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './reducers/index';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducers,composeWithDevTools(
  applyMiddleware(thunk,sagaMiddleware)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}>
		<React.StrictMode>
			<App />
			<ToastContainer />
			<Loading />
		</React.StrictMode>
	</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
