import {combineReducers} from "redux";
import users from './load-users'

const allReducers = combineReducers({
    users: users
})

export default allReducers;