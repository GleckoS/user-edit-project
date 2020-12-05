let initialSliderState = {
    userList: [],
    filteredArray: [],
    showedArray: [],
    currentItem: null,
    isFetching: true,
    isEditing: false
}

const SET_CURRENT_ITEM = "SET_CURRENT_ITEM",
    CHANGE_EDITING = "CHANGE_EDITING",
    SET_SHOWED_ARRAY = "SET_SHOWED_ARRAY",
    SET_FILTERED_ARRAY = "SET_FILTERED_ARRAY",
    INITIALISE = "INITIALISE"

const LoginReducer = (state = initialSliderState, action) => {
    switch (action.type) {
        case INITIALISE: {
            return {
                ...state,
                userList: action.userList,
                showedArray: action.userList,
                filteredArray: action.userList,
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
        case SET_FILTERED_ARRAY: {
            debugger
            return {
                ...state,
                filteredArray: action.arr,
                showedArray: action.arr
            }
        }
        default: {
            return state
        }
    }
}

export default LoginReducer

const setCurrentItem = (id) => ({type: SET_CURRENT_ITEM, id})
const changeEditing = () => ({type: CHANGE_EDITING})
const setShowedArray = (arr) => ({type: SET_SHOWED_ARRAY, arr})
const setFilteredArray = (arr) => ({type: SET_FILTERED_ARRAY, arr})
const initialise = (userList) => ({type: INITIALISE, userList})

export const setCurrentItemThunk = (id) => {
    return (dispatch) => {
        dispatch(setCurrentItem(id))
    }
}

export const ChangeUserThunk = (currentUser) => {
    debugger
    return (dispatch) => {
        debugger
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
                                dispatch(initialise(response))
                            }
                        )
                }
            )
    }
}

export const initialiseThunk = () => {
    return (dispatch) => {
        fetch(`http://localhost:8000/users`)
            .then(res => res.json())
            .then(
                (response) => {
                    dispatch(initialise(response))
                }
            )
    }
}

export const setFilteredArrayThunk = (arr) => {

    return (dispatch) => {
        debugger
        dispatch(setFilteredArray(arr))
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
                                dispatch(initialise(response))
                            }
                        )
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
                                dispatch(initialise(response))
                            }
                        )
                }
            )
    }
}


