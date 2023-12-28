<template>
    <div class="centerTab">
    로그인 페이지
      <div>
        <span>아이디</span>
        <input v-model="id" type="email" />
      </div>
      <div>
        <span>비밀번호</span>
        <input v-model="pwd" type="text"/>
      </div>
    </div>
  </template>
  <script setup>
  import{ ref } from'vue';
  
  const id = ref('');
  const pwd = ref(null);
  </script>
  
  <style>
  
  </style>