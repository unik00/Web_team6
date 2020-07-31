const initialState = {};

const myReducer = (state=initialState,action) => {
    switch(action.type){
        case 'SIGNIN':
            if(action.account){
                return {
                    ...state,
                    access_token:action.account.access_token,
                    token_type: action.account.token_type
                }
            }
            return {
                ...state,
                access_token:'',
                token_type: ''
            }
        default:
            return state;
    }
}

export default myReducer;