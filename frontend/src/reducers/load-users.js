export default function (state=null, action) {
    switch(action.type){
        case 'load_users':
            return action.payload;
        default:
            return state;
    }
}