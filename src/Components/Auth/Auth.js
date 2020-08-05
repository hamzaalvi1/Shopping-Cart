class Auth{

isAuthenticated = false;


isLogIn(){
    return this.isAuthenticated = true;

}
isLogOut(){
    return this.isAuthenticated = false
}

}
export default new Auth()