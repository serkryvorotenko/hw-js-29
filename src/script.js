import React from "react";
import {createRoot} from "react-dom/client";
import {store} from "./store.js";


import './style/style.scss'
import {Provider} from "react-redux";
import App from "./component/App.jsx";


const root = createRoot(document.getElementById('app'));

root.render(<Provider store={store}>
    <App/>
</Provider>);


