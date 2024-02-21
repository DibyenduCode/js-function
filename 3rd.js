function make_avg(avgarr){
let totnum = avgarr.length;
let sum=0;
for(num of avgarr){
sum=sum+num;
}
let avg=sum/totnum;
return avg;
}

let number=[12,34,33,23,23,34];
let final=make_avg(number);
console.log(final);