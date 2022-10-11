<script setup lang="ts">
import { ref } from 'vue';
import VueEcailr from './components/VueEcailr.vue';
import GitHubIcon from './components/GitHubIcon.vue';

const stop = ref(false);
function toggle() {
  stop.value = !stop.value;
}
</script>

<template>
  <div class="content">
    <vue-ecailr :stop="stop">
      <h1>👋 👋 Hello VueEcailr</h1>
    </vue-ecailr>
  </div>
  <button @click="toggle">Toggle Stop</button>
  <div class="codeBlock">
    <div>
      <code class="code">$ npm install vue-ecailr</code>
    </div>
  </div>
  <div>
    <a href="https://github.com/cjboy76/vue-ecailr" target="_blank">
      <button>
        <GitHubIcon />
      </button>
    </a>
  </div>
</template>

<style>
.content {
  margin: 1rem;
}
.codeBlock {
  margin: 4rem 0 2rem;
}
.codeBlock .code {
  background: #000;
  padding: 1rem 1.5rem;
  margin: 1rem 1.5rem;
  border-radius: 5px;
}
</style>
