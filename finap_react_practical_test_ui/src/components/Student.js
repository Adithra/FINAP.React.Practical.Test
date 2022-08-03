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
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('contactPerson' in fieldValues)
            temp.contactPerson = fieldValues.contactPerson ? "" : "This field is required."
        if ('contactNo' in fieldValues)
            temp.contactNo = fieldValues.contactNo ? "" : "This field is required."
        if ('dateOfBirth' in fieldValues)
            temp.dateOfBirth = fieldValues.dateOfBirth ? "" : "This field is required."
        if ('age' in fieldValues)
            temp.age = fieldValues.age ? "" : "This field is required."
        if ('emailAddress' in fieldValues)
            temp.emailAddress = (/^$|.+@.+..+/).test(fieldValues.emailAddress) ? "" : "Email is not valid."
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
    } = commonform(initialFieldValues, validate, props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            const onSuccess = () => {
                resetForm()                
            }
            if (props.currentId == 0)
                props.createStudent(values, onSuccess)
            else
                props.updateStudent(props.currentId, values, onSuccess)
        }
    }

    useEffect(() => {
        if (props.currentId != 0) {
            setValues({
                ...props.studentsList.find(x => x.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])

    return (
        <form autoComplete="off" noValidate className={theme.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <TextField fullWidth
                        name="firstName"
                        variant="outlined"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleInputChange}
                        {...(errors.firstName && { error: true, helperText: errors.firstName })}
                    />
                </Grid>
                <Grid item xs={6} >
                    <TextField fullWidth
                        name="lastName"
                        variant="outlined"
                        label="Last Name"
                        value={values.lastName}
                        onChange={handleInputChange}
                        {...(errors.lastName && { error: true, helperText: errors.lastName })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth
                        name="contactPerson"
                        variant="outlined"
                        label="Contact Person"
                        value={values.contactPerson}
                        onChange={handleInputChange}
                        {...(errors.contactPerson && { error: true, helperText: errors.contactPerson })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth
                        name="contactNo"
                        variant="outlined"
                        label="Contact No"
                        type="number"
                        value={values.contactNo}
                        onChange={handleInputChange}
                        {...(errors.contactNo && { error: true, helperText: errors.contactNo })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth
                        name="emailAddress"
                        variant="outlined"
                        label="Email Address"
                        value={values.emailAddress}
                        onChange={handleInputChange}
                        {...(errors.emailAddress && { error: true, helperText: errors.emailAddress })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth
                        name="dateOfBirth"
                        variant="outlined"
                        label="Date of Birth"
                        value={values.dateOfBirth}
                        onChange={handleInputChange}
                        {...(errors.dateOfBirth && { error: true, helperText: errors.dateOfBirth })}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField fullWidth
                        name="age"
                        variant="outlined"
                        label="Age"
                        type="number"
                        value={values.age}
                        onChange={handleInputChange}
                        {...(errors.age && { error: true, helperText: errors.age })}
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