// find out the minimum number 

let x = 4;
let y = 1;
let n = 0;

// if (x < y) {
//     if (x < n) {
//         console.log('the smallest number is x', x)
//     }

// }
// else if (y < x) {
//     if (y < n) {
//         console.log('the smallest number is y', y)
//     }
//     else {
//         console.log('the smallest number is n', n)
//     }

// }

// other solution is

if (x< y && x <n){
    console.log('the smallest number is', x)
}else if(y<n && y <x){
    console.log('the smallest number is', y)
}else{
    console.log('the smallest number is', n)
}

// other solution is

// let arr = [4,0,1,2,3,4]
// arr.sort()
// console.log('the smallest number in the arrr is ' + arr[0])
 