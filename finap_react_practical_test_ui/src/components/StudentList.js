import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/student";
import { student } from "../reducers/students";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Student from "./Student";

const StudentView = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllStudents()
    }, [])

    const onDelete = id => {
        if (window.confirm('Are you sure to delete this record?'))
            props.deleteDCandidate(id)
    }

    return (
        <Paper className="AddGap">
            <h1>Student Registration</h1>
            <Grid container>
                <Grid item xs={3}>
                    <div className="card">
                        <Student  {...({ currentId, setCurrentId })} />
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className="card">
                        <TableContainer>
                            <Table className="table table-responsive ">
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
                                                    <TableCell>{new Date(record.dateOfBirth).toLocaleDateString()}</TableCell>
                                                    <TableCell>{record.age}</TableCell>
                                                    {/*<TableCell>{record.classroomID}</TableCell>*/}
                                                    <TableCell>
                                                        <ButtonGroup variant="text">
                                                            <Button><EditIcon color="primary"
                                                                onClick={() => { setCurrentId(record.id) }} /></Button>
                                                            <Button><DeleteIcon color="secondary"
                                                                onClick={() => onDelete(record.id)} /></Button>
                                                        </ButtonGroup>
                                                    </TableCell>
                                                </TableRow>)
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
    studentsList: state.student.list
})

const mapActionToProps = {
    fetchAllStudents: actions.fetchAll,
    deleteDCandidate: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(StudentView);