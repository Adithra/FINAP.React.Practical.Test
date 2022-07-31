import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/student";
import { student } from "../reducers/students";
import StudentList from "./StudentList";

const initialFieldValues = {
    firstName: '',
    lastName: '',
    contactPerson: '',
    contactNo: '',
    emailAddress: '',
    dateOfBirth: '',
    age: ''
}

const Student = (props) => {
    const {
        values,
        setValues
    } = useState(initialFieldValues)

    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <form autoComplete="off" noValidate>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField
                                    name="fName"
                                    variant="outlined"
                                    label="First Name"
                                    value={values.firstName}
                                />
                            </Grid>
                        </Grid>
                    </ form>
                </Grid>
                <Grid item xs={6}>
                  <StudentList />
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
    studentsList: state.student.list
})

const mapActionToProps = {
    fetchAllStudents: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps) (Student);