<template>
<aside id="sidebar2">
  <div class="sidebar-item">
    <h2>Ultimos libros agregados</h2>

    <ul>

      <li v-for="todo in todos" :key="todo.id">
        "{{todo.titulo}}" por {{todo.autor}}

      </li>
    </ul>
  </div>


  <br>
</aside>
</template>

<script>

import {
  db
} from '../firebase';

export default {
  name: 'App',
  data() {
    return {
      todos: [],
      id: "",
      name: "",
      cargando: false,
      estatusEditar: false
    }
  },
  created() {

    setTimeout(this.listarTodos(), 1000);

  },
  methods: {
    async listarTodos() {

      this.cargando = true;
      const data = await db.collection("todos").get();
      this.todos = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      this.cargando = false;
      console.log(this.todos);

    },

  },
}
</script>
