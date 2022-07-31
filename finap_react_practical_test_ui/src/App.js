import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Student from './components/Student';

function App() {
    return (
        <Provider store={store}>
            <Student />
        </Provider>
    );
}

export default App;