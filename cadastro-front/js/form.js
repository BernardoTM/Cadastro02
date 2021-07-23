$('#form-cadastro').submit(function(){
    const nome = $('#nome');
    const email = $('#email');
    const userName = $('#userName');
    const senha = $('#senha');

    const erro = $('.alert');
    const nomeErro = $('#erro');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    if(nome.val() == ''){
        erro.removeClass('d-none');
        nomeErro.html('nome');
        nome.focus();
        nome.addClass('is-invalid')
        return false;
    }

    if(email.val() == ''){
        erro.removeClass('d-none');
        nomeErro.html('email');
        email.focus();
        email.addClass('is-invalid')
        return false;
    }

    if(userName.val() == ''){
        erro.removeClass('d-none');
        nomeErro.html('nome');
        userName.focus();
        userName.addClass('is-invalid')
        return false;
    }

    if(senha.val() == ''){
        erro.removeClass('d-none');
        nomeErro.html('nome');
        senha.focus();
        senha.addClass('is-invalid')
        return false;
    }
    fetch(`http://localhost:3030/addUser`, {
    method: 'POST',
    body: JSON.stringify({
        senha: senha.val(),
        name: nome.val(),
        username: userName.val(),
        email: email.val()
    }),
    headers: {
        'content-type': 'application/json'
    }
})
    return true;
});