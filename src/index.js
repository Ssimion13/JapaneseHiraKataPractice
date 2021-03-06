import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
// import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './redux'



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
// registerServiceWorker();
