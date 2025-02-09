import React, { useState } from "react";

function RegisterForm(){
    const [data, setData] = useState({
        fname: "",
        lname: ""
    })
    const [showName, setShowName] = useState(false);


    function submitHandler(e){
        e.preventDefault()
        setShowName(true);
    }

    return (
        <>
        <h1>Full Name Display</h1>
        <form onSubmit={submitHandler}>
        <label htmlFor="fname">First Name:</label>
        <input type="text" name="fname" id="fname" required onChange={(e) => setData({...data, fname:(e.target.value)})}/><br />
        <label htmlFor="lname">Last Name:</label>
        <input type="text" name="lname" id="lname" required onChange={(e) => setData({...data, lname:(e.target.value)})}/><br />
        <button type="submit">Submit</button>
        </form>
        {
            (showName) ? <span>Full Name: {data.fname} {data.lname}</span> : null
        }
        </>
    )
}

export default RegisterForm;