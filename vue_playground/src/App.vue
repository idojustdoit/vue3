<script setup>
import{onMounted }from "vue";
import { getAuth } from "firebase/auth";
const auth = getAuth();
const user = auth.currentUser;

onMounted(()=>{
  if (user !== null) {
    console.log('로그인한 유저입니다.',user);
  }else{
    console.log('로그인 하지않은 유저입니다.');
  }
})

</script>

<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="menuBar" :key="$route.fullPath+'menuBar'" ></router-view>
    
  </div>
</template>

<style>
</style>
