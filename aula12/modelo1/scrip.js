function carregar() {
    var per = window.document.getElementById('periodo');
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    per.innerHTML = `Agora são ${hora}`
    if (hora >= 0 && hora < 12) {
        msg.innerHTML = 'Bom dia, Princesa! por favor sente';
        img.src = 'imagem/glock.png';} 
        else if (hora >= 12 && hora < 18){
        msg.innerHTML = 'Indicação para você <br> Love in the Afternoon - Legiao Urbana';
        img.src = 'imagem/boatarde.png';
        document.body.style.background = 'rgba(210, 153, 46, 0.985)'; }
        else {
        msg.innerHTML = 'Indicação pra você <br> Boa noite - Sorriso Maroto';
        img.src = 'imagem/boanoite.jfif';
        document.body.style.background = 'rgba(52, 52, 219, 0.816)'; 
    }

        }
    
    

