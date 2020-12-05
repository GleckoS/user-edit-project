import React from 'react'
import EditContainer from "../Edit/EditContainer";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const ItemContainer = styled.div`
    width: 300px;
    margin: 20px 10px;
    background-color: #ffffff;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`

const Item = styled.div`
  padding: 10px;
`

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
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
`

const UserList = (props) => {

    const { showedArray, isEditing, DeleteItem, EditChange} = props

    return (
        <section>
            <Wrapper>
                {showedArray.map(item =>
                    <ItemContainer>
                        <Item>
                            <p>ФИО: {item.fullName}</p>
                            <p>Email: {item.email}</p>
                            <p>Pass: {item.pass}</p>
                            <p>Phone: {item.phone}</p>
                            <p>AccType: {item.accType}</p>
                            <p>Create: {item.createDate}</p>
                            <p>Last Change: {item.changeDate}</p>
                        </Item>
                        <Flex>
                            <Button onClick={() => {EditChange(item)}}>Редактировать</Button>
                            <Button onClick={() => {DeleteItem(item.id)}}>Удалить</Button>
                        </Flex>
                    </ItemContainer>
                )}
                {isEditing
                    ? <EditContainer/>
                    : null
                }
            </Wrapper>
        </section>
    )
}

export default UserList