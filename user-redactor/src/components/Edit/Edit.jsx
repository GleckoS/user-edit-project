import React from 'react'
import styled from "styled-components";
import {ErrorMessages} from "../../common/constants";

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
const Select = styled.select`
    width: 75%;
    height: 44px;
    border: none;
    @media(max-width: 999px){
    
    }
`
const Item = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    position: relative;
    @media(max-width: 1048px){
        flex-direction: column;
        height: 75px;
    }
`
const Label = styled.label`
    width: 25%;
    text-align: center;
    padding: 10px 0;
    @media(max-width: 1048px){
        width: 50%;
    }
`
const Input = styled.input`
    width: 75%;
    height: 22px;
    border: none;
    padding: 10px 20px;
    background-color: #d0d0d0;
    @media(max-width: 1048px){
        width: calc(100% - 40px);
    }
`
const ErrorMessage = styled.div`
    position: absolute;
    color: #ff0000;
    right: 0;
    @media(max-width: 1048px){
        width: 200px;
        bottom: -17px;
    }
`
const ButtonsContainer = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1048px){
        margin-top: 0;
    }
`
const Button = styled.button`
    border: none;
    padding: 10px 25px;
    margin: 5px;
    transition: .3s all linear;
    border-radius: 2px;
    &:focus,
    &:active,
    &:hover{
        background-color: #d0d0d0;
    }
`

const Edit = (props) => {

    const {onSubmit, register, errors, handleSubmit, item, changeEditingThunk} = props

    return(
        <Popup>
            <Container onSubmit={handleSubmit(onSubmit)}>
                <Item>
                    <Label>Full Name: </Label><Input name="fullName" defaultValue={item.fullName} ref={register({required: true, pattern:  /^.+\s.+\s?.*$/i})}/>
                    {errors.fullName && <ErrorMessage>{ErrorMessages.name}</ErrorMessage>}
                </Item>
                <Item>
                    <Label>E-mail: </Label><Input name="email" defaultValue={item.email} ref={register({required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}/>
                    {errors.email && <ErrorMessage>{ErrorMessages.email}</ErrorMessage>}
                </Item>
                <Item>
                    <Label>Password: </Label><Input name="pass" defaultValue={item.pass} ref={register({required: true, minLength: 4, maxLength: 20})}/>
                    {errors.pass && <ErrorMessage>{ErrorMessages.pass}</ErrorMessage>}
                </Item>
                <Item>
                    <Label>Phone number: </Label><Input name="phone" defaultValue={item.phone} ref={register({required: true, pattern: /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/})}/>
                    {errors.phone && <ErrorMessage>{ErrorMessages.number}</ErrorMessage>}
                </Item>
                <Item>
                    <Label>Acc Type:</Label>
                    <Select name="accType" ref={register}>
                        <option value="client">client</option>
                        <option value="partner">partner</option>
                        <option value="admin">admin</option>
                    </Select>
                </Item>
                <ButtonsContainer>
                    <Button type="submit">Submit</Button>
                    <Button onClick={() => {changeEditingThunk()}}>Close</Button>
                </ButtonsContainer>
            </Container>
        </Popup>
    )
}

export default Edit