import React from 'react'
import styled from "styled-components";

const Popup = styled.section`
    position: fixed;
    max-width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
`
const Container = styled.form`
     position: absolute;
     left: 25%;
     right: 25%;
     top: 25%;
     bottom: 25%;
     margin: auto;
     border-radius: 20px;
     background: white;
     padding: 20px; 
`

const Register = (props) => {

    const {register, handleSubmit, errors, onSubmit, RegChange} = props

    return(
        <Popup>
            <Container onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Full Name: <input name="fullName" ref={register({required: true, pattern:  /^.+\s.+\s?.*$/i})}/></label>
                </div>
                <div>
                    <label>E-mail: <input name="email" ref={register({required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}/></label>
                </div>
                <div>
                    <label>Password: <input type="password" name="pass" ref={register({required: true, minLength: 4, maxLength: 20})}/></label>
                </div>
                <div>
                    <label>Phone number: <input name="phone" ref={register({required: true, pattern: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/})}/></label>
                </div>
                <input type="submit"/>
                <button onClick={() => {RegChange()}}>Close</button>
            </Container>
        </Popup>
    )
}

export default Register