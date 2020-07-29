let initialState = null;

const myReducer = (state=initialState,action) => {
    switch(action.type){
        case 'SIGNIN':
            return {
                account:action.account
            }
        default:
            return state;
    }
}

export default myReducer;