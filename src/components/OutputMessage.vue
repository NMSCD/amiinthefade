<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  isFade: boolean | null;
}>();

const message = computed(() => `You are ${props.isFade ? '' : 'not'} in the Fade!`);
</script>

<template>
  <p>
    <output
      :class="isFade ? 'has-background-success-dark' : 'has-background-danger-dark'"
      class="output"
      >{{ message }}</output
    >
  </p>
</template>

<style>
.output {
  padding: 0.75rem;
  border-radius: var(--pico-border-radius);
  color: white;
  transition: background-color var(--pico-transition);
}

.has-background-danger-dark {
  background-color: #cc0f35;
}

.has-background-success-dark {
  background-color: #257953;
}
</style>
