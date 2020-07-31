const initialState = {};

const myReducer = (state=initialState,action) => {
    switch(action.type){
        case 'SIGNIN':
            if(action.account){
                return {
                    ...state,
                    access_token:action.account.access_token,
                    token_type: action.account.token_type,
                    is_login: action.account.access_token ? true : false
                }
            }
            return {
                ...state,
                access_token:'',
                token_type: '',
                is_login: false
            }
        default:
            return state;
    }
}

export default myReducer;