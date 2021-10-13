import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {auth,createUserWithEmailAndPassword} from "../routes/firebase";
import {Link} from "react-router-dom";

function SignUp() {
    const [stName, setStName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    


    return (
        <div style={{ textAlign: "center" }}>
            <h1>
                Sign Up
            </h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 2, width: '45ch' },
                }}
                noValidate
                autoComplete="off"
            >


                <TextField
                    id="outlined-textarea"
                    label="User Name"
                    placeholder="Name"
                    multiline
                    onChange={(event) => { setStName(event.target.value) }}
                    value={stName} type="text" /><br />
                <TextField
                    id="outlined-textarea"
                    label="Email"
                    placeholder="Email"
                    multiline
                    onChange={(event) => { setEmail(event.target.value) }}
                    value={email} type="email" /><br />
                <TextField
                    id="outlined-textarea"
                    label="Password"
                    placeholder="Password"
                    multiline
                    onChange={(event) => { setPass(event.target.value) }}
                    value={pass} type="password" /><br />


                <br />

                <TextField
                    id="outlined-textarea"
                    label="Phone"
                    placeholder="Phone"
                    multiline
                    onChange={(event) => { setPhone(event.target.value) }}
                    value={phone} type="text" /><br />
                     <TextField
                    id="outlined-textarea"
                    label="City"
                    placeholder="City"
                    multiline
                    onChange={(event) => { setCity(event.target.value) }}
                    value={city} type="text" />


            </Box>
            {/* Student Name: <input type="text"
                onChange={(event) => { setStName(event.target.value) }}
                value={stName} />
            <br /> */}
            {/* Roll Number: <input type="text"
                onChange={(event) => { setRollNum(event.target.value) }}
                value={rollNum} /> */}

            <button style={{width:"200px",height:"50px",backgroundColor:"lightBlue", color:"black",fontSize:"20px",fontWeight:"bold"}} onClick={ async () => {
                let student = {
                    name: stName,
                    password: pass,
                    emailE1: email,
                    phoneE1: phone
                }
                try{

                    let {user}=await createUserWithEmailAndPassword(auth,email,pass)
                }
                catch(err){
                    console.log("err",err)
                }
                // console.log(student)

                setStName('')
                setPass('');
                setEmail('');
                setPhone('');
                setCity('')

            }}>Sign Up</button>


            {/* {
                studentData.length > 0 ? <StudentTable allStudents={studentData} /> : null
            } */}
<Link to='/'>SIGN IN</Link>
        </div>
    )
}


export default SignUp;





































