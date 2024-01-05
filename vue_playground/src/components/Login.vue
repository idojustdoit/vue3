<template>
    <div class="center_tab">
        <div style="font-size: 35px;">Login</div>
    <div class="login_box">
      <div v-if="emailLogin" class="email_login_box" >
        <div>
          <input class="login_input" type="text" v-model="email" placeholder="이메일을 입력해주세요."/>
          <input class="login_input" type="text" v-model="pwd" placeholder="비밀번호를 입력해주세요."/>
        </div>
        <div @click="login('email')">접속 하기</div>
      </div>
      <div v-else>
        <input class="login_input" v-model="inputPhoneNumber" type="text" placeholder="핸드폰번호를 입력해주세요." />
        <div id="sign-in-button" @click="checkPhoneNumber">인증번호 받기</div>
        <input class="login_input" v-model="verificationPhoneNumber" type="text" placeholder="인증번호를 입력해주세요." />
        <div @click="login('phone')">접속 하기</div>
      </div>
      <div class="type_box">
        <div class="login_tab"  @click="loginType('email')">
          편지 접속
        </div>
        <div class="login_tab" @click="loginType('phone')">
          똑똑 전화번호 <br/>접속
        </div>
        <div class="login_tab" @click="signup">
         Sign up
        </div>
      </div>
    </div>
      
    </div>
  </template>
  <script setup>
  import{ ref } from'vue';
  import { useRouter } from 'vue-router';

  import { getAuth, signInWithEmailAndPassword,signInWithPhoneNumber,RecaptchaVerifier  } from "firebase/auth";

  const router = useRouter();
  const emailLogin = ref(true);
  
  
  const email = ref('');
  const pwd = ref('');
  const inputPhoneNumber = ref('');


  const auth = getAuth();

  const loginType =(type)=> {
    
    if(type =='email'){
      emailLogin.value = true;
    }else{
      emailLogin.value = false;
    }
  }
  const signup = () =>{
    router.push({path:'/signup'})
  }

  const login =(type)=> {
    
    if(type == 'email'){
    signInWithEmailAndPassword(auth, email.value, pwd.value)
  .then((userCredential) => {
    // Signed in 

      router.push({path:'/'})
  })
  .catch((error) => {
    
    alert (error.message);
  });
    }else{
      confirmationResult.confirm(verificationPhoneNumber.value).then((result) => {
  // User signed in successfully.
  console.log(result);

  router.push({path:'/'})
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
  console.log(error);
});
    }
  }

  const checkPhoneNumber = () => { 

  const phoneNumber = '+82'+inputPhoneNumber.value;
  const appVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {

      console.log(response);
  }
});


  signInWithPhoneNumber(auth, phoneNumber, appVerifier)
  .then((confirmationResult) => {

    window.confirmationResult = confirmationResult;
    console.log(confirmationResult);

  }).catch((error) => {
      console.log(error);

  });

}

  </script>
  
  <style>
  .login_box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    padding: 30px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .type_box{

    display: flex;
    justify-content: center;
    margin-top: 100px;
  }
  .login_tab{
    width: 100%;
    padding: 5px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .email_login_box{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .login_input{
    width: 50%;
    height: 35px;
    border-radius: 10px;
    margin: 10px;
    padding-left:15px;
  }
  </style>