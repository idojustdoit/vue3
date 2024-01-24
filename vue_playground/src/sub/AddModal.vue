<template>
  <div class="background" v-if="show" @click.self="hideModal">
    <div class="modal">
      <input v-model="newTask"   @keyup.enter="addTask"/>
    </div>
  </div>
  
  </template>

<script>
import { ref, inject, onMounted } from 'vue'


export default {

setup() {
const newTask = ref('');
const taskList = ref([])
const show = ref(false);
const LoadTodoList = inject('LoadTodoList');


onMounted(() => {
  const savedTaskList = localStorage.getItem('todos');
      if (savedTaskList) {
        taskList.value = JSON.parse(savedTaskList);
      }

      
    })

const showModal = ()=>{
  show.value = true;
}
const hideModal = ()=>{
  show.value = false;
}
const saveTodo = () => {
  localStorage.setItem("todos", JSON.stringify(taskList.value));
}
const addTask = () =>{
  if (newTask.value.trim() === "") return;
  taskList.value.push({title: newTask.value ,complete:true});
  newTask.value = '';
  saveTodo();
  LoadTodoList();
}

const removeTodo = (index)=>{
  taskList.value.splice(index,1);
  saveTodo();
}


return{
  newTask,
  show,
  addTask,
  removeTodo,
  showModal,
  hideModal,
  LoadTodoList
}}
}
</script>



<style scoped>
.background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0; /* Ensure the modal starts from the top-left corner */
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.modal{
position: absolute;
height: 500px;  
max-width: 500px;
width:80%;
background: #ffffff;
box-shadow: 3px 3px 3px #888888;
}
</style>
