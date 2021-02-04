import React from 'react'
import axios from 'axios'

const USERS_All_REST_API_URL = 'http://localhost:8080/user/';
const USER_ADD_REST_API_URL = 'http://localhost:8080/user/add';
const USER_DELETE_REST_API_URL = "http://localhost:8080/user/delete/"

class UserService {

    getUsers() {
        return axios.get(USERS_All_REST_API_URL + 'all');
    }

    addUser(user) {
        return axios.post(USER_ADD_REST_API_URL, user);
    }

    deleteUser(id){
        return axios.delete(USER_DELETE_REST_API_URL + id)
    }

    updateUser(){
        return axios.put(USERS_All_REST_API_URL)
    }
}


export default new UserService()