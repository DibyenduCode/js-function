function count_zero(bin){
let count=0;
for(num of bin){
    if(num=="0"){
        count=count+1;
    }
}
return count;
}

let binary="0110000101000001010";
let final=count_zero(binary);
console.log(final);