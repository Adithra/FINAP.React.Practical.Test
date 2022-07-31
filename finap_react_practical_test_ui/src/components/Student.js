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

    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
    }


    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <form autoComplete="off" noValidate>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="fName"
                                    variant="outlined"
                                    label="First Name"
                                    value={values.firstName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField fullWidth
                                    name="lastName"
                                    variant="outlined"
                                    label="Last Name"
                                    value={values.lastName}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth
                                    name="contactPerson"
                                    variant="outlined"
                                    label="Contact Person"
                                    value={values.contactPerson}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="fName"
                                    variant="outlined"
                                    label="Contact No"
                                    value={values.contactNo}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="emailAddress"
                                    variant="outlined"
                                    label="Email Address"
                                    value={values.emailAddress}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="dateOfBirth"
                                    variant="outlined"
                                    label="Date of Birth"
                                    value={values.dateOfBirth}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    name="age"
                                    variant="outlined"
                                    label="Age"
                                    value={values.age}
                                    onChange={handleInputChange}
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