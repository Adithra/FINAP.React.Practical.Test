import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/student";

const Student = ({ props }) => {   
    return (
       <div>Test</div>
    );
}

const mapStateToProps = state => ({
    studentsList: state.student.list
})

const mapActionToProps = {
    fetchAllStudents: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps) (Student);