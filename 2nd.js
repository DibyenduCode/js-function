
function odd(num){
let res
if(num%2==0){
    res=num/2;
    return res;
}
else{
    res=num*2;
    return res;
}
}

let final=odd(20);
console.log(final);
