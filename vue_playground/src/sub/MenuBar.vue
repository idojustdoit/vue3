<template>
  <div class="menu_tab">
    <div class="menu_title">
        <span>메뉴</span>
        이미지
    </div>
    <input v-model="keywordSearch" placeholder="Search"/>

    
    <div>
        <span>page</span> 
    </div>
    <div>
        <span>Topic</span>
    </div>
    <div>
        <span>TAGS</span>
    </div>
  </div>
</template>
<script setup>
import{ ref } from'vue';

const keywordSearch = ref('');

</script>

<style>
.menu_tab{
    max-width: 300px;
    width: 30%;
    height: 90%;
    position: absolute;
    top: 20px;
    left: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;


    background-color: #f0f0f0;
    padding: 10px;
    border-radius: 20px;
}
.menu_title{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>