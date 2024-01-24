<template>
  <div class="centerTab">
      회원가입페이지

      <div> 

      </div>
  <input class="login_input" type="text" v-model="nickName" placeholder="닉네임을 입력해주세요"/>
  <input class="login_input" type="email" v-model="email" placeholder="이메일을 입력해주세요."/>
  <input class="login_input" type="text" v-model="pwd" placeholder="비밀번호를 입력해주세요."/>
  <div @click="signUp">회원가입 하기</div>
  </div>
</template>
<script setup>
import{ ref } from'vue';
import { getAuth, createUserWithEmailAndPassword ,updateProfile  } from "firebase/auth";
import { useRouter } from 'vue-router';


const router = useRouter();
const email = ref('');
const pwd = ref ('');
const nickName = ref('')
const auth = getAuth();



const signUp = () => { 
  createUserWithEmailAndPassword(auth, email.value, pwd.value)
  .then((userCredential) => {
  console.log(userCredential);
    updateProfile(auth.currentUser, {
  displayName: nickName.value, 
}).then(() => {
  alert('회원가입이 완료되었습니다!')
  router.push({path:'/login'});
}).catch((error) => {
    console.log('error_msg'+ error);
});
   
  })
  .catch((error) => {
    console.log(error.code);
    if(error.message == 'Firebase: Error (auth/invalid-email).'){
      alert('이메일과 비밀번호를 확인해주세요')
  }else{
    alert(error.message);
  }

  });

}
</script>

<style>

</style>