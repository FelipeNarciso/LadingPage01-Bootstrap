function requisitar(url){
    let conteudo = document.getElementById('conteudo')
    let ajax = new XMLHttpRequest()

    ajax.open('GET' , url , true)

    ajax.onload = function() {
        if(ajax.status >= 200 && ajax.status < 400){
            conteudo.innerHTML = ajax.responseText
        }else{
            conteudo.innerHTML = 'Ocorreu um erro inesperado :( Já estamos trabalhando nisso!'
        }
    }

    ajax.send()
}

function formulario(){
    let nomeValido = true
    let nome = document.getElementById('txtNome')
    let erroNome01 = document.getElementById('erroTxtNome01')
    let erroNome02 = document.getElementById('erroTxtNome02')

    let emailValido = true
    let email = document.getElementById('txtEmail')
    let erroEmail01 = document.getElementById('erroTxtEmail01')
    let erroEmail02 = document.getElementById('erroTxtEmail02')

    let telValido = true
    let tel = document.getElementById('txtTel')
    let erroTel01 = document.getElementById('erroTxtTel01')
    let erroTel02 = document.getElementById('erroTxtTel02')
    
    let modal = new bootstrap.Modal(document.getElementById('exampleModal'))


    
    if(nome.value == ''){
        nome.classList.add('is-invalid');
        erroNome01.classList.remove('d-none')
        erroNome02.classList.add('d-none')
        nomeValido = false
    } else if(!isNaN(nome.value)){
        nome.classList.add('is-invalid');
        erroNome01.classList.add('d-none')
        erroNome02.classList.remove('d-none')
        nomeValido = false
    }
    else{
        nome.classList.remove('is-invalid');
        erroNome01.classList.add('d-none')
        erroNome02.classList.add('d-none')
        nomeValido = true
    }

    // 

    if(email.value == ''){
        email.classList.add('is-invalid');
        erroEmail01.classList.remove('d-none')
        erroEmail02.classList.add('d-none')
        emailValido = false

    } else if(!email.value.includes('@')){
        email.classList.add('is-invalid');
        erroEmail01.classList.add('d-none')
        erroEmail02.classList.remove('d-none')
        emailValido = false
    }
    else{
        email.classList.remove('is-invalid');
        erroEmail01.classList.add('d-none')
        erroEmail02.classList.add('d-none')
        emailValido = true
    }

    // 

    if(tel.value == ''){
        tel.classList.add('is-invalid');
        erroTel01.classList.remove('d-none')
        erroTel02.classList.add('d-none')
        telValido = false
    } else if(isNaN(tel.value)){
        tel.classList.add('is-invalid');
        erroTel01.classList.add('d-none')
        erroTel02.classList.remove('d-none')
        telValido = false
    }
    else{
        tel.classList.remove('is-invalid');
        erroTel01.classList.add('d-none')
        erroTel02.classList.add('d-none')
        telValido = true
    }

    if (nomeValido && emailValido && telValido) {
        nome.value = ''
        email.value = ''
        tel.value = ''
        modal.show();
    }

} 

function formulario(){
    let nomeValido = true
    let nome = document.getElementById('txtNome')
    let erroNome01 = document.getElementById('erroTxtNome01')
    let erroNome02 = document.getElementById('erroTxtNome02')

    let emailValido = true
    let email = document.getElementById('txtEmail')
    let erroEmail01 = document.getElementById('erroTxtEmail01')
    let erroEmail02 = document.getElementById('erroTxtEmail02')

    let telValido = true
    let tel = document.getElementById('txtTel')
    let erroTel01 = document.getElementById('erroTxtTel01')
    let erroTel02 = document.getElementById('erroTxtTel02')
    
    let modal = new bootstrap.Modal(document.getElementById('exampleModal'))


    
    if(nome.value == ''){
        nome.classList.add('is-invalid');
        erroNome01.classList.remove('d-none')
        erroNome02.classList.add('d-none')
        nomeValido = false
    } else if(!isNaN(nome.value)){
        nome.classList.add('is-invalid');
        erroNome01.classList.add('d-none')
        erroNome02.classList.remove('d-none')
        nomeValido = false
    }
    else{
        nome.classList.remove('is-invalid');
        erroNome01.classList.add('d-none')
        erroNome02.classList.add('d-none')
        nomeValido = true
    }

    // 

    if(email.value == ''){
        email.classList.add('is-invalid');
        erroEmail01.classList.remove('d-none')
        erroEmail02.classList.add('d-none')
        emailValido = false

    } else if(!email.value.includes('@')){
        email.classList.add('is-invalid');
        erroEmail01.classList.add('d-none')
        erroEmail02.classList.remove('d-none')
        emailValido = false
    }
    else{
        email.classList.remove('is-invalid');
        erroEmail01.classList.add('d-none')
        erroEmail02.classList.add('d-none')
        emailValido = true
    }

    // 

    if(tel.value == ''){
        tel.classList.add('is-invalid');
        erroTel01.classList.remove('d-none')
        erroTel02.classList.add('d-none')
        telValido = false
    } else if(isNaN(tel.value)){
        tel.classList.add('is-invalid');
        erroTel01.classList.add('d-none')
        erroTel02.classList.remove('d-none')
        telValido = false
    }
    else{
        tel.classList.remove('is-invalid');
        erroTel01.classList.add('d-none')
        erroTel02.classList.add('d-none')
        telValido = true
    }

    if (nomeValido && emailValido && telValido) {
        nome.value = ''
        email.value = ''
        tel.value = ''
        modal.show();
    }

} 