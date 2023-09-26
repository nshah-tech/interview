function calculate(x, y, operation) {
	let result =  operations.find(operator => {
        return operator.type === operation
    }).operator(x,y)
    display(result)
}

function add(x,y) {
    return x + y
}
function subtract(x,y) {
    return x - y
}
function divide(x,y) {
    return x / y
}
function display(message) {
    console.log(message);
}

const operations = [
    {
        type: 'add',
        operator: add
    },
    {
        type: 'subtract',
        operator: subtract
    },
    {
        type: 'divide',
        operation: divide
    },
]

calculate(1,2,'add')