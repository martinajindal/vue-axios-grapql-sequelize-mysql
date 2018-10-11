import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from './jwt.service'
import { API_URL } from './config'
import { jsonToGraphQLQuery } from 'json-to-graphql-query';


const ApiService = {
    init() {
        Vue.http = axios
        Vue.use(VueAxios, axios)
        Vue.axios.defaults.baseURL = API_URL
    },

    setHeader() {
        Vue.axios.defaults.headers.common['Authorization'] = `Token ${JwtService.getToken()}`
    },

    query(resource, params) {
        return Vue.axios
            .get(resource, params)
            .catch((error) => {
                throw new Error(`[RWV] ApiService ${error}`)
            })
    },

    get(resource, slug = '') {
        const graphql_query = encodeURIComponent("query { getAllOrders { id, matterRef, type, status, createdAt } } ");
        return Vue.axios
            .get(`${resource}/?query=query%20${graphql_query}`)
            .catch((error) => {

            })
    },

    post(resource, params) {
        delete axios.defaults.headers.common["Authorization"]; // or which ever header you have to remove
        return Vue.axios.post(`${resource}`, params)
    },

    update(resource, slug, params) {
        return Vue.axios.put(`${resource}/${slug}`, params)
    },

    put(resource, params) {
        return Vue.axios
            .put(`${resource}`, params)
    },

    delete(resource) {
        return Vue.axios
            .delete(resource)
            .catch((error) => {
                throw new Error(`[RWV] ApiService ${error}`)
            })
    }
}

export default ApiService
