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
        res.innerHTML = ''
    } else {
        window.alert('Valore inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}
function finalizar() { 
    if(valores.length == 0) {
        window.alert('adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / tot
            if (valores[pos] > maior) maior = valores[pos]; if (valores[pos] < menor) menor = valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo temos ${tot} Números cadastrados</p>`
         res.innerHTML += `<p> O menor valor informado foi: ${menor}</p>`
         res.innerHTML += `<p> O maior valor informado foi: ${maior} </p>`
         res.innerHTML += `<p>Somando todos os valores temos: ${soma}</p>`
         res.innerHTML += `<p>A media dos valores é: ${media}</p>`
         res.innerHTML += `Se tiver certo tu me deve o \uD83D\uDC4C`
    }
    
}
