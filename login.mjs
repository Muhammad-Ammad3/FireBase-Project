import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

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

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert('Login Succesful')
    })
    .catch((error) => {
      const errorMessage = error.message;
      document.getElementById('login-message').textContent = `Error: ${errorMessage}`;
    });
});

let createAccountBtn = document.getElementById('create-account-btn');
createAccountBtn.addEventListener('click', () => {
  window.location.href = 'signIn.html';
});
