import React, {useState} from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {setShowedArrayThunk} from "../../redux/usersReducer";


const HeaderContainer = (props) => {

    const {userList} = props

    const [showReg, setShowReg] = useState(false)
    const RegChange = () => {
        setShowReg(!showReg)
    }

    const array = userList

    const handleClickSearch = ({ target }) => {
        let result = []
        if (target.value) {
            result = userList.filter(val => `${val.email} ${val.phone}`.indexOf(target.value) !== -1)
        } else {
            result = array
        }
        props.setShowedArrayThunk(result)
    }

    return(
        <Header
            handleClickSearch={handleClickSearch}
            RegChange={RegChange}
            showReg={showReg}
        />
    )

}

const MapStateToProps = (state) => {
    return{
        userList: state.LoginReducer.userList
    }
}

export default connect(MapStateToProps, {setShowedArrayThunk})(HeaderContainer)