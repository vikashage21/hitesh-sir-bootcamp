
// find a palindrome number 

function palindromeFinder(str){
  let reverseStr= new String(" ");
  
   
    let z = str.length-1;
    
    while(z >=0){

      reverseStr+=str[z]; 
      z--;

    }

  


(str == reverseStr.trim()) ? console.log("it is a palindrome") : console.log("it is not a palindrome");
  

}

let str = "151"
palindromeFinder(str)