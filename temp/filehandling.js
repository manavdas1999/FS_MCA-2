// module to work with file system
// in JS, fs module is prebuilt to facilitate work with file system
const fs = require("fs"); // before ES6
// after ES6
// or import fs
// or import * as fs from 'node:fs';


// 1. to create a file
// synchronous operation, 
// fs.writeFileSync(<path>, <content>)
fs.writeFileSync('./test.txt', 'Hello from file')

// asynchronous operation,
// fs.writeFile(<path>, <content>, <error callbk fn>)
fs.writeFile('./asyncTest.txt', 'Hello from async', (err) => {
    console.log(err)
})

//NOTE: writing an existing file simply overrides it

// 2. to read from a file
// synchronous operation
// fs.readFileSync(<path>, <encoding>)
const readContent = fs.readFileSync('./test.txt', 'utf-8')
console.log(readContent)

// asynchronous operation
// fs.readFile(<path>, <encoding>, <error, result callbk fn>)
fs.readFile('./asyncTest.txt', 'utf-8', (err, readContent) => {
    if(err) console.log(err)
    else console.log(readContent)
})

// NOTE: async operations does not 'return' something instead they demand a callbk fn as argumant which will trigger and handle error and read content

// 3. to append a file
// synchronous
fs.appendFileSync('./test.txt', 'some added content')
// asynchronous
fs.appendFile('./asyncTest.txt', 'added new content to async', (err) => {
    console.log(err)
})

// NOTE: if file does not exist, append creates a new file


// 4. to copy a file
// synchronous
// fs.copyFileSync(<src path>, <des path>)
fs.copyFileSync('./test.txt', './test2.txt')

// asynchronous
fs.copyFile('./asyncTest.txt', './asyncTest2.txt', (err) => {
    console.log(err)
})



// 5. to delete a file
fs.unlinkSync('./test2.txt')

fs.unlink('./asyncTest2.txt', (err) => {
    console.log(err)
})


// 6. to rename file
fs.renameSync('./test.txt', './newTest.txt')
fs.rename('./asyncTest.txt', './newAsyncTest.txt', (err) => {
    console.log(err)
})