function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    let run = new Function(expr);
    return run(arg);
    // write your solution here
}

module.exports = {
    expressionCalculator
}