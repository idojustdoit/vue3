<template>
    <div class="centerTab">
        회원가입페이지
        <div>
        <span>아이디</span>
        <input v-model="id" type="email" />
      </div>
      <div>
        <span>비밀번호</span>
        <input v-model="pwd" type="text"/>
      </div>
      <div>
        <span>휴대폰번호</span>
        <input v-model="phoneNumber" type="text"/>
        <div @click="checkPhoneNumber">인증번호 받기</div>
        <span>인증번호</span>
        <input v-model="verificationNumber" type="text"/>
        <div @click="checkVerificationNumber">확인</div>
      </div>
      
    </div>
  </template>
  <script setup>
  import{ ref } from'vue';
  

  const id = ref('');
  const pwd = ref(null);
  const phoneNumber = ref('');
  const verificationNumber = ref ('');

  const checkPhoneNumber = () => { 
    
  }
  const checkVerificationNumber = () =>{

  }
  </script>
  
  <style>
  
  </style>