document.getElementById('togglePassword').addEventListener('click', function () {
    var password = document.getElementById('password');
    var icon = document.getElementById('togglePassword');

    if (password.type === 'password') {
        password.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');

    } else {
        password.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

function barca() {
    const btn = document.getElementById('btn');
    const login = document.getElementById('login');
    const password = document.querySelector('.password')

    btn.addEventListener('click', function () {
        if (login.value === 'Barcelona') {
            if (password.value === 'Barca') {
                alert('Viska Barca Viska Cataloniya');
                window.location.href = './pages/barca.html'
            } else {
                alert('ERROR')
            }
        } else {
            alert('ERROR')
        }
    })
};

barca();