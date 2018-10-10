import ApiService from '../common/api.service'
import JwtService from '../common/jwt.service'
import queryBuilder from 'gql-query-builder'
import { LOGIN, VERIFY_TITLE_REF, LOGOUT, REGISTER, CHECK_AUTH, UPDATE_USER } from './actions.type'
import { SET_AUTH, PURGE_AUTH, SET_ERROR } from './mutations.type'
import { API_URL } from '../common/config';
import routes from '../router';

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
}

const getters = {
  currentUser(state) {
    return state.user
  },
  isAuthenticated(state) {
    return state.isAuthenticated
  }
}

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve) => {
      ApiService
        .post(API_URL, queryBuilder({
          type: 'query',
          operation: 'userLogin',
          data: credentials,
          fields: ['user {firstname, lastname, email}', 'token']
        }))
        .then(response => {
          let error = '';
          if (response.data.errors && response.data.errors.length > 0) {
            error = response.data.errors[0].message
            alert(error)
          } else if (response.data.data.userLogin.token !== '') {
            const token = response.data.data.userLogin.token
            const user = response.data.data.userLogin.user
            // loginSetUserLocalStorageAndCookie(token, user)
            resolve();
          }
        })
        .catch(error => {
          alert("Login Response error::: " + error);
        })

    }).then(response => {
      routes.push({ name: 'home' });
    })
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH)
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService
        .post('users', { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user)
          resolve(data)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    })
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader()
      ApiService
        .get('user')
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user)
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors)
        })
    } else {
      context.commit(PURGE_AUTH)
    }
  },
  [UPDATE_USER](context, payload) {
    const { email, username, password, image, bio } = payload
    const user = {
      email,
      username,
      bio,
      image
    }
    if (password) {
      user.password = password
    }

    return ApiService
      .put('user', user)
      .then(({ data }) => {
        context.commit(SET_AUTH, data.user)
        return data
      })
  }
}

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true
    state.user = user
    state.errors = {}
    JwtService.saveToken(state.user.token)
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false
    state.user = {}
    state.errors = {}
    JwtService.destroyToken()
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}