
function verificar(){
 var data = new Date()
 var ano = data.getFullYear()

 var fano = document.getElementById('txtano')
 var res = document.querySelector('div#res')

 if(fano.value == 0 || fano.value > ano){
    window.alert('[ERRO]Verifique os dados e tente novamente!')
 } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked){
        genero = 'homem'
        if (idade >=0 && idade <10){
            //criança
            img.setAttribute('src','./img/fotor_criança_menino.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src','./img/fotor_homen_jovem.png')
        } else if (idade <50){
            //adulto
            img.setAttribute('src','./img/fotor_homen_adulto.png')
        }else {
            //idoso
            img.setAttribute('src','./img/fotor_homem_idoso.png')
        }
    } else if(fsex[1].checked){
        genero = 'mulher'
        if (idade >=0 && idade <10){
            //criança
            img.setAttribute('src','./img/fotor_criança_menina.png')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src','./img/fotor_mulher_jovem.png')
        } else if (idade <50){
            //adulto
            img.setAttribute('src','./img/fotor_mulher_adulta.png')
        }else {
            //idoso
            img.setAttribute('src','./img/fotor_mulher_idosa.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML =`Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
 }



}
