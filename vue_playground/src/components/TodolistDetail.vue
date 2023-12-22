<template>
    <div>
      디테일페이지
    </div>
  </template>
  
  <script>
  import { ref, onMounted,  } from 'vue'
  export default {
    name:'TodolistDetail',
  setup() {
  const MainTaskList = ref([]);
  
  onMounted(()=>{
    const savedTaskList = localStorage.getItem("todos");
  
    if(savedTaskList){
      MainTaskList.value = JSON.parse(savedTaskList);
    }
  });
      return{}
    }
  }
  </script>
  
  <style>
  
  </style>