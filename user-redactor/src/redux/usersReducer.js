let initialSliderState = {
    userList: [],
    showedArray: [],
    currentItem: null,
    isFetching: true,
    isEditing: false
}
const SET_USERS = "SET_USERS",
    SET_CURRENT_ITEM = "SET_CURRENT_ITEM",
    CHANGE_EDITING = "CHANGE_EDITING",
    SET_SHOWED_ARRAY = "SET_SHOWED_ARRAY"

const LoginReducer = (state = initialSliderState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return {
                ...state,
                userList: action.userList,
                showedArray: action.userList,
                isFetching: false
            }
        }
        case SET_CURRENT_ITEM: {
            let newCurrentItem = state.userList.filter(e => e.id === action.id)
            return {
                ...state,
                currentItem: {...newCurrentItem[0]}
            }
        }
        case CHANGE_EDITING: {
            return {
                ...state,
                isEditing: !state.isEditing
            }
        }
        case SET_SHOWED_ARRAY: {
            return {
                ...state,
                showedArray: action.arr
            }
        }
        default: {
            return state
        }
    }
}

export default LoginReducer

const setUsers = (userList) => ({type: SET_USERS, userList})
const setCurrentItem = (id) => ({type: SET_CURRENT_ITEM, id})
const changeEditing = () => ({type: CHANGE_EDITING})
const setShowedArray = (arr) => ({type: SET_SHOWED_ARRAY, arr})

export const setCurrentItemThunk = (id) => {
    return (dispatch) => {
        dispatch(setCurrentItem(id))
    }
}

export const ChangeUserThunk = (currentUser) => {
    return (dispatch) => {
        fetch(`http://localhost:8000/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(currentUser)
        })
            .then(
                () => {
                    fetch(`http://localhost:8000/users`, {
                        method: 'GET'
                    })
                        .then(res => res.json())
                        .then(
                            (response) => {
                                dispatch(setUsers(response))
                            }
                        )
                }
            )
    }
}

export const DeleteUserThunk = (id) => {
    return (dispatch) => {
        fetch(`http://localhost:8000/users/${id}`, {
            method: 'DELETE'
        })
            .then(
                () => {
                    fetch(`http://localhost:8000/users`)
                        .then(res => res.json())
                        .then(
                            (response) => {
                                dispatch(setUsers(response))
                            }
                        )
                }
            )
    }
}

export const SetUsersThunk = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/users`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(setUsers(response))
                }
            )
    }
}

export const setShowedArrayThunk = (arr) => {
    return (dispatch) => {
        dispatch(setShowedArray(arr))
    }
}

export const changeEditingThunk = () => {
    return (dispatch) => {
        dispatch(changeEditing())
    }
}

export const RegisterThunk = (userInform) => {
    debugger
    return (dispatch) => {
        fetch(`http://localhost:8000/users`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInform)
        })
            .then(
                () => {
                    fetch(`http://localhost:8000/users`)
                        .then(res => res.json())
                        .then(
                            (response) => {
                                dispatch(setUsers(response))
                            }
                        )
                }
            )
    }
}


