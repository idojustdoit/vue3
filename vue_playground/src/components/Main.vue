<script setup>
import addModal from '../sub/AddModal.vue';
import { ref, onMounted, computed,provide  } from 'vue';
import { useUserInfoStore } from "../store/UseStore";




    const showComponent = ref(null);
    const MainTaskList = ref([]);
    const userStore = useUserInfoStore();
    const modifiedTitle = ref([]);
    const todolist = userStore.todoList
    const showModal = () => {
      showComponent.value.showMode();
    };

    // const goalAchievedCount = computed(() => {
    //   return MainTaskList.value.filter(obj => !obj['complete']).length;
    // });

    // const thingToDoCount = computed(()=>{
    //   return MainTaskList.value.filter(obj => obj['complete']).length;
    // })
    // const totalTaskList = computed(()=>{
    //   return MainTaskList.value.length
    // })

    const deleteTodo =(item)=>{
      userStore.deleteTodolist(item);
    }
    

    const updateTodo = (item,modifiedItem) => {
      console.log(item,modifiedItem);
      userStore.updateTodolist(item,modifiedItem);
    }

    onMounted(() => {
   
    });


</script>


<template>
    <div class="back">
      메인페이지
      <div>
        <div v-for="(item, index) in todolist.value" :key="item.id">
          <div>{{ item.title }}</div>
          <input v-model="modifiedTitle[index]"/>
          <button @click="updateTodo(item,'completed')">완료하기</button>
          <button @click="updateTodo(item,modifiedTitle[index])">수정하기</button>
          <button @click="deleteTodo(item.id)">삭제하기</button>
        </div>
        <!-- <div>
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
        </div> -->
      </div>
      <button @click="showModal()">클릭</button>
    </div>
    <addModal ref="showComponent"  />
  </template>
  

  
  <style>
  </style>