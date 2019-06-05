import Vue from 'vue'
import Router from 'vue-router'
import LogIn from '@/components/LogIn'
import SignUp from '@/components/SignUp'
import Main from '@/components/Main'
import PersonalPage from '@/components/PersonalPage'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/LogIn',
      name: 'LogIn',
      component: LogIn
    },
    {
      path: '/SignUp',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/PersonalPage',
      name: 'PersonalPage',
      component: PersonalPage
    }
  ],
  mode: 'history'
})
