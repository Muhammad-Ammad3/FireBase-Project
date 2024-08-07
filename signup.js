import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAR6jXHWsyUa-CDPZXIysEadyrhIQIMY5A",
  authDomain: "porject1-16217.firebaseapp.com",
  projectId: "porject1-16217",
  storageBucket: "porject1-16217.appspot.com",
  messagingSenderId: "998578670712",
  appId: "1:998578670712:web:6460e0adcc859f332cb18d",
  measurementId: "G-F8ESGXW1J5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
alert('Your Account Has Been Created')
        setTimeout(() => {
        window.location.href = 'login.html';
      }, 1000); 
    })
    .catch((error) => {
      const errorMessage = error.message;
      document.getElementById('signup-message').textContent = `Error: ${errorMessage}`;
    });
});

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', () => {
  window.location.href = 'index.html';
});
