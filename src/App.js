import React from 'react';
import './App.css';
import UserComponent from './component/UserComponent';
import NoteComponent from "./component/NoteComponent";
import AddUserForm from "./component/AddUserForm";

function App() {
    return (
        <div>
            <UserComponent/>
            <NoteComponent/>
            <AddUserForm />
        </div>
    )
}

export default App;