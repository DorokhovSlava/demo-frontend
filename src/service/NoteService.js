import React from 'react'
import axios from 'axios'

const NOTES_REST_API_URL = 'http://localhost:8080/note/all';

class NoteService {

    getNotes(){
        return axios.get(NOTES_REST_API_URL);
    }

}


export default new NoteService;