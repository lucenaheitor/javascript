function verificar(){
    var date = new  Date()
    var  ano =  date.getFullYear()
    var fano = document.getElementById('txtano')
    var res= document.getElementById('res')
    if(fano.value.length ==0 || fano.value >fano){
        window.alert('[ERRO] Verifique os danos de tente novamente.')
    }else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
           genero = 'Homem'
           if (idade  >=0 && idade <10){
               //criança
               img.setAttribute('src', 'fotomenino.png')
           }else if(idade < 21){
               //adolescente
               img.setAttribute('src', 'fotoadolescentehomem.png')
           }else if( idade < 50 ){
               //Adulto
               img.setAttribute('src', 'fotoadultohomem.png')
           }else{
               //Idoso
               img.setAttribute('src', 'fotovelhohomem.png')
           } 
       }else if(fsex[1].checked){
           genero = 'Mulher'
           if (idade  >=0 && idade <10){
            //criança
            img.setAttribute('src','fotomenina.png')
        }else if(idade < 21){
            //adolescente
            img.setAttribute('src', 'fotoadoilescentemulher.png')
        }else if( idade < 50 ){
            //Adulto
            img.setAttribute('src', 'fotoadultomulher.png')
        }else{
            //Idoso
            img.setAttribute('src', 'fotovelhomulher.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
       res.appendChild(img)
    }  

    
}