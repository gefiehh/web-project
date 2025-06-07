<template>
  <meta charset="UTF-8" />
  <div>
    <Header @open-login="showLogin = true" />
    <router-view />
    <ModalLogin v-if="showLogin" @close="showLogin = false" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import ModalLogin from './components/ModalLogin.vue'

const showLogin = ref(false)
</script>

<style>
@import "./assets/styles.css"; 
</style>