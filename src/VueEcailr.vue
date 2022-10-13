<script setup lang="ts">
import { ref, computed, watch } from 'vue';

export interface Prop {
  stop?: boolean;
}

const props = withDefaults(defineProps<Prop>(), {});
const count = ref(0);
const translate = computed(() => {
  return { transform: 'translateX(' + count.value + '%)' };
});

move();

watch(
  () => props.stop,
  () => {
    move();
  }
);

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
}
</style>
