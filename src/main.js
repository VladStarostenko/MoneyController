import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp(firebaseConfig)
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchTransactions')
  }
})
