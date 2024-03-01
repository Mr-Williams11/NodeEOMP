import { createStore } from 'vuex'
import axios from 'axios'
import sweet from 'sweetalert'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies()
import router from '@/router'
// import AuthenticateUser from '@/service/AuthenticateUser'
const TopiaURL = 'https://nodeeomp-1.onrender.com/'


export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: []
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, value) {
      state.products = value
    },
    setOneProduct(state, value) {
      state.product = value
    },
  },
  actions: {
    async addUser(context, payload) {
      try{
        let msg = await axios.post(`${TopiaURL}user`, payload)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'User Added',
            text: "You have successfully registered!",
            icon: "success",
            timer: 2000
          }) 
          //  
          router.push({name: 'login'})
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUsers(context) {
      try{
        let results = (await axios.get(`${TopiaURL}users`)).data
        if(results) {
          context.commit('setUsers', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving users.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchUser(context, payload) {
      try{
        let result = (await axios.get(`${TopiaURL}users/${payload}`)).data
        if(result) {
          context.commit('setUser', result)
        }else {
          sweet({
            title: 'Retrieving a single user',
            text: 'User was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'A user was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async editUser(context, payload) {
      try{
        let {msg} = await axios.patch(`${TopiaURL}users/${payload.id}`, payload)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Edit user',
            text: "The user has been edited.",
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when updating a user.',
          icon: "success",
          timer: 2000
        }) 
      }
    },
    async deleteUser(context, payload) {
      try{
        console.log("payload: ", payload)
        let msg = await axios.delete(`${TopiaURL}users/${payload}`)
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'Delete user',
            text: "The user has been deleted.",
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a user.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async deleteProduct(context, payload) {
      try{
        console.log("payload: ", payload)
        let msg = await axios.delete(`${TopiaURL}products/${payload}`)
        if(msg) {
          context.dispatch('fetchProducts')
          sweet({
            title: 'Delete product',
            text: "some other message on product delete success",
            icon: "success",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when deleting a product.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async login(context, payload) {
      try{
       const {msg, token, result} = (await axios.post(`${TopiaURL}users/login`, payload)).data 
       if(result){
        context.commit('setUser', {msg, result})
        cookies.set('LegitUser', {
          msg, token, result
        })
        // AuthenticateUser.applyToken(token)
        sweet({
          title: msg,
          text: `Welcome back, 
          ${result?.firstName} ${result?.lastName}`,
          icon: "success",
          timer: 2000
        })
          router.push({name: 'home'})
        }else {
          sweet({
            title: 'info',
            text: msg,
            icon: "info",
            timer: 2000
          })
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Failed to login.',
          icon: "error",
          timer: 2000
        })
      }
      

    },
    async fetchProducts(context) {
      try{
        let results = 
        (await axios.get(`${TopiaURL}products`)).data
        if(results) {
          context.commit('setProducts', results)
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'An error occurred when retrieving products.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async fetchProduct(context, payload) {
      try{
        let result = (await axios.get(`${TopiaURL}products/${payload}`)).data
        if(result) {
          context.commit('setOneProduct', result)
        }else {
          sweet({
            title: 'Retrieving a single product',
            text: 'Product was not found',
            icon: "info",
            timer: 2000
          }) 
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'A product was not found.',
          icon: "error",
          timer: 2000
        }) 
      }
    },
    async addProducts(context, payload) {
      try{
        let msg = (await axios.post(`${TopiaURL}addProducts/`, payload)).data
        if(msg) {
          context.dispatch('fetchUsers')
          sweet({
            title: 'User Added',
            text: "You have successfully registered!",
            icon: "success",
            timer: 2000
          }) 
          //  
          router.push({name: 'login'})
        }
      }catch(e) {
        sweet({
          title: 'Error',
          text: 'Please try again later',
          icon: "error",
          timer: 2000
        }) 
      }
    }
  },
  modules: {
  }
})
