function requisitar(url) {
    let conteudo = document.getElementById('conteudo')
    let ajax = new XMLHttpRequest()

    ajax.open('GET', url, true)

    ajax.onload = function () {
        if (ajax.status >= 200 && ajax.status < 400) {
            conteudo.innerHTML = ajax.responseText
            atualizarAvaliacoes()
        } else {
            conteudo.innerHTML = 'Ocorreu um erro inesperado :( Já estamos trabalhando nisso!'
        }
    }

    ajax.send()
}

function formulario(event) {
    event.preventDefault()
    let nomeValido = true
    let nome = document.getElementById('txtNome')
    let erroNome = document.getElementById('erroTxtNome')
    let nomeRejex = /^[a-zA-Z][a-zA-Z]*(?:\s[a-zA-Z][a-zA-Z]*)+$/

    let emailValido = true
    let email = document.getElementById('txtEmail')
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    let erroEmail = document.getElementById('erroTxtEmail')

    let telValido = true
    let tel = document.getElementById('txtTel')
    let telRejex = /(\d{2})(\d{0,5})(\d{0,4})/

    erroTel = document.getElementById('erroTxtTel')

    let modal = new bootstrap.Modal(document.getElementById('exampleModal'))

    if (!nomeRejex.test(nome.value)){ 
        nome.classList.add('is-invalid')
        erroNome.classList.remove('d-none')
        nomeValido = false
    } else {
        nome.classList.remove('is-invalid')
        erroNome.classList.add('d-none')
        nomeValido = true
    }

    // 

    if (!emailRegex.test(email.value)) {
        email.classList.add('is-invalid')
        erroEmail.classList.remove('d-none')
        emailValido = false

    }else {
        email.classList.remove('is-invalid')
        erroEmail.classList.add('d-none')
        emailValido = true
    }

    // 

    if (!telRejex.test(tel.value)) {
        tel.classList.add('is-invalid')
        erroTel.classList.remove('d-none')
        telValido = false
    }else {
        tel.classList.remove('is-invalid')
        erroTel.classList.add('d-none')
        telValido = true
    }

    if (nomeValido && emailValido && telValido) {
        nome.value = ''
        email.value = ''
        tel.value = ''
        modal.show();
    }

}

function formatarTel() {
    let tel = document.getElementById('txtTel');
    let telFormatado = tel.value.replace(/\D/g, '');

    if (telFormatado.length > 2) {
        telFormatado = telFormatado.replace(/(\d{2})(\d{0,5})(\d{0,4})/, '($1) $2-$3');
    }

    tel.value = telFormatado;
}

function avaliacao() {
    let nomeValido = true
    let nome = document.getElementById('txtNome')
    let erroNome01 = document.getElementById('erroTxtNome01')
    let erroNome02 = document.getElementById('erroTxtNome02')

    let TxtAreaValido = true
    let txtArea = document.getElementById('txtArea')
    let erroTxtArea = document.getElementById('erroTxtArea')

    let starAvaliacao = document.getElementById('star').value

    let modal = new bootstrap.Modal(document.getElementById('ModalAvaliacao'))

    if (nome.value == '') {
        nome.classList.add('is-invalid');
        erroNome01.classList.remove('d-none')
        erroNome02.classList.add('d-none')
        nomeValido = false
    } else if (!isNaN(nome.value)) {
        nome.classList.add('is-invalid');
        erroNome01.classList.add('d-none')
        erroNome02.classList.remove('d-none')
        nomeValido = false
    }
    else {
        nome.classList.remove('is-invalid');
        erroNome01.classList.add('d-none')
        erroNome02.classList.add('d-none')
        nomeValido = true
    }

    // 

    if (txtArea.value == '') {
        txtArea.classList.add('is-invalid');
        erroTxtArea.classList.remove('d-none')
        TxtAreaValido = false

    } else {
        txtArea.classList.remove('is-invalid');
        erroTxtArea.classList.add('d-none')
        TxtAreaValido = true
    }

    //
    if (nomeValido && TxtAreaValido) {
        localStorage.setItem('nomeAvaliacao', nome.value)
        localStorage.setItem('txtAreaAvaliacao', txtArea.value)
        localStorage.setItem('starAvaliacao', starAvaliacao)
        nome.value = ''
        txtArea.value = ''
        modal.show();
    }
}

function atualizarAvaliacoes() {

    // Sua Avaliação 
    let nomeAvaliacao = localStorage.getItem('nomeAvaliacao')
    let txtAreaAvaliacao = localStorage.getItem('txtAreaAvaliacao')
    let starAvaliacao = localStorage.getItem('starAvaliacao')
    let h3Avaliacao = document.getElementById('h3Avaliacao')
    let avaliacaoLocalStorage = document.getElementById('avaliacaoLocalStorage')
    let txtAvaliacao = document.getElementById('txtAvaliacao')

    if (starAvaliacao === 'star01') {
        starAvaliacao = '&#9733;'
    } else if (starAvaliacao === 'star02') {
        starAvaliacao = '&#9733; &#9733;'
    } else if (starAvaliacao === 'star03') {
        starAvaliacao = '&#9733; &#9733; &#9733;'
    } else if (starAvaliacao === 'star04') {
        starAvaliacao = '&#9733; &#9733; &#9733; &#9733;'
    } else if (starAvaliacao === 'star05') {
        starAvaliacao = '&#9733; &#9733; &#9733; &#9733; &#9733;'
    }


    if (nomeAvaliacao !== null) {
        avaliacaoLocalStorage.classList.remove('d-none')
        h3Avaliacao.innerHTML = `${nomeAvaliacao}: <span class="gold-star"> ${starAvaliacao} </span>`
        txtAvaliacao.innerHTML = `"${txtAreaAvaliacao}"`
    }

}

function modalFoto(src) {
    document.getElementById('imgModalGaleria').src = src
}


let modalResetAvaliacao

function resetAvaliacao() {
    modalResetAvaliacao = new bootstrap.Modal(document.getElementById('ModalResetAvaliacao'))
    modalResetAvaliacao.show()
}

function setResetAvaliacao() {
    let nomeValido = true
    let nome = document.getElementById('txtNomeModal')
    let erroNome01 = document.getElementById('erroTxtNomeModal01')
    let erroNome02 = document.getElementById('erroTxtNomeModal02')

    let TxtAreaValido = true
    let txtArea = document.getElementById('txtAreaModal')
    let erroTxtArea = document.getElementById('erroTxtAreaModal')

    let starAvaliacao = document.getElementById('starModal').value

    if (nome.value == '') {
        nome.classList.add('is-invalid');
        erroNome01.classList.remove('d-none')
        erroNome02.classList.add('d-none')
        nomeValido = false
    } else if (!isNaN(nome.value)) {
        nome.classList.add('is-invalid');
        erroNome01.classList.add('d-none')
        erroNome02.classList.remove('d-none')
        nomeValido = false
    }
    else {
        nome.classList.remove('is-invalid');
        erroNome01.classList.add('d-none')
        erroNome02.classList.add('d-none')
        nomeValido = true
    }

    // 

    if (txtArea.value == '') {
        txtArea.classList.add('is-invalid');
        erroTxtArea.classList.remove('d-none')
        TxtAreaValido = false

    } else {
        txtArea.classList.remove('is-invalid');
        erroTxtArea.classList.add('d-none')
        TxtAreaValido = true
    }

    //
    if (nomeValido && TxtAreaValido) {
        localStorage.setItem('nomeAvaliacao', nome.value)
        localStorage.setItem('txtAreaAvaliacao', txtArea.value)
        localStorage.setItem('starAvaliacao', starAvaliacao)
        nome.value = ''
        txtArea.value = ''
        modalResetAvaliacao.hide()
        requisitar('./depoimentos-content.html')
    }
}

function deletarAvaliacao() {
    localStorage.removeItem('nomeAvaliacao')
    localStorage.removeItem('txtAreaAvaliacao')
    localStorage.removeItem('starAvaliacao')
    let modal = new bootstrap.Modal(document.getElementById('ModalDeleteAvaliacao'))
    modal.show()
}

