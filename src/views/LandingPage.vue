<template>
    <v-app>
      <v-container class="text-center py-10">
        <!-- Hero Section -->
        <v-row justify="center" align="center" class="hero">
          <v-col cols="12" md="8">
            <h1 class="text-h3 font-weight-bold">Guardian: Your Ultimate Security Companion</h1>
            <p class="text-subtitle-1 mt-4">
              Stay safe with real-time alerts, emergency assistance, and trusted circles.
            </p>
            <v-btn color="primary" size="large" class="mt-4" @click="handleAction">Get Started</v-btn>
          </v-col>
        </v-row>
        
        <!-- Features Section -->
        <v-row class="mt-10" justify="center">
          <v-col cols="12" md="4" v-for="feature in features" :key="feature.title">
            <v-card class="pa-5" elevation="4">
              <v-icon size="40" class="mb-3" color="primary">{{ feature.icon }}</v-icon>
              <h3 class="text-h6 font-weight-bold">{{ feature.title }}</h3>
              <p class="text-body-2">{{ feature.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    data() {
      return {
        features: [
          { title: "Real-Time Alerts", description: "Get notified of security threats instantly.", icon: "mdi-bell" },
          { title: "Emergency Assistance", description: "Quickly contact emergency services.", icon: "mdi-phone" },
          { title: "Trusted Circles", description: "Share your location with trusted contacts.", icon: "mdi-account-group" }
        ]
      };
    },
    methods: {
      handleAction() {
        alert("Redirecting to sign-up page...");
      }
    }
  };
  </script>
  
  <style scoped>
  .hero {
    background: linear-gradient(to right, #1e3c72, #2a5298);
    color: white;
    padding: 80px 20px;
    border-radius: 10px;
  }
  </style>