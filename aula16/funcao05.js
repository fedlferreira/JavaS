function fatorial(n){
    if (n ==1){
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

/* 
5! 5 x 4 x 2 x 1 é equivalente a 5 x 4!
5! = 5 x 4!
 ^isso é igual a:
n! = n x (n-1)!
*/