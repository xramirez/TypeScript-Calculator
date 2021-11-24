let output = document.querySelector('.output') as HTMLInputElement;
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
        output.value += button.innerHTML;
    }
    if(button.className.indexOf('equal')!==-1){
        console.log(button.innerHTML);
        let calculation = calculate(/*pass in params here*/);
        output.value = calculation.toString();
    }
    /* create another condition to clear the value of the input when C is pressed*/
});

//create a function that takes in 2 numbers and a string (operand)
function calculate(/*You fill in here*/){
    /* based on the operand, find the correct value of the 2 numbers.  i.e., 4+5=9, 4*5=20, etc
    return that value
    */
   return 0;

}