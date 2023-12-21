<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new todo" />
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo.text }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script >
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const newTodo = ref("");
    const todos = ref([]);

    onMounted(() => {
      // 페이지 로드 시에 Local Storage에서 데이터 불러오기
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        todos.value = JSON.parse(savedTodos);
      }
    });

    const addTodo = () => {
      if (newTodo.value.trim() === "") return;
      todos.value.push({ text: newTodo.value });
      newTodo.value = "";
      saveTodos();
    };

    const removeTodo = (index) => {
      todos.value.splice(index, 1);
      saveTodos();
    };

    const saveTodos = () => {
      // Local Storage에 데이터 저장
      localStorage.setItem("todos", JSON.stringify(todos.value));
    };

    return {
      newTodo,
      todos,
      addTodo,
      removeTodo,
    };
  },
};
</script>
<style scoped>
.read-the-docs {
  color: #888;
}
</style>
