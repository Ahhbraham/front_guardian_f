<template>
  <div>
    <header>
      <h1>SafeZone</h1>
      <nav>
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#download" class="cta">Download</a></li>
        </ul>
      </nav>
    </header>
    
    <section id="hero">
      <h2>Stay Safe, Stay Connected</h2>
      <p>Real-time safety updates, emergency contacts, and first aid guidance at your fingertips.</p>
      <router-link to="/LoginPage" class="cta">Get Started</router-link>
    </section>
    
    <section id="features">
      <h2>Key Features</h2>
      <ul>
        <li>🔔 Zonal Safety Updates</li>
        <li>📞 One-Tap Police Hotline</li>
        <li>🎥 Voice & Video Assistance</li>
        <li>📍 Live Location Sharing</li>
        <li>✅ Trusted Circles for Safety</li>
        <li>🏥 Instant First Aid Guidance</li>
      </ul>
    </section>
    
    <section id="about">
      <h2>About SafeZone</h2>
      <p>SafeZone is designed to provide real-time situational help, emergency assistance, and safety tools for individuals and communities.</p>
    </section>
    
    <section id="contact">
      <h2>Contact Us</h2>
      <p>Email: support@safezone.com</p>
      <p>Phone: +123 456 7890</p>
    </section>
    
    <footer>
      <p>&copy; 2025 SafeZone. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background: #2c3e50;
  color: white;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}
.cta {
  background: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 5px;
}
</style>
