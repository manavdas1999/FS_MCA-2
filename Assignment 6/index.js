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


