// ```
let fib = 1

let fib_seq = [1]

const seq = () => {
    if(fib_seq.length < 20){
        fib_seq.push(fib)
        fib = fib_seq[fib_seq.length-1] + fib_seq[fib_seq.length-2]
        seq()
    }
    else{
        console.log(fib_seq)
    }
}

seq()
// ```