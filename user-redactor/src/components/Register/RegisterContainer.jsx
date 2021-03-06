import React from 'react'
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {RegisterThunk} from "../../redux/usersReducer";
import Register from "./Register";
import {Reload} from "../../common/reload";


const RegisterContainer = (props) => {

    const {RegisterThunk, RegChange} = props
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        let date = new Date()
        let day = date.getDate() + "." + date.getMonth() + "." + date.getFullYear()

        RegisterThunk(
            {
                fullName: data.fullName,
                email: data.email,
                pass: data.pass,
                phone: data.phone,
                createDate: day,
                changeDate: day,
                accType: "client"
            })

        RegChange()
        Reload()
    }
    return (
        <Register
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
            RegChange={RegChange}
        />
    )
}

const MapStateToProps = () => {
    return {}
}

export default connect(MapStateToProps, {RegisterThunk})(RegisterContainer)