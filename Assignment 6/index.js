/*
1. Write a .js program to find the occurrence of a digit in a number
Input 233456332 Output 2-2 3-4 4-1 5-1 6-1
*/

function Q1(num){
    const result = {}
    while(num > 0){
        result[num%10] = result[num%10] ? result[num%10]+1 : 1
        num = Math.floor(num/10)
    }
    
    // output
    for(let [key, value] of Object.entries(result)){
        process.stdout.write(`${key}-${value} `)
    }
}
// Q1(233456332)


/*
2. Write a program.js to find the occurrences of individual character in the string
Input “This is a sample string” 
Output: T-1 h-1 i-3 s-4 a-2 m-1 p-1 l-1 e-1 t-1 r-1 n-1 g-1
*/

function Q2(str){
    const result = {}
    for(let s of str){
        if(s === ' ') continue
        result[s] = result[s] ? result[s]+1 : 1;
    }

    for(let [key, value] of Object.entries(result)){
        process.stdout.write(`${key}-${value} `)
    }
}

// Q2("This is a sample string")



/*
3. Write a .js file to
a) Reverse the words of a string
Input: “Reverse words of this string” output: “string this of words Reverse”
b) Reverse the characters in place of words of a string
Input: “Reverse words” output: “esreveR sdrow”
c) Reverse the characters of a string
Input: “Reverse words” output: “sdrow esreveR”
*/

function Q31(str){
    return str.split(" ").reverse().join(" ")
}
// console.log(Q31("Reverse words of this string"))

function Q32(str){
    let result = []
    for(let s of str.split(" ")){
        result.push(s.split("").reverse().join(""))
    }
    return result.join(" ")
}
// console.log(Q32("Reverse words"))

function Q33(str){
    return str.split("").reverse().join("")
}
// console.log(Q33("Reverse words"))


/*
4. Given two arrays. One represents the input queue and the other represents the output queue.
Write a sequence of operations if through deque permutation on input array to produce output array
otherwise print not possible.
Arr1[]=[8,6,4,2,9] Arr2=[2,6,9,4,8]
Input: arr1[] = [ 5, 1, 2, 3 ] , arr2[] = [ 2, 5, 1, 3 ]
Output: YES
Explanation:
push 5 to input array
push 1 to input array
push 2 to input array
pop 2 from Input to output array
shift 5 from input to output array
pop 1 from output to array
push 3 from input to array
pop 3 from array to output
*/
// NOTE: still confused about this question!
function Q4(arr1, arr2){
   console.log(toStringArray(arr1).sort().toString() === toStringArray(arr2).sort().toString());
}

function toStringArray(arr){
    let result = []
    for(let i of arr){
        result.push(String(i))
    }
    return result;
}

// Q4([ 5, 1, 2, 3 ], [ 2, 5, 1, 3 ])


/*
5.
          1 
        2 1 2
      3 2 1 2 3
    4 3 2 1 2 3 4
  5 4 3 2 1 2 3 4 5
6 5 4 3 2 1 2 3 4 5 6
*/

function Q5(num){
    for(let i=1; i<=num; i++){
        // for spaces
        for(let s=i; s<=num-1; s++){
            process.stdout.write("  ");
        }
        // for decreasing value
        for(let j=i; j>=1; j--){
            process.stdout.write(j +" ");
        }
        // for increasing value
        for(let k=2; k<=i; k++){
            process.stdout.write(k + " ");
        }
        // newline
        console.log()
    }
}
// Q5(6)



/*
6. Pascal's Triangle
// TODO
*/



/*
7. 

*/


/*
8) Write a program to perform the following operations on the array of numbers
I. Increment every array element by 2 and print
II. Decrement every array element by 2 and print
III. Square every array element
IV. Reset every array element to 1
V. Print Prime numbers in array
VI. Print Check Even/Odd numbers in array
VII. Check Palindrome numbers in array
VIII. Compute Factorial of numbers in array
IX. Remove first element from array
X. Insert two elements at second position
*/


// I
function Q81(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] + 2
    }

    console.log(arr)
}

function Q82(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] - 2
    }

    console.log(arr)
}

function Q83(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = arr[i] * arr[i]
    }
}

function Q84(arr){
    for(let i=0; i<arr.length; i++){
        arr[i] = 1
    }
}

function Q85(arr){
    for(let i=0; i<arr.length; i++){
        let isPrime = true
        for(let j=2; j<=arr[i]/2; j++){
            if(arr[i] % j == 0) {
                isPrime = false
                break
            }
        }
        if(isPrime) console.log(arr[i])      
    }
}

function Q86(arr){
    for(let i of arr){
        console.log(`${i} - ${i%2==0 ? 'even' : 'odd'}`)
    }
}

function Q87(arr){
    for(let i of arr){
        let isPalindrome = String(i) == String(i).split("").reverse().join("")
        console.log(`${i} - ${isPalindrome ? 'palindrome' : 'not palindrome'}`)
    }
}

function Q88(arr){
    let factorials = []
    for(let i of arr){
        let fact = 1
        for(let f = 2; f<=i; f++) fact *= f
        factorials.push(fact)
    }
    console.log(factorials)
}

function Q89(arr){
    arr.shift()
}

function Q810(arr, val1, val2){
    arr = arr.splice(1, 0, val1, val2)
}

let myArr = [11, 5, 12, 4]
// Q81(myArr)
// Q82(myArr)
// Q83(myArr)
// console.log(myArr)
// Q84(myArr)
// console.log(myArr)
// Q85(myArr)
// Q86(myArr)
// Q87(myArr)
// Q88(myArr)
// Q89(myArr)
// console.log(myArr)
// Q810(myArr, 30, 31)
// console.log(myArr)