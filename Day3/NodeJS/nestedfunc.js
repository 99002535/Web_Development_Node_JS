(function greet(name){
    console.log('hello '+name);
})('Suraj');

// var avg = (function avgOfNum(n1,n2,n3){
//     var total = (function(n1,n2,n3){
//         return n1+n2+n3;
//     })(n1,n2,n3);
//     console.log(total);
//     return total/3;
// })(10,20,30);
// console.log(avg);

var avgOfNum = function(x,y){
    return function(){
        return (x+y);
    }
}
var result = avgOfNum(10,20);
console.log(result());
console.log(avgOfNum(10,20)());