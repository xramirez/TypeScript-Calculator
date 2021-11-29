let output = document.querySelector('.output') as HTMLInputElement;
let num1 = 0;
let num2 = 0;
let operand:string;
let operandIndex = 0;
  /*declare the following variables and types
    num1 as number
    num2 as number
    operand as string
    
    Figure out how to set the values of num1 and num2 as the buttons are clicked
    */
document.querySelector('.calc').addEventListener('click',(evt)=>{
    let button = evt.target as HTMLButtonElement;
  
    if(button.className.indexOf('num')!==-1){
        console.log(button.innerHTML);      
        output.value += button.innerHTML;
    }
    if(button.className.indexOf('operator')!==-1){
        console.log(button.innerHTML);  
        if(output.value == '')
        {
            output.value = '0';
            output.value += button.innerHTML;
            num1 = 0;
        }    
        else{
            num1 = parseInt(output.value);
            output.value += button.innerHTML;
        }
        operandIndex = output.value.length;
        operand = output.value.substring(operandIndex - 1);
        console.log("First Number: " + num1)
    }
    if(button.className.indexOf('equal')!==-1){
        console.log(button.innerHTML);
        console.log(operandIndex);
        if(output.value.substring(operandIndex) == '')
        {
            output.value += '0';
            num2 = 0;
        }    
        else{
            num2 = parseInt(output.value.substring(operandIndex));
        }
        console.log("Second number: " + num2);

        let calculation = calculate(num1, num2, operand);
        output.value = calculation.toString();
    }
    /* create another condition to clear the value of the input when C is pressed*/
    if(button.className.indexOf('reset')!==-1){
        output.value = '';
        num1 = 0;
        num2 = 0;
    }
});

//create a function that takes in 2 numbers and a string (operand)
function calculate(n1:number, n2:number, op:string):number{
    switch(op){
        case '+':
            return (n1 + n2);
        case '-':
            return (n1 - n2);
        case '*':
            return (n1 * n2);
        case '/':
            return (n1 / n2);
    }
}