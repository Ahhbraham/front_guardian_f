<template>
  <!-- Below hides navbar in landing -->
  <v-app-bar v-if="$route.path !== '/'" color="#E2E2F3" scroll-behavior="hide">
    <v-toolbar-title>Guardian</v-toolbar-title>
    <v-spacer></v-spacer>
    
    <div class="nav-buttons">
      <v-btn to="/LoginPage" color="#000C66" variant="text">Login</v-btn>
      <v-btn to="/RegisterPage" color="#000C66" variant="text">Join us</v-btn>
      <v-btn to="/RolePage" color="#000C66" variant="text">RolePage</v-btn>
    </div>
  </v-app-bar>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.nav-buttons {
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  gap: 8px;
}

.nav-buttons::-webkit-scrollbar {
  display: none;
}
</style>
