import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Main from './components/Main.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: Main},
  {path: '/lista', component: Main},
  {path: '/agregar', component: Main},
  {path: '/eliminar', component: Main},
  {path: '/editar', component: Main},
  {path: '/', component: Main}

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
