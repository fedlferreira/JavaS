function contar() {
    var ini = window.document.getElementById('txti');
    var res = window.document.getElementById('res')

      if (ini.value.length == 0 ) {window.alert('Erro! Faltam dados')
    } else { res.innerHTML = "Contando:<br>"
        let i = Number(ini.value)
       {for(let c = 1; c <= 10; c++ ) res.innerHTML += `${i} x ${c} = ${i * c}<br>`;}

}

}