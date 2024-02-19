import React from "react";
import { configureStore } from "@reduxjs/toolkit"; 
import taskReducer from '../redux/taskSlice'

export default configureStore({
    reducer:{
        tasks: taskReducer
    }
})