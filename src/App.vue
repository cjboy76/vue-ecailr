<script setup lang="ts">
import { ref } from 'vue';
import VueEcailr from './components/VueEcailr.vue';

const stop = ref(false);
function toggle() {
  stop.value = !stop.value;
}
</script>

<template>
  <header>
    <vue-ecailr :stop="stop">
      <h1>👋 👋 Hello VueEcailr</h1>
    </vue-ecailr>
  </header>
  <button @click="toggle">toggle</button>
</template>
