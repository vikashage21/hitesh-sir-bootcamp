let a =1;
let b=15;
let c=6;

// if (a+b>c){
//     console.log('rectangle can be formed ')
// }else if(b+c>a){
//     console.log('rectangle can be formed ')
// }else if(a+c > b){
//     console.log('rectangle can be formed ')
// }else{
//     console.log('rectangle cannot be formed ')
// }

if (a+b>c && b+c> a && a+c >b){
    console.log('rectangle can be formed ')
}else{
    console.log('rectangle cannot be formed ')
}