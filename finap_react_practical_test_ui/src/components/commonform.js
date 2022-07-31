import React, { useState, useEffect } from "react";

const Commonform = (initialFieldValues, validate) => {
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target
        const fieldValue = { [name]: value }
        setValues({
            ...values,
            ...fieldValue
        })
        validate(fieldValue)
    }  

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
    }

    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    };
}

export default Commonform;