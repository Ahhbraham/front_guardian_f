<template>
  <div class="login-container" :class="{ 'show-password': showPassword }">
    
    <form @submit.prevent="handleLogin" class="login-form">

      <!-- USERNAME FIELD -->
      <div class="form-item">
        <div class="input-wrapper">
          <input
          v-model="email"
            type="text"
            id="username"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            data-lpignore="true"
            placeholder="Username"
          />
         
          <i class="mdi mdi-account-outline input-icon"></i> <!-- MDI Icon -->
        
        </div>
      </div>

      <!-- PASSWORD FIELD -->
      <div class="form-item">
        <div class="input-wrapper">
          <input
          v-model="password"
            :type="passwordFieldType"
            id="password"
            autocomplete="off"
            autocorrect="off"
            auto capitalize="off"
            spellcheck="false"
            data-lpignore="true"
            placeholder="Password"
          />
          <i class="mdi mdi-lock-outline input-icon"></i> <!-- MDI Icon -->
          
          <button type="button" id="eyeball" @click="togglePasswordVisibility">
            <i :class="eyeIconClass"></i> <!-- Dynamic MDI Icon for Eye -->
          </button>

          <div id="beam"></div>
        </div>
      </div>


      <!-- LOGIN BUTTON -->
      <v-btn type="submit" block size="45px" elevation="12" color="#E2E2F3">
        Login
      </v-btn>
      

    </form>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../services/auth.service'

// Router and Auth setup
const router = useRouter()
const { login, loading, error } = useAuth()

// Form fields
const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const form = ref(null)

// Validation rules
const emailRules = [
  v => !!v || 'Email is required',
  v => /.+@.+\..+/.test(v) || 'Email must be valid'
]

const passwordRules = [
  v => !!v || 'Password is required'
]

// Login handler with form validation
async function handleLogin() {
  // Validate form before submission
  // const isValid = form.value?.validate()

  // if (!isValid) {
  //   return
  // }

  if (!email.value || !password.value) {
    console.error('Email and password are required')
    return
  }

  try {
    await login({
      email: email.value,
      password: password.value
    })

    // Redirect after successful login
    router.push('/HomePage')
  } catch (err) {
    // Error is already handled by the auth service
    console.error('Login failed', err)
  }
}

// Password visibility toggle
const passwordFieldType = ref('password') // Toggles between 'password' and 'text'
const showPassword = ref(false) // Controls the eye icon state

// Computed property for dynamic eye icon
const eyeIconClass = computed(() => {
  return showPassword.value ? 'mdi mdi-eye-off' : 'mdi mdi-eye'
})

// Method to toggle password visibility
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value // Toggle password visibility
  passwordFieldType.value = showPassword.value ? 'text' : 'password' // Update input type
  document.getElementById('password').focus() // Focus on the password input
}
// Mounted lifecycle hook for beam effect
onMounted(() => {
  const root = document.documentElement
  const beam = document.getElementById('beam')

  // Add mousemove event listener for the beam effect
  root.addEventListener('mousemove', (e) => {
    let rect = beam.getBoundingClientRect()
    let mouseX = rect.right + rect.width / 2
    let mouseY = rect.top + rect.height / 2
    let rad = Math.atan2(mouseX - e.pageX, mouseY - e.pageY)
    let degrees = (rad * (20 / Math.PI) * -1 - 350)

    root.style.setProperty('--beamDegrees', `${degrees}deg`)
  })
})
</script>

<style scoped>
/* Center the form */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: var(--bgColor);
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

/* Dark background and dark login container when beam is active */
.login-container.show-password {
  background-color: black; /* Dark background */
}

.login-container.show-password .login-form {
  background-color: #333; /* Dark login container */
  color: rgb(255, 255, 255); /* Light text for dark mode */
}

.login-container.show-password input {
  background-color: #444; /* Color of my boxes when i toggle */
  color: rgb(255, 255, 255); /* Text Color for dark mode */
  border-color: #666; /* Dark border for inputs */
  
}

.login-container.show-password .input-icon,
.login-container.show-password #eyeball {
  color: white; /* Light icons for dark mode */
}

/* Form styling */
.login-form {
  width: 100%;
  max-width: 400px; /* Adjust as needed */
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transitions */
}

/* Form items */
.form-item {
  margin-bottom: 1.5rem;
}

.input-wrapper {
  position: relative;
}

/* Input fields */
input {
  width: 100%;
  padding: 0.75rem 2.5rem 0.75rem 2.5rem; 
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1.3rem;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--inputColor); 
  background-color: transparent;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; 
}

/* Disable focus outline for input fields */
input:focus {
  outline: none; 
  border-color: #ccc;
}

/* MDI icons for inputs */
.input-icon {
  position: absolute;
  top: 50%;
  left: 0.75rem; 
  transform: translateY(-50%);
  color: #666;
  font-size: 1.25rem;
  pointer-events: none; 
  transition: color 0.3s ease; 
}

/* Eye button */
#eyeball {
  position: absolute;
  top: 50%;
  right: 0.75rem; 
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  font-size: 1.25rem;
  transition: color 0.3s ease; 
}
/* Submit button */

#submit {
  width: 100%;
  padding: 0.75rem;
  background-color: var(--outlineColor);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem; /* Space between icon and text */
  transition: background-color 0.3s ease; 
}

/* Beam effect */
#beam {
  position: absolute;
  top: 50%;
  right: 1.75rem;
  clip-path: polygon(100% 50%, 100% 50%, 0 0, 0 100%);
  width: 100vw;
  height: 25vw;
  z-index: 1;
  mix-blend-mode: multiply;
  transition: transform 200ms ease-out;
  transform-origin: 100% 50%;
  transform: translateY(-50%) rotate(var(--beamDegrees, 0));
  pointer-events: none;
}

.show-password #beam {
  background: var(--beamColor);
  mix-blend-mode: screen;
  pointer-events: none;  
}
</style>