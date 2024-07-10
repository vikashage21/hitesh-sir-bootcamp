
// function to find the frequency of each character in a string.
function frequency (str){
    let obj ={}
    let k =0;
    let j 
for (let i=0; i<=str.length-1; i++){
    if(!obj[str[i]]){
        obj[str[i]] = 1
    }else{
        obj[str[i]] +=1
    }
    
   
}
return obj;

}

console.log(frequency("doll")) // should return {h: 0, e: 1, l: 2, o: 3,  " ": 4, w: 5, r: 6, d: 7}