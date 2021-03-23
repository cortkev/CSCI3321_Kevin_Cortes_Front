function updateDisplay(newValue){
    var d = document.getElementById('display');
    switch(newValue){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            d.innerHTML += newValue; //appends the integer value
            break;
        case 'AC':
            d.innerHTML = ' ';
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if(d.innerHTML == ''){
                break;
            }
            //will not add more operators when it ends with another operator
            else if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('-')
            || d.innerHTML.endsWith('*') || d.innerHTML.endsWith('/')){
                break;
            }
            else{
                d.innerHTML += newValue; //appends the operator
            }
            break;
        case '=':
            //if the the display is empty and '=' is pressed nothing will happen
            if(d.innerHTML == ' '){
                d.innerHTML = ''
            }
            //will output "ERR" if it ends with an operator
            if(d.innerHTML !== '')
            {
                if(d.innerHTML.endsWith('+') || d.innerHTML.endsWith('-') || 
                d.innerHTML.endsWith('*') || d.innerHTML.endsWith('/')){
                    d.innerHTML = 'ERR';
                }
                else{
                    d.innerHTML = eval(d.innerHTML);
                }
            }
    }
}