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


