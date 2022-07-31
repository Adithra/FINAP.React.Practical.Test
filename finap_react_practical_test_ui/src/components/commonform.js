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

    return {
        values,
        setValues,
        handleInputChange
    };
}

export default Commonform;