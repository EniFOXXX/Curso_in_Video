
function carregar(){
    var msg = window.document.getElementById('msg')
    var img =window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        // bom dia
        img.src = './img/manha.png'
        document.body.style.background = '#cf9e1b'
    } else if (hora >= 12 && hora < 18 ){
        //boa tarde
        img.src = './img/tarde.png'
        document.body.style.background = '#977e6e'
    } else {
        //boa noite
        img.src = './img/noite.png'
        document.body.style.background = '#2b2a35'
    }
}
