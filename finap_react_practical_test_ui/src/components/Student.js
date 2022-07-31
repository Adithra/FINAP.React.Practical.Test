import { Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
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
                <Grid item xs={6}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Contact Person</TableCell>
                                    <TableCell>Contact No.</TableCell>
                                    <TableCell>Email Address</TableCell>
                                    <TableCell>DateOfBirth</TableCell>
                                    <TableCell>Age</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.studentsList.map((record, index) => {
                                        return (
                                            <TableRow key={index} hover>
                                                <TableCell>{record.firstName}</TableCell>
                                                <TableCell>{record.lastName}</TableCell>
                                                <TableCell>{record.contactPerson}</TableCell>
                                                <TableCell>{record.contactNo}</TableCell>
                                                <TableCell>{record.emailAddress}</TableCell>
                                                <TableCell>{record.dateOfBirth}</TableCell>
                                                <TableCell>{record.age}</TableCell>
                                                <TableCell>{record.classroomID}</TableCell>
                                            </TableRow>)
                                    })
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
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