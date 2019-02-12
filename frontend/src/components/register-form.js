import React from 'react'
import axios from 'axios'
import {bindActionCreators} from "redux";
import {loadUsers} from "../actions";
import {connect} from "react-redux";

class RegistrationForm extends React.Component{
    constructor(){
        super();
        this.state = {
            phone: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitClicked = this.onSubmitClicked.bind(this)
    }

    handleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    onSubmitClicked(e){
        e.preventDefault();
        let fd = new FormData();
        fd.append('phone', e.target.elements.phone.value)
        fd.append('password', e.target.elements.password.value)

        axios.post('http://127.0.0.1:8000/api/', fd)
            .then(this.setState({
                phone: '',
                password: '',
            }))
            .then(() => this.props.loadUsers())
    }






    render() {
        return (
            <div className='container'>
                <div>
                    <h1>Registration From</h1>
                </div>
                <form onSubmit={this.onSubmitClicked}>
                    <div className='form-group'>
                        <label>Phone</label>
                        <input
                            type='text'
                            name='phone'
                            value={this.state.phone}
                            onChange={this.handleChange}
                            className='form-control'
                            placeholder='Enter Your Phone number*'
                        />
                    </div>

                    <div className='form-group'>
                        <label>Password</label>
                        <input
                            type='password'
                            name='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            className='form-control'
                            placeholder='Enter Your Password*'
                        />
                    </div>
                    <input
                        type='submit'
                        name='submit'
                        className='btn btn-primary'
                    />
                </form>
            </div>
        );
    }
}

function matchDispatchToProps(dispatch) {
    return(bindActionCreators({loadUsers: loadUsers}, dispatch))
}

export default connect(null, matchDispatchToProps) (RegistrationForm);