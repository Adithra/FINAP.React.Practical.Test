import { Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/student";
import { student } from "../reducers/students";

const Student = (props) => {
    useEffect(() => {
        props.fetchAllStudents()
    }, [])

    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>Form</Grid>
                <Grid item xs={6}>Form Here</Grid>
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