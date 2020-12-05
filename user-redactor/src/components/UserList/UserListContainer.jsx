import React from 'react'
import {connect} from "react-redux";
import {changeEditingThunk, DeleteUserThunk, setCurrentItemThunk} from "../../redux/usersReducer";
import UserList from "./UserList";
import {Reload} from "../../common/reload";

const UserListContainer = (props) => {
    const {userList, isEditing, DeleteUserThunk, showedArray, setCurrentItemThunk, changeEditingThunk} = props

    const EditChange = (item) => {
        setCurrentItemThunk(item.id)
        changeEditingThunk()
    }

    const DeleteItem = (id) => {
        DeleteUserThunk(id)
        Reload()
    }


    return (
        <UserList
            showedArray={showedArray}
            userList={userList}
            isEditing={isEditing}
            DeleteItem={DeleteItem}
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

export default connect(MapStateToProps, {setCurrentItemThunk, changeEditingThunk, DeleteUserThunk,})(UserListContainer)