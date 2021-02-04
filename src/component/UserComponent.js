import React from 'react'
import UserService from '../service/UserService'

class UserComponent extends React.Component{

    constructor(props) {
        super(props);
        this.state = {users: [],
            id: '',
            name: ''
        }

        this.updateUser = this.updateUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
    }


    deleteUser(id){
        UserService.deleteUser(id).then(r =>{
            this.setState({users: this.state.deleteUser(id)});
        });
    }

    updateUser(id){
        let user = {id: this.state.id,name: this.state.name}
        UserService.updateUser(user, id).then(r => {
            this.props.history.push('http://localhost:8080/user/update/'+ id)
        });
    }

    componentDidMount() {
        UserService.getUsers().then((response) =>{
            this.setState({users: response.data})
        });
    }

    render() {
        return(
            <div>
                <h1 className = "text-center"> Users List</h1>
                <table className = "table table-striped">
                    <thead>
                    <tr>

                        <td> User Id </td>
                        <td> User Name </td>
                        <td> Actions </td>
                    </tr>

                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key = {user.id}>
                                    <td> {user.id}</td>
                                    <td> {user.name}</td>
                                    <td>
                                        <button onClick={ () => this.updateUser(user.id)} className="btn btn-info">Update </button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUser(user.id)} className="btn btn-danger">Delete </button>
                                    </td>
                                </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        )
    }

}
export default UserComponent