import React from 'react'
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {changeEditingThunk, ChangeUserThunk} from "../../redux/usersReducer";
import Edit from "./Edit";


const EditContainer = (props) => {
    const {item, changeEditingThunk, ChangeUserThunk} = props

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {

        let date = new Date()
        let day = date.getDate() + "." + date.getMonth() + "." + date.getFullYear()
        console.log(data)

        ChangeUserThunk({
            fullName: data.fullName,
            email: data.email,
            pass: data.pass,
            phone: data.phone,
            createDate: item.createDate,
            changeDate: day,
            accType: data.accType,
            id: item.id
        })

        changeEditingThunk()
    }
    return (
        <Edit
            changeEditingThunk={changeEditingThunk}
            onSubmit={onSubmit}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            item={item}
        />
    )
}

const MapStateToProps = (state) => {
    return {
        item: state.LoginReducer.currentItem
    }
}

export default connect(MapStateToProps, {changeEditingThunk, ChangeUserThunk})(EditContainer)