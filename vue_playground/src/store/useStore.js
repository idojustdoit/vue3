import { defineStore } from 'pinia'
import {  ref,computed, reactive } from "vue";
import {collection, addDoc,doc, onSnapshot, setDoc, getDocs,  updateDoc, deleteDoc } from "firebase/firestore"; 
import { db ,authService} from "../firebase/firebaseInit.js"

export const useUserInfoStore = defineStore('UsersInfo',() => {
const userName = ref(null);
const isLogin = ref(false);
const todoList = reactive([]);


const loadUserInfo = computed(()=>{
  authService.onAuthStateChanged(function(user) {
    if (user) {
      console.log('로그인중입니다',user.displayName);
      userName.value = user.displayName;
      isLogin.value =true;
      loadTodoList();
    } else {
      console.log('로그인중이아닙니다.');
      isLogin.value =false;
    }
  });
})

async function addTodoList (item){
  const id = (todoList.value.length + 1).toString()
  console.log(id);
     try {
      await setDoc(doc(db, userName.value,id ), {
        title: item.title,
        completed: false
      });
  
    console.log("투두리스트 추가성공");
    loadTodoList ()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
      
}
async function loadTodoList (){
  todoList.value = [];
  const querySnapshot = await getDocs(collection(db, userName.value));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const data = doc.data();
    todoList.value.push({
      id: doc.id,
      title: data.title,
      completed: data.completed
    });
   
  });
  console.log(todoList);
}
return {isLogin, userName,loadUserInfo, todoList ,addTodoList ,loadTodoList }
})