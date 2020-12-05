import React from "react";
import {initialiseThunk} from "./redux/usersReducer";
import {connect} from "react-redux";
import UserListContainer from "./components/UserList/UserListContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App(props) {

    props.initialiseThunk()
    debugger
    return (
        <>
            {props.isFetching
                ? null/*<Loader/>*/
                : <>
                    <HeaderContainer/>
                    <UserListContainer/>
                </>
            }

        </>
    );
}


const MapStateToProps = (state) => {
    return {
        isFetching: state.LoginReducer.isFetching
    }
}

export default connect(MapStateToProps, {initialiseThunk})(App)