// given the side length of a traingle in the from of 3 interggers . check if the given traingle is equilateral or scalene or isosceles

let a =7;
let b=4;
let c=4;

if (a == b && b == c && a ==c ){
    console.log('this is equailateral trangle')
}else if(a !== b &&  b!== c && a!==c){
    console.log('this is scalene trangle')
}else{
    console.log('this is isosceles trangle')
}