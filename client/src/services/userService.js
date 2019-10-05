var axios = require('axios')
var ES6Promise = require('es6-promise')
ES6Promise.polyfill()
const ApiService = {
    get( apiurl) {
      return axios.get(apiurl)
      .then(response => {
          return response.data
        })
        .catch(response => {
            return response.data
        })
    },

    post( apiurl,bodyFormData) {
        return axios.post(apiurl,bodyFormData)
        .then(response => {
            return response
          })
        .catch(err => {
          const res = {
              message : err.response.data.message,
              status : err.response.status
          }
          return res;
        
        })
    },

    patch( apiurl,bodyFormData) {
      return axios.patch(apiurl,bodyFormData)
      .then(response => {
          return response
        })
      .catch(err => console.log(err))
    }
    
}
  export default ApiService



export const UserService = {
  checkLogin() {
    return ApiService.get( 'http://localhost:3001/users/checklogin' )
  },

  selectedCandidate(candidateID) {
    return ApiService.get( 'http://localhost:3001/candidates/'+candidateID)
  },

  login(userCredentials) {
    return ApiService.post( 'http://localhost:3001/users/login', userCredentials)
  },

  logout(token) {
      console.log(token)
        return ApiService.post( 'http://localhost:3001/users/logout', token)
  },

  updateCandidate(candidate) {
    console.log(candidate)
    return ApiService.patch( 'http://localhost:3001/candidates/'+candidate['_id'], candidate)
  }
}