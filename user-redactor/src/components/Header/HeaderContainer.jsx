import React, {useState} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setFilteredArrayThunk, setShowedArrayThunk} from "../../redux/usersReducer";

const HeaderContainer = (props) => {

    const {userList, filteredArray, setShowedArrayThunk} = props

    const [showReg, setShowReg] = useState(false)
    const RegChange = () => {
        setShowReg(!showReg)
    }

    const handleClickSearch = ({target}) => {
        const array = filteredArray
        let result = []
        if (target.value) {
            result = filteredArray.filter(val => `${val.email} ${val.phone}`.indexOf(target.value) !== -1)
        } else {
            result = array
        }
        setShowedArrayThunk(result)
    }


    const changeShow = (value) => {
        let result = []
        if(value !== "0"){
            result = userList.filter(val => val.accType === value)
        } else {
            result = userList
        }
        setFilteredArrayThunk(result)
    }


    return (
        <Header
            changeShow={changeShow}
            handleClickSearch={handleClickSearch}
            RegChange={RegChange}
            showReg={showReg}
        />
    )

}

const MapStateToProps = (state) => {
    return {
        userList: state.LoginReducer.userList,
        filteredArray: state.LoginReducer.filteredArray
    }
}

export default connect(MapStateToProps, {setShowedArrayThunk, setFilteredArrayThunk})(HeaderContainer)