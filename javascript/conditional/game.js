console.log("Printing all number bewtween -10 and 19")
var num = -10
while(num < 20) {
    console.log(num);
num++;
}
console.log("PRINTING EVEN NUMBER BETWEEN 10 AND 40")
var num = 10
while(num <= 40){
 if(num % 2 === 0){
    console.log(num);
    }
num++;
}
console.log("PRINTING ODD NUMBERS BETWEEN 300 AND 333")
var num = 300
while(num <= 333){
 if(num % 2 !== 0){
    console.log(num);
    }
num++;
}
console.log("PRINTING ALL NUMBERS DIVISIBLE BY 5 AND 3 BETWEEN 5 AND 50 ")
var num = 5
while(num <= 50){
 if(num % 5 === 0 && num % 3 === 0){
    console.log(num);
    }
num+=1;
}