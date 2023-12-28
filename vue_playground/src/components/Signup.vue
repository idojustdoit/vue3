<template>
  <div class="centerTab">
      회원가입페이지

<div>
      <span>휴대폰번호</span>
      <input v-model="InputPhoneNumber" type="text"/>
      <div id="sign-in-button" @click="checkPhoneNumber">인증번호 받기</div>
      <span>인증번호</span>
      <input v-model="verificationNumber" type="text"/>
    <div @click="checkVerificationNumber">확인</div> 
    </div>
    
  </div>
</template>
<script setup>
import{ ref } from'vue';
import { getAuth, signInWithPhoneNumber,RecaptchaVerifier  } from "firebase/auth";

const InputPhoneNumber = ref('');
const verificationNumber = ref ('');


const checkPhoneNumber = () => { 
  const auth = getAuth();
  const phoneNumber = '+82'+InputPhoneNumber.value;
  const appVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
      console.log(response);
  }
});


  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {
    // SMS sent. Prompt user to type the code from the message, then sign the
    // user in with confirmationResult.confirm(code).
    window.confirmationResult = confirmationResult;
    console.log(confirmationResult);
    // ...
  }).catch((error) => {
      console.log(error);
    // Error; SMS not sent
    // ...
  });

}
const checkVerificationNumber = () =>{

  confirmationResult.confirm(verificationNumber.value).then((result) => {
  // User signed in successfully.
  console.log(result);
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  console.log(error);
});

}
</script>

<style>

</style>