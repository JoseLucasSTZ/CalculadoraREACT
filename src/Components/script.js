let n = ''
let n1
let n2
let ns = []
let operation
let variables = []

function getValue(valor) {
    console.log(n)
    n = n + valor.toString()
    console.log(n)
    
}

function getOperation(valor) {
    operation.push(valor)
    alert(operation)
}

function getVariable(valor) {
    variables.push(valor)
    alert(variables)
}

function get2Value(valor) {
    let n1
    switch (operation) {
        case operation === '%':
            ns.push(n)
            break;

        case operation === '/':
            ns.push(n)

            break;

        case operation === '-':
            ns.push(n)
            break;

        case operation == '+':
            ns.push(parseInt(n))
            console.log(ns)
            break;

        case operation === 'raiz':
            //code    
            break;

        case operation === '2':
            //code    
            break;
    }
}