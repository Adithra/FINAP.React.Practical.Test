import { Button, ButtonGroup, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/student";
import { student } from "../reducers/students";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StudentView = ({ classes, ...props }) => {
    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllStudents()
    }, [])

    const onDelete = id => {
    }

    return (
        <Paper>
            <Grid container>
                <Grid item xs={6}>
                    <Student  {...({ currentId, setCurrentId })} />
                </Grid>
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

export default connect(mapStateToProps, mapActionToProps)(Student);