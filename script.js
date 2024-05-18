const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (email === 'Diandra@Keyse' && senha === '080617') {
        window.location.href = 'mensagem.html'; // Redireciona para a página de mensagem
    } else {
        alert('Credenciais inválidas!');
    }
});
