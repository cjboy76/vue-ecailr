<script setup lang="ts">
import { ref, computed, watch } from 'vue';
export interface Props {
  stop?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  stop: false,
});

const count = ref(0);
const translate = computed(() => {
  return { transform: 'translateX(' + count.value + '%)' };
});

function move(fps = 60) {
  if (props.stop) {
    count.value = 0;
    return;
  }
  if (count.value < -100) {
    count.value = 100;
  }
  count.value -= 0.5;

  setTimeout(() => {
    requestAnimationFrame(move);
  }, 1000 / fps);
}

move();

watch(
  () => props.stop,
  () => {
    move();
  }
);
</script>

<template>
  <div class="outer">
    <div class="inner" :style="translate">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.outer {
  overflow: hidden;
  position: relative;
}
</style>
