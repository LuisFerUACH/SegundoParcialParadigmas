import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Inicio from './components/Inicio.vue';
import ListadoLibros from './components/ListadoLibros.vue';
import AgregarLibro from './components/AgregarLibro.vue';
import EliminarLibro from './components/EliminarLibro.vue';
import EditarLibro from './components/EditarLibro.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path: '/home', component: Inicio},
  {path: '/lista', component: ListadoLibros},
  {path: '/agregar', component: AgregarLibro},
  {path: '/eliminar', component: EliminarLibro},
  {path: '/editar', component: EditarLibro},
  {path: '/', component: Inicio}

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
