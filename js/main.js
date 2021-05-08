let btnLogin = document.getElementById('btn-login');
btnLogin.addEventListener('click', (e) => {
    e.preventDefault();
    let username = document.getElementById('correo').value;
    alert(`Bienvenido ${username}`);
});



