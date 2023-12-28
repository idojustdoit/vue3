<template>
    <div class="centerTab">
    로그인 페이지
      <div>
        <span>핸드폰번호</span>
        <input v-model="InputPhoneNumber" type="email" />
        <div @click="login">로그인</div>
      </div>
    </div>
  </template>
  <script setup>
  import{ ref } from'vue';
  
  const InputPhoneNumber = ref('');


  const login =()=> {
    
  }
  </script>
  
  <style>
  
  </style>