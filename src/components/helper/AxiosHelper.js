import React from 'react'
import axios from 'axios'

const apiEp = "http://www.omdbapi.com/?apikey=feadd3a2&"

export const fetchMovie = (title) => {
    try {
        const response = axios.get(apiEp + "t=" + title)
        return response
    } catch (error) {
        return error.message;
    }
}
