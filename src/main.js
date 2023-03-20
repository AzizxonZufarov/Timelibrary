// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Uimini from 'uimini/dist/css/uimini.css'
import App from './App'
import router from './router'
import store from './store'

import firebase from "firebase/compat/app";
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/auth';

Vue.use(
  Vuelidate,
  Uimini
)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    const config = {
      apiKey: "AIzaSyABcQkz5Dx9nt_lW0n_szHTbCuF4aWbHSM",
      authDomain: "time-library-9182b.firebaseapp.com",
      databaseURL: "https://time-library-9182b-default-rtdb.firebaseio.com",
      projectId: "time-library-9182b",
      storageBucket: "time-library-9182b.appspot.com",
      messagingSenderId: "67066716789",
    };
    // Initialize Firebase
    firebase.initializeApp(config);

    
    // Auth Check
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // Check Logged
        this.$store.dispatch('loggedUser', user)
        // Loading All Tasks
        this.$store.dispatch('loadTasks')
        // Loading All Tags
        this.$store.dispatch('loadTags')
        console.log(this.$store.getters.message.title)
      }
      this.$store.dispatch('loadTasks')
    })
  }
})
