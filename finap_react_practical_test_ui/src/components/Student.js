import { Button, createTheme, Grid, Paper,  TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/student";
import { student } from "../reducers/students";
import StudentList from "./StudentList";
import commonform from "./commonform"

const theme = createTheme({
    root: {
        '& .MuiTextField-root': {
            spacing: 1,
            minWidth: 230
        }
    }
});

const initialFieldValues = {
    firstName: '',
    lastName: '',
    contactPerson: '',
    contactNo: '',
    emailAddress: '',
    dateOfBirth: '',
    age: ''
}

const Student = ({classes, ...props }) => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile ? "" : "This field is required."
        if ('bloodGroup' in fieldValues)
            temp.bloodGroup = fieldValues.bloodGroup ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        handleInputChange,
        resetForm
    } = commonform(initialFieldValues)

    const handleSubmit = e => {
        e.preventDefault()       
    }

    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <form autoComplete="off" noValidate className={theme.root} onSubmit={handleSubmit}>
                        <Grid container>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="firstName"
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
                                    name="contactNo"
                                    variant="outlined"
                                    label="Contact No"
                                    value={values.contactNo}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="emailAddress"
                                    variant="outlined"
                                    label="Email Address"
                                    value={values.emailAddress}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="dateOfBirth"
                                    variant="outlined"
                                    label="Date of Birth"
                                    value={values.dateOfBirth}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="age"
                                    variant="outlined"
                                    label="Age"
                                    value={values.age}
                                    onChange={handleInputChange}
                                />
                            </Grid>
                            <div>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                >
                                    Submit
                                </Button>
                                <Button
                                    variant="contained"
                                    onClick={resetForm}
                                >
                                    Reset
                                </Button>
                            </div>
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