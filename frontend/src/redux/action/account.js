import CookieService from '../../cookies'

export const signin = (account=null) =>{
    return dispatch => {
        if(!account){
            account={};
            account.access_token = CookieService.get('access_token');
            account.token_type = CookieService.get('token_type');
        }else{
            const options = account.expires_at ? {path:'/', expires:(new Date(account.expires_at))} : {path:'/'} 
            CookieService.set('access_token', account.access_token, options);
            CookieService.set('token_type', account.token_type, options);
        }
        dispatch({
            type: "SIGNIN",
            account: account
        })
    }
}

export const logout = () => {
    return dispatch =>{
        CookieService.remove('access_token');
        CookieService.remove('token_type');
        dispatch({
            type: 'LOGOUT'
        })
    }
}