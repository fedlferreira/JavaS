var num = window.document.getElementById('inum')
var res = window.document.getElementById('res')
var lista = window.document.getElementById('flista')
var valores = []

function isNumero(n){
    if(Number(n) >= 1 && (n) <= 100){
        return true
    } else { return false}
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function enviar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert('Valore inválido ou já encontrado na lista')
    }
}
