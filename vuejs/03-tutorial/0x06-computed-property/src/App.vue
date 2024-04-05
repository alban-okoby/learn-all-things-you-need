<script>
let id = 0;

export default {
  // The reactive state goes here
  data() {
    return {
      newTodo: "",
      hideCompleted: false,
      todos: [
        { id: id++, task: "Apprendre le HTML", done: true },
        { id: id++, task: "Apprendre le JavaScript", done: true },
        { id: id++, task: "Apprendre Vue", done: false },
      ],
    };
  },
  computed: {
    filteredTodos() {
      return this.hideCompleted ? this.todos.filter((t) => !t.done) : this.todos
    },
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, task: this.newTodo });
      this.newTodo = "";
    },

    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
};
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" />
    <button>Ajouter une tâche</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id" :class="[todo.done ? 'done' : '']">
      <input type="checkbox" v-model="todo.done" />
      <span> {{ todo.task }} </span>
      <button @click="removeTodo(todo)">X</button>
    </li>
    <button @click="hideCompleted = !hideCompleted">
      {{ hideCompleted ? "Afficher toutes" : "Cacher complétées" }}
    </button>
  </ul>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
