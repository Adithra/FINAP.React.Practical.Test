import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/student";

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})

const Student = ({ classes, ...props }) => {
   
    return (
       <div>Test</div>
    );
}

export default Student;