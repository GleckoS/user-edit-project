import React from 'react'
import Register from "../Register/RegisterContainer";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 960px;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    @media(max-width: 460px){
        display: block;
    }
`
const Item = styled.div`
`
const Input = styled.input`
    border: none;
    padding: 10px 20px;
    transition: .2s all linear;
    background-color: #eeeeee;
    margin: 5px;
    border-radius: 2px;
    &:focus{
        background-color: #d0d0d0;
    }

    &:hover{
        background-color: #d0d0d0;
    }
    @media(max-width: 460px){
        width: calc(100% - 50px);
    }
`

const Button = styled.button`
    border: none;
    padding: 10px;
    margin: 5px;
    transition: .3s all linear;
    border-radius: 2px;
    &:focus,
    &:active,
    &:hover{
        background-color: #d0d0d0;
    }
    @media(max-width: 460px){
        width: calc(100% - 10px);
    }
`
const Select = styled.select`
    margin: 5px;
    width: 100px;
    height: 40px;
    @media(max-width: 460px){
       width: calc(100% - 10px);
    }
`

const Header = (props) => {

    const {RegChange, showReg, handleClickSearch, changeShow} = props

    return(
        <header>
            <Wrapper>
                <Item>
                    <Select onChange={(value) => {changeShow(value.target.value)}}>
                        <option value="0">all</option>
                        <option value="client">client</option>
                        <option value="partner">partner</option>
                        <option value="admin">admin</option>
                    </Select>
                </Item>
                <Item>
                    <form>
                        <Input placeholder="Please input email or phone:" onChange={handleClickSearch}/>
                    </form>
                </Item>
                <Item>
                    <Button onClick={() => {RegChange()}}>Registration</Button>
                </Item>
            </Wrapper>
            {showReg
                ? <Register RegChange={RegChange}/>
                : null
            }
        </header>
    )
}

export default Header
