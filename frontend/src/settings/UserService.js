import Api from './Api'

export default {
  checkEmail(params){
    return Api().get('api/email/'+ params.email)
  },
  createAccount(params){
    return Api().post('api/signup',params)
  },
  loginAccount(params){
    return Api().post('api/login',params)
  },
  isValidToken(token){
    return Api().get('user/home',{
      headers:{
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Authorization": "Bearer "+ token
        //"Authorization":token
      }
    })
  }
}
