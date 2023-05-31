function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'manha.jpg.jpg'
        document.body.style.background = 'rgb(193 191 159)'
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde!
        img.src = 'tarde.jpg.jpg'
        document.body.style.background = 'rgb(231 155 123)'
    } else {
        //Boa noite!
        img.src = 'noite.jpg.jpg'
        document.body.style.background = 'rgb(65 54 92)'
    }
}