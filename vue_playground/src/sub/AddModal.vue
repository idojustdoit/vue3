<template>
  <div class="background" v-if="show" @click.self="hideModal">
    <div class="modal">
      <input v-model="newTask"   @keyup.enter="addTask"/>
    <div v-for="(item,index) in MainTaskList" :key="index">
      {{ item.text }} <button @click="removeTodo(index)"> remove</button>
    </div>
    </div>
  </div>
  
  </template>

<script>
import { ref, onMounted } from 'vue'
export default {
  props:{
    MainTaskList:Array
  },
  emits: ['updateList'],
setup(props,{ emit }) {
const newTask = ref('');
const show = ref(false);



onMounted(()=>{


  const savedTaskList = localStorage.getItem("todos");

  if(savedTaskList){
    props.MainTaskList.value = JSON.parse(savedTaskList);
  }
});


const showModal = ()=>{
  show.value = true;
}
const hideModal = ()=>{
  show.value = false;
}
const saveTodo = () => {
  const updateList= [...props.MainTaskList, {text: newTask.value ,complete:false}]
  localStorage.setItem("todos", JSON.stringify(updateList.value));
}
const addTask = () =>{
  if (newTask.value.trim() === "") return;
  const updateList= [...props.MainTaskList, {text: newTask.value ,complete:false}]
  emit('updateList', updateList);
  newTask.value = '';
  saveTodo();
}

const removeTodo = (index)=>{
  props.MainTaskList.value.splice(index,1);
  saveTodo();
}

return{
  newTask,
  show,
  addTask,
  removeTodo,
  showModal,
  hideModal
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
