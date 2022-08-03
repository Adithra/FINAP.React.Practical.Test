import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import Student from './components/Student';
import { Container } from '@mui/material';
import StudentList from './components/StudentList';

function App() {
    return (
        <Provider store={store}>
            <Container maxWidth="lg">
                <StudentList />
            </Container>
        </Provider>
    );
}

export default App;