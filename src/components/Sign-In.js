import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {auth,signInWithEmailAndPassword} from "../routes/firebase"
import {Link} from "react-router-dom";
import { useHistory } from 'react-router';



function SignIn() {
    const [stName, setStName] = useState('');
    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');
   let history=useHistory()



    return (
        <div style={{ textAlign: "center" }}>
            <h1>
                Sign In
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


               

            </Box>
            

            <button style={{width:"200px",height:"50px",backgroundColor:"lightBlue", color:"black",fontSize:"20px",fontWeight:"bold"}} onClick={ async() => {
                let student = {
                    name: stName,
                    password: pass,
                    emailE1: email,
                }
                try{

                    let {user}=await signInWithEmailAndPassword(auth,email,pass );
                    history.push("/Home")
                    
                }catch(err){
console.log("err",err)
                }
                console.log(student)

                setStName('');
                setPass('');
                setEmail('');

            }}>Sign In</button>

                <Link to='/Sign Up'>SIGN UP</Link>
           
        </div>
    )
}


export default SignIn;
