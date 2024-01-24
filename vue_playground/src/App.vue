<script setup>
import { ref,onMounted } from "vue";
import { useUserInfoStore } from "./store/UseStore";

const store = useUserInfoStore();




onMounted(() => {
  store.loadUserInfo;
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
