<script setup lang="ts">
import { ref } from 'vue';
import VueEcailr from './components/VueEcailr.vue';
import GitHubIcon from './components/GitHubIcon.vue';
import CheckIcon from './components/CheckIcon.vue';

const stop = ref(false);
const installCommand = ref('npm install vue-ecailr');
const copied = ref(false);
function toggle() {
  stop.value = !stop.value;
}
function copyToClipBoard() {
  navigator.clipboard.writeText(installCommand.value).then(() => {
    copied.value = true;
  });
}
</script>

<template>
  <div class="m-4">
    <vue-ecailr :stop="stop">
      <h1>👋 👋 Hello VueEcailr</h1>
    </vue-ecailr>
  </div>
  <button @click="toggle">Toggle Stop</button>
  <div class="mt-16 mb-4">
    <code class="inline-block w-[400px] bg-black py-2 px-4 my-4 mx-6 rounded">
      <div class="flex justify-between items-center">
        <span> $ {{ installCommand }} </span>
        <button
          class="rounded py-2 px-4 text-sm text-bold bg-black cursor-pointer text-white"
          @click="copyToClipBoard"
        >
          <span v-show="!copied"> Copy </span>
          <span v-show="copied" class="flex items-center">
            Copied <CheckIcon class="ml-2" />
          </span>
        </button>
      </div>
    </code>
  </div>
  <div>
    <a href="https://github.com/cjboy76/vue-ecailr" target="_blank">
      <button>
        <GitHubIcon />
      </button>
    </a>
  </div>
</template>
