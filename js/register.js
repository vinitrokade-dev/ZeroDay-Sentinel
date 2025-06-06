document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    togglePassword.addEventListener('click', function() {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        this.classList.toggle('fa-eye-slash');
    });
    
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('remember').checked;
    
        console.log('Login attempt with:', { email, password, rememberMe });
        
       
        alert('Login successful!');
        
        // Reset form
        loginForm.reset();
    });
    
    // Social login buttons
    const googleBtn = document.querySelector('.social-button.google');
    const githubBtn = document.querySelector('.social-button.github');
    
    googleBtn.addEventListener('click', function() {
        alert('Google login would be implemented here');
    });
    
    githubBtn.addEventListener('click', function() {
        alert('GitHub login would be implemented here');
    });
    
    const signupBtn = document.querySelector('.signup-button');
    
    signupBtn.addEventListener('click', function() {
        alert('Sign up page would open here');
    });
});