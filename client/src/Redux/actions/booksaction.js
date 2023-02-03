import axios from 'axios'
import { useState } from 'react'

export const getbooksaction = (params) =>async (dispatch)=>{

    dispatch({type:'GET_BOOKS_REQ'})
    try {
        const res = await axios.get('http://localhost:4000/main/books',params)
        // console.log(res.data)
        dispatch({type:'GET_BOOKS_SUCC', payload:res.data})     
    } catch (error) {
        dispatch({type:'GET_BOOKS_FAIL'})
        // console.log(error)
    }
}