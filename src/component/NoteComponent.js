import React from 'react'
import UserService from '../service/NoteService'

class NoteComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        UserService.getNotes().then((response) =>{
            this.setState({notes: response.data})
        });
    }

    render() {
        return(
            <div>
                <h1 className = "text-center"> Notes List</h1>
                <table className = "table table-striped">
                    <thead>
                    <tr>
                        <td> Note Id</td>
                        <td> Date Create</td>
                        <td> Date Notice</td>
                        <td> Note text</td>
                        <td> Note Title</td>
                        <td> User id</td>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.notes.map(
                            note =>
                                <tr key = {note.note_id}>
                                    <td> {note.note_id}</td>
                                    <td>{note.dateCreate}</td>
                                    <td>{note.dateNotice}</td>
                                    <td> {note.noteText}</td>
                                    <td> {note.title}</td>
                                    <td> {note.user_id}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default NoteComponent