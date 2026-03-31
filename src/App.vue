<script setup lang="ts">
import GlyphInput from './components/GlyphInput.vue';
import OutputMessage from './components/OutputMessage.vue';
import PageHeader from './components/PageHeader.vue';
import { computed } from 'vue';
import { isFadeSpace } from './utils/validation';
import { refManualReset } from '@vueuse/core';

const glyphs = refManualReset('');
const isFade = refManualReset<boolean | null>(null);

const showResult = computed(() => glyphs.value && typeof isFade.value === 'boolean');

function submit() {
  isFade.value = isFadeSpace(glyphs.value);
}

function reset() {
  glyphs.reset();
  isFade.reset();
}
</script>

<template>
  <div class="container">
    <PageHeader />

    <main>
      <GlyphInput v-model="glyphs" />
      <div class="actions">
        <input
          role="button"
          type="submit"
          value="Check"
          @click="submit"
        />
        <input
          role=" button"
          type="reset"
          value="Reset Input"
          @click="reset"
        />
      </div>

      <OutputMessage
        v-show="showResult"
        :is-fade
      />
    </main>
  </div>
</template>

<style>
.container {
  margin-block-end: 5rem;
  margin-block-start: 1rem;
  max-width: 800px;
}

main {
  margin-block: 2rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-block: 1rem;

  & > input {
    width: auto;
    margin: 0;
  }
}
</style>
