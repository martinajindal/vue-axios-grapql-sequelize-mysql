const ID_TOKEN_KEY = 'id_token'

export default {
    getToken() {
        return window.localStorage.getItem(ID_TOKEN_KEY)
    },

    saveToken(token) {
        window.localStorage.setItem(ID_TOKEN_KEY, token)
    },

    destroyToken() {
        window.localStorage.removeItem(ID_TOKEN_KEY)
    },

    // Set user token and info in localStorage and cookie
    loginSetUserLocalStorageAndCookie(token, user) {
        window.localStorage.setItem(ID_TOKEN_KEY, token)
        window.localStorage.setItem('user', JSON.stringify(user))
    },

    authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}
}