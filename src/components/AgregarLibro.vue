<template>

  <div id="content">
<center><h2 class="subheader"> Registrar nuevo libro</h2></center>
      <form @submit.prevent="estatusEditar ? updateTodo() : addTodo()">


            <h2>Titulo</h2>
            <input type="text" v-model="titulo">
            <h2>Autor</h2>
            <input type="text" v-model="autor">
            <center><button class="btn btn-success" type="submit">{{ estatusEditar ? "Editar": "Agregar" }}</button></center>
            <div class="alert alert-success">
                <strong>Se ha registrado correctamente!</strong>
                <br>"{{titulo}}" por {{autor}}
              </div>

      </form>





  </div>
</template>

<script>
import {db} from '../firebase';

export default {
  name: 'App',
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
    async listarTodos(){

          this.cargando = true;
          const data = await db.collection("todos").get();
          this.todos = data.docs.map(doc => ({
            id: doc.id, ...doc.data()
          }))
          this.cargando = false;
          console.log(this.todos);

    },
    async addTodo() {
        await db.collection('todos').add(
          {
            titulo:  this.titulo,
            autor:  this.autor
          }
        )
        this.titi = "";
        this.autor = "";
        this.listarTodos();
    },
    async deleteTodo(todo){

      if(confirm(`Estas seguro que desaeas eliminar ${todo.name}`)){
        await db.collection('todos').doc(todo.id).delete();
        this.listarTodos();
      }

    },
    selectTodo(todo){
      this.estatusEditar = true;
      this.id = todo.id;
      this.name = todo.name;
    },
    async updateTodo(){
      await db.collection('todos').doc(this.id).set(
        {
          titulo: this.titulo,
          autor: this.autor
        }
      )

      this.estatusEditar = false;
      this.id = "";
      this.titulo = "";
      this.autor = "";
      this.listarTodos();

    }
  },
}
</script>
