<template>
  <div class="signup-container">
    <form @submit.prevent class="signup-form">
      <!-- Username Field -->
      <div class="form-item">
        <div class="input-wrapper">
          <input
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

      <!-- Email Field -->
      <div class="form-item">
        <div class="input-wrapper">
          <input
            type="email"
            id="email"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            data-lpignore="true"
            placeholder="Email"
          />
          <i class="mdi mdi-email-outline input-icon"></i> <!-- MDI Icon -->
        </div>
      </div>

      <!-- Password Field -->
      <div class="form-item">
        <div class="input-wrapper">
          <input
            type="password"
            id="password"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            data-lpignore="true"
            placeholder="Password"
          />
          <i class="mdi mdi-lock-outline input-icon"></i> <!-- MDI Icon -->
        </div>
      </div>

      <!-- Confirm Password Field -->
      <div class="form-item">
        <div class="input-wrapper">
          <input
            type="password"
            id="confirm-password"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            data-lpignore="true"
            placeholder="Confirm Password"
          />
          <i class="mdi mdi-lock-outline input-icon"></i> <!-- MDI Icon -->
        </div>
      </div>

      <!-- Submit Button -->
      <v-btn type="submit" block size="45px" elevation="12" color="#D4D4ED">
        Submit
      </v-btn>
      
    </form>
  </div>
</template>

<style scoped>
/* Heading */
h1 {
  position: absolute;
  top: 185px;
  left: 575px;
}

/* Center the form */
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Full viewport height */
  background-color: var(--bgColor);
  transition: background-color 0.3s ease; /* Smooth transition for background color */
}

/* Form styling */
.signup-form {
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
</style>