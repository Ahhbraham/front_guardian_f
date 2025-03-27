<script setup>
import { RouterView } from 'vue-router';
import Nav_bar from './components/Nav_bar.vue';



</script>

<template>
  <v-app>
    <Nav_bar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style>
 
</style>
