import React from 'react'
import {connect} from "react-redux";
import {changeEditingThunk, DeleteUserThunk, setCurrentItemThunk} from "../../redux/usersReducer";
import UserList from "./UserList";

const UserListContainer = (props) => {
    const {userList, isEditing, DeleteUserThunk, showedArray} = props

    const EditChange = (item) => {
        props.setCurrentItemThunk(item.id)
        props.changeEditingThunk()
    }







    return (
        <UserList
            showedArray={showedArray}
            userList={userList}
            isEditing={isEditing}
            DeleteUserThunk={DeleteUserThunk}
            EditChange={EditChange}
        />
    )
}

const MapStateToProps = (state) => {
    return {
        isEditing: state.LoginReducer.isEditing,
        showedArray: state.LoginReducer.showedArray
    }
}

export default connect(MapStateToProps, {setCurrentItemThunk, changeEditingThunk, DeleteUserThunk})(UserListContainer)