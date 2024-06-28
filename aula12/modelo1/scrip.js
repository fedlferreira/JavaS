function carregar() {
    var per = window.document.getElementById('periodo');
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var play = window.document.getElementById('vid')
    var play2 = window.document.getElementById('vid2')
    var play3 = window.document.getElementById('vid3')
    var data = new Date()
    var hora = 19//data.getHours()
    var min = 15//data.getMinutes() 
    per.innerHTML = `Agora são ${hora} Horas e ${min} Minutos`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = 'Bom dia, Princesa! por favor sente';
        img.src = 'imagem/glock.png';
        play.style.display = "block"
        play2.style.display = "none";
        play3.style.display = "none";} 
        else if (hora >= 12 && hora < 18){
        msg.innerHTML = 'Indicação para você <br> Love in the Afternoon - Legiao Urbana';
        img.src = 'imagem/boatarde.png';
        document.body.style.background = 'rgba(210, 153, 46, 0.985)'; 
        play.style.display = "none"
        play2.style.display = "block";
        play3.style.display = "none";
    }
        else {
        msg.innerHTML = 'Indicação pra você <br> Boa noite - Sorriso Maroto';
        img.src = 'imagem/boanoite.jfif';
        document.body.style.background = 'rgba(52, 52, 219, 0.816)';
        play.style.display = "none"
        play2.style.display = "none";
        play3.style.display = "block"; 
    }

    }
    
    

