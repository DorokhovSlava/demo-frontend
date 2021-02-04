import React from 'react'
import UserService from "../service/UserService";
import {Component} from "react/cjs/react.production.min";

class AddUserForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            name: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {name: this.state.name};
        console.log('user => ' + JSON.stringify(user));
        UserService.addUser(user, this.state.name).then(res => {
            this.props.history.push('http://localhost:8080/user/add')
        })
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    }


    render() {
        return (
            <form>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.changeNameHandler}
                />
                <button className={'btn save user'} onClick={this.saveUser}>Add new user</button>
            </form>
        )
    }
}

export default AddUserForm