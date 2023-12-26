<script setup>
</script>

<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="menuBar" :key="$route.fullPath+'menuBar'" ></router-view>
  </div>
</template>

<style>
</style>
