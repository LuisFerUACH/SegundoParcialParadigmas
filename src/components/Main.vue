<template>
<div id="content">
  <center>
    <h2 class="subheader"> Registrar nuevo libro</h2>
  </center>
  <form @submit.prevent="estatusEditar ? updateTodo() : addTodo()">


    <h2>Titulo</h2>
    <input type="text" v-model="titulo">
    <h2>Autor</h2>
    <input type="text" v-model="autor">
    <center><button class="btn btn-success" type="submit">{{ estatusEditar ? "Editar": "Agregar" }}</button></center>
    <div id="alertM" class="alert alert-success collapse">
      <strong>Se ha registrado correctamente!</strong>
    <div id="libro"> </div>
    </div>

    <img src="https://pa1.narvii.com/6707/510b0daee67fbc091f14b9d8ef40aeb6c0d4dc7d_hq.gif" v-if="cargando">

      <br>
      <center>
        <h2 ><strong> Listado de libros</strong></h2>
      </center>
        <ul>
          <li v-for="todo in todos" :key="todo.id">
                "{{todo.titulo}}" por {{todo.autor}}
                  <button @click="deleteTodo(todo)">Eliminar</button>
                  <button @click="selectTodo(todo)">Editar</button>
          </li>
        </ul>
  </form>





</div>
</template>

<script>
import {
  db
} from '../firebase.js'

export default {
  name: 'App2',
  data() {
    return {
      todos: [],
      id: "",
      titulo: "",
      autor: "",
      cargando: false,
      estatusEditar: false
    }
  },
  created() {

    this.listarTodos();
  },
  methods: {
    async listarTodos() {

      const data = await db.collection("todos").get();
      this.todos = data.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      console.log(this.todos)
      /*

      db.collection("todos").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      });


            this.cargando = true;
            const data = await db.collection("todos").get();
            this.todos = data.docs.map(doc => ({
              id: doc.id, ...doc.data()
            }))
            this.cargando = false;
            console.log(this.todos);
            */
    },
    async addTodo() {
      await db.collection('todos').add({
        titulo: this.titulo,
        autor: this.autor
      })
      var htmlLibro = document.getElementById('libro');
      htmlLibro.innerHTML = '"'+ this.titulo + ' por '+this.autor;
      this.titulo = "";
      this.autor = "";
      var htmlAlert = document.getElementById('alertM');
      let classes = htmlAlert.classList;
      classes.remove("collapse");

      this.listarTodos();
    },
    async deleteTodo(todo) {

      if (confirm(`Estas seguro que desaeas eliminar ${todo.titulo}`)) {
        await db.collection('todos').doc(todo.id).delete();
        this.listarTodos();
      }

    },
    selectTodo(todo) {
      this.estatusEditar = true;
      this.id = todo.id;
      this.titulo = todo.titulo;
      this.autor = todo.autor;
    },
    async updateTodo() {
      await db.collection('todos').doc(this.id).set({
        autor: this.autor,
        titulo: this.titulo,

      })

      this.estatusEditar = false;

      this.listarTodos();

    }
  },
}
</script>
