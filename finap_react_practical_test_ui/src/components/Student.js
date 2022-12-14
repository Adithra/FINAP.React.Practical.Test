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
        if ('firstName' in fieldValues)
            temp.fullName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.mobile = fieldValues.lastName ? "" : "This field is required."
        if ('contactPerson' in fieldValues)
            temp.bloodGroup = fieldValues.contactPerson ? "" : "This field is required."
        if ('contactNo' in fieldValues)
            temp.bloodGroup = fieldValues.contactNo ? "" : "This field is required."
        if ('dateOfBirth' in fieldValues)
            temp.bloodGroup = fieldValues.dateOfBirth ? "" : "This field is required."
        if ('age' in fieldValues)
            temp.bloodGroup = fieldValues.age ? "" : "This field is required."
        if ('emailAddress' in fieldValues)
            temp.email = (/^$|.+@.+..+/).test(fieldValues.emailAddress) ? "" : "Email is not valid."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = commonform(initialFieldValues, validate)

    const handleSubmit = e => {
        e.preventDefault()     
        if (validate()) {
            props.createStudent(values, () => { window.alert('Inserted')})
        }
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
                                    {...(errors.email && { error: true, helperText: errors.firstName })}
                                />
                            </Grid>
                            <Grid item xs={6} >
                                <TextField fullWidth
                                    name="lastName"
                                    variant="outlined"
                                    label="Last Name"
                                    value={values.lastName}
                                    onChange={handleInputChange}
                                    {...(errors.email && { error: true, helperText: errors.lastName })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth
                                    name="contactPerson"
                                    variant="outlined"
                                    label="Contact Person"
                                    value={values.contactPerson}
                                    onChange={handleInputChange}
                                    {...(errors.email && { error: true, helperText: errors.contactPerson })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="contactNo"
                                    variant="outlined"
                                    label="Contact No"
                                    value={values.contactNo}
                                    onChange={handleInputChange}
                                    {...(errors.email && { error: true, helperText: errors.contactNo })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="emailAddress"
                                    variant="outlined"
                                    label="Email Address"
                                    value={values.emailAddress}
                                    onChange={handleInputChange}
                                    {...(errors.email && { error: true, helperText: errors.emailAddress })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="dateOfBirth"
                                    variant="outlined"
                                    label="Date of Birth"
                                    value={values.dateOfBirth}
                                    onChange={handleInputChange}
                                    {...(errors.email && { error: true, helperText: errors.dateOfBirth })}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField fullWidth
                                    name="age"
                                    variant="outlined"
                                    label="Age"
                                    value={values.age}
                                    onChange={handleInputChange}
                                    {...(errors.email && { error: true, helperText: errors.age })}
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
    createStudent: actions.create,
    updateStudent: actions.update
}

export default connect(mapStateToProps, mapActionToProps) (Student);