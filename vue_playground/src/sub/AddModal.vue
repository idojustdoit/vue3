<script setup>
import { ref, inject, onMounted } from 'vue'
import { useUserInfoStore } from "../store/UseStore";



const newTask = ref('');
const taskList = ref({});
const show = ref(false);
const userStore = useUserInfoStore();

onMounted(() => {
  const savedTaskList = localStorage.getItem('todos');
      if (savedTaskList) {
        taskList.value = JSON.parse(savedTaskList);
      }

    })

const showMode = () => { 
  show.value = true;
}

const hideModal = () => {
  show.value = false;
}
const saveTodo = () => {
  localStorage.setItem("todos", JSON.stringify(taskList.value));
}
const addTask = () => {
  if (newTask.value.trim() === "") return;
  taskList.value = {title: newTask.value};
  userStore.addTodoList(taskList.value);
  newTask.value = '';


}

const removeTodo = (index)=>{
  taskList.value.splice(index,1);
  saveTodo();
}
defineExpose({
  showMode
})

</script>


<template>
  <div class="background" v-if="show" @click.self="hideModal">
    <div class="modal">
      <input v-model="newTask"   @keyup.enter="addTask"/>
    </div>
  </div>
  
  </template>




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
