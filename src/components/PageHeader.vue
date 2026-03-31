<script setup lang="ts">
import ThemeSwitch from './ThemeSwitch.vue';
</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="..">&larr; View other pages</a></li>
      </ul>
      <ul>
        <li>
          <ThemeSwitch />
        </li>
      </ul>
    </nav>
    <h1 class="title">Am I in the Fade?</h1>
  </header>
</template>

<style>
.title {
  text-align: center;
  margin-block-start: 0;
  margin-block-end: 2rem;
}
</style>
