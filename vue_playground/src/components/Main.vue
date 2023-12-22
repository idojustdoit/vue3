<template>
    <div class="back">
      메인페이지
      <div>
        <div>
          goal achieved<br />
          {{ goalAchievedCount }}
        </div>
      </div>
      <button @click="showModal()">클릭</button>
    </div>
    <addModal ref="showComponent" :MainTaskList="MainTaskList" />
  </template>
  
  <script>
  import addModal from '../sub/AddModal.vue';
  import { ref, onMounted, computed, watch } from 'vue';
  
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
  
      const savedTaskList = localStorage.getItem('todos');
  
      onMounted(() => {
        if (savedTaskList) {
          MainTaskList.value = JSON.parse(savedTaskList);
        }
      });

      // Watch for changes in MainTaskList and update the localStorage
      watch(MainTaskList, () => {
        localStorage.setItem('todos', JSON.stringify(MainTaskList.value));
      });
  
      return {
        showComponent,
        showModal,
        goalAchievedCount,
        MainTaskList,
      };
    },
  };
  </script>
  
  <style>
  </style>