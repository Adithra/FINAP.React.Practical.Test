import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Student from './components/Student';
import StudentList from './components/StudentList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
    return (
        <Provider store={store}>
            <div className="container">
                <StudentList />
            </div>
        </Provider>
    );
}

export default App;