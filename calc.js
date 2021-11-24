var output = document.querySelector('.output');
document.querySelector('.calc').addEventListener('click', function (evt) {
    var button = evt.target;
    /*declare the following variables and types
    num1 as number
    num2 as number
    operand as string*/
    if (button.className.indexOf('num') !== -1) {
        console.log(button.innerHTML);
        output.value += button.innerHTML;
    }
    if (button.className.indexOf('operator') !== -1) {
        console.log(button.innerHTML);
        output.value += button.innerHTML;
    }
    if (button.className.indexOf('equal') !== -1) {
        console.log(button.innerHTML);
        var calculation = calculate( /*pass in params here*/);
        output.value = calculation.toString();
    }
});
//create a function that takes in 2 numbers and a string (operand)
function calculate( /*You fill in here*/) {
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */
    return 0;
}
