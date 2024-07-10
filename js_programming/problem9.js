// given an array which only contains 0 and 1 
// the data is shufgled randomley

// write a funtion that can rearrange the data that all 0 's are present before the 1;


function arrangeArr(arr) {
    return arr.sort()
}



let arr = [0, 1, 0, 1, 0, 0, 1, 1, 1, 0];

console.log(arrangeArr(arr))
//  output [
//     0, 0, 0, 0, 0,
//     1, 1, 1, 1, 1
//   ]


// other solution

function swapArr(arr) {
    let allZeros = arr.filter(function (item) {
        return item === 0;
    })

    let allOnes = arr.filter(function (item) {
        return item === 1;
    })
    return newArry = [...allZeros, ...allOnes];

}

console.log("the swap arrays are " + swapArr(arr)) // [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]


// third solution is 

function rearrangeArray(arr) {

    let allZeros = [];
    let allOnes = [];
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) {
            allZeros.push(arr[i]);


        } else {
            allOnes.push(arr[i]);
        }

    }

    return newArray = [...allZeros, ...allOnes]
}

console.log(rearrangeArray(arr)) // [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]

// fourth solution is


function swapArr2(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function separate(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        if (arr[i] == 1) {
            swapArr2(arr, i, j)
            j--
        }else{
            i++;
        }
    }
}

let arr1 =[0,1,0,1,1,1,0,0]


separate(arr1);


console.log(arr1)