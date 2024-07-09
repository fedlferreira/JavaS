function contar() {
    var ini = window.document.getElementById('txti');
    var fim = window.document.getElementById('txtf');
    var passo = window.document.getElementById('txtp');
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {window.alert('Erro! Faltam dados')
    } else { res.innerHTML = "Contando:<br>"
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
        if ( i < f)
            {for(let c = i; c <= f; c = c += p )
            res.innerHTML +=` \uD83D\uDC49 ${c} `
        } else {
            for(let c = i; c >= f; c = c -= p )
            res.innerHTML +=` \uD83D\uDC49 ${c} `
        }
        
}
   
}
