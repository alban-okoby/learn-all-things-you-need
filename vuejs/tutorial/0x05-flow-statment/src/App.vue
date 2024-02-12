<script>
let id = 0;

export default {
  // The reactive state goes here
  data() {
    return {
      newTodo: "",
      todos: [
        { id: id++, task: "Apprendre le HTML" },
        { id: id++, task: "Apprendre le JavaScript" },
        { id: id++, task: "Apprendre Vue" },
      ],
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, task: this.newTodo});
      this.newTodo = ''
    },

    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo )
    }
  },
};
</script>

<template>
    <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Ajouter une tâche</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.task }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>
