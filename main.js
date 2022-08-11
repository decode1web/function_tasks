// Task 1
function sayHello(){
    console.log('Task--1-->Hello world')
}
sayHello()

// Task 2
const getFunc = (function (){
    console.log('Task--2-->Я учу HTML CSS JS REACT')
}())

// Task 3
function foo(a,b){
    console.log(`Task--3-->I am ${a} and my brother ${b}`)
} 
foo('Tom', 'Will')

// Task 4
function plus(a,b){
    console.log('Task--4-->',a + b)
}
plus(2,3)

// Task 5
function convert(a){
    if(a % 2 == 0){
        console.log('Task--5-->Четный')
    } else console.log('Task--5-->Нечетный')
}
convert(1)

// Task 6
function getMaxArray(arr){
    let min = arr[0]
    for(let i=0; i<=arr.length; i++){
        if(arr[i] > min){
            max = arr[i]
            min = arr[i]
        }
    }
    console.log('Task--6-->',max)
}
getMaxArray([3,2,7,1,4,6,5])

// Task 7
function str(text){
    console.log('Task--7-->',text.split('').reverse().join(''))
}
str('test')
str('hello')