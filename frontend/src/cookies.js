import Cookies from 'universal-cookie';

const cookie = new Cookies();

class CookieService {
    get(key) {
        return cookie.get(key)
    }

    set(key, value, options={path:'/'}){
        cookie.set(key,value, options)
    }

    remove(key){
        cookie.remove(key)
    }
}

export default new CookieService();