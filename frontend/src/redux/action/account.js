import CookieService from '../../cookies'

export const signin = (account=null) =>{
    return dispatch => {
        if(!account){
            account={};
            account.access_token = CookieService.get('access_token');
            account.token_type = CookieService.get('token_type');
        }else{
            const options = account.expires_at ? {path:'/', expires:account.expires_at.getTime()} : {path:'/'} 
            CookieService.set('access_token', account.access_token, options);
            CookieService.set('token_type', account.token_type, options);
        }
        console.log((new Date(account.expires_at)));
        console.log((new Date()));
        dispatch({
            type: "SIGNIN",
            account: account
        })
    }
}