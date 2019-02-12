import React from 'react'
import User from './user-table'
import {connect} from "react-redux";
import {loadUsers} from "../actions";
import {bindActionCreators} from "redux";

class UserList extends React.Component{
    componentDidMount() {
        this.props.loadUsers()
        console.log(this.props.users)
    }


    render() {
        if(this.props.users == null){
            return(null)
        }else {
            return(
               <div style={{marginTop: 50}}>
                    <User data={this.props.users}/>
               </div>
            )
        }
    }
}

function mapStateToProps(state){
    return{
        users: state.users
    }
}

function matchDispatchToProps(dispatch) {
    return(bindActionCreators({loadUsers: loadUsers}, dispatch))
}

export default connect(mapStateToProps, matchDispatchToProps) (UserList);