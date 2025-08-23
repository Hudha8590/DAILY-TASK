
//QS-1:
function fizInt(a){
    if(a%3==0 && a%5==0){
        return "fizzBuzz"
    }
    else if(a%3==0){
        return "Buzz"
    }
    else if(a%3!==0){
        return "Fizz"
    }
}
console.log(fizInt(15));

