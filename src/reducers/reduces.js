 import { set_users } from "../action/actiontypes";
 const initialState = {
    user:null,

};
const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case set_users: return{
            ...state,
            user:action.user
        }
        default:
            return state;
    }

}
export default userReducer;