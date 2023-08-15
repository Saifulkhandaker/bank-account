document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
    // Danger: DO not use this method (just for checking)
        // veryfy user email and password
        if(email === 'khsaiful@gmail.com' && password === 'saiful'){
            window.location.href = 'bank.html';
        }
        else{
            alert('invalid user');
        }
})