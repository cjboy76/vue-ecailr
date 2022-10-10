<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue';
import VueEcailr from './components/VueEcailr.vue';

const stop = ref(false);
function toggle() {
  stop.value = !stop.value;
}
</script>

<template>
  <header style="display: flex">
    <div>this is icon</div>
    <vue-ecailr :stop="stop">
      <h1 style="display: flex">hello world 這是棒球卡片</h1>
    </vue-ecailr>
  </header>
  <button @click="toggle">toggle</button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
