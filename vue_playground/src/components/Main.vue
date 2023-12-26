<template>
    <div class="back">
      메인페이지
      <div>
        <div>
          해야할 일<br />
          {{ thingToDoCount }}
        </div>
        <div>
          이미한 일<br />
          {{ goalAchievedCount }}
        </div>
        <div>
          전체 일 <br />
          {{ totalTaskList }}
        </div>
      </div>
      <button @click="showModal()">클릭</button>
    </div>
    <addModal ref="showComponent"  />
  </template>
  
  <script>
  import addModal from '../sub/AddModal.vue';
  import { ref, onMounted, computed,provide  } from 'vue';
  
  export default {
    components: {
      addModal,
    },
    setup() {
      const showComponent = ref(null);
      const MainTaskList = ref([]);
  
      const showModal = () => {
        showComponent.value.showModal();
      };
  
      const goalAchievedCount = computed(() => {
        return MainTaskList.value.filter(obj => !obj['complete']).length;
      });
  
      const thingToDoCount = computed(()=>{
        return MainTaskList.value.filter(obj => obj['complete']).length;
      })
      const totalTaskList = computed(()=>{
        return MainTaskList.value.length
      })
  
      const LoadTodoList = () =>{
        
      const savedTaskList = localStorage.getItem('todos');
      
        if (savedTaskList) {
          MainTaskList.value = JSON.parse(savedTaskList);
        }
      }
      onMounted(() => {
        LoadTodoList();
      });


      provide('LoadTodoList', LoadTodoList);
  
      return {
        showComponent,
        showModal,
        goalAchievedCount,
        thingToDoCount,
        LoadTodoList,
        totalTaskList
      };
    },
  };
  </script>
  
  <style>
  </style>