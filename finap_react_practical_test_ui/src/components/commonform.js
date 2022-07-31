import React, { useState, useEffect } from "react";

const Commonform = (initialFieldValues) => {
    const [values, setValues] = useState(initialFieldValues)

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }  

    const resetForm = () => {
        setValues({
            ...initialFieldValues
        })
    }

    return {
        values,
        setValues,
        handleInputChange
    };
}

export default Commonform;