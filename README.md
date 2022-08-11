# Function Tasks Home Work
1. ### Создайте функцию который выводить 'Hello world!'
* #### Code
    ##### function sayHello(){
    #####   console.log('Task--1-->Hello world')
    ##### }
    ##### sayHello()
* #### Result
    ##### Task--1-->Hello world

2. ### Создайте самовызыващию функцию который выводить 'Я учу HTML CSS JS REACT'
* #### Code
    ##### const getFunc = (function (){
    #####   console.log('Task--2-->Я учу HTML CSS JS REACT')
    ##### }())
* #### Result
    ##### Task--2-->Я учу HTML CSS JS REACT

3. ### Создайте функцию у которого есть 2 аргумента 'a' и 'b' и выводите эти значение на консоль
* #### Code
    ##### function foo(a,b){
    #####   console.log(\`Task--3-->I am \${a} and my brother \${b}\`)
    ##### }
    ##### foo('Tom', 'Will')
* #### Result
    ##### Task--3-->I am Tom and my brother Will

4. ### Создайте функцию plus который плюсует два значения 'a' и 'b';
* #### Code
    ##### function plus(a,b){
    #####   console.log('Task--4-->',a + b)
    ##### }
    ##### plus(2,3)
* #### Result
    ##### Task--4--> 5

5. ### Создайте функцию который определяеть четные или нечетныйе числа если четные выводить 1 иначе 2
* #### Code
    ##### function convert(a){
    #####   if(a % 2 == 0){
    #####       console.log('Task--5-->Четный')
    #####   } else console.log('Task--5-->Нечетный')
    ##### }
    ##### convert(1)
* #### Result
    ##### Task--5-->Нечетный

6. ### Создайте функцию который находит максимальное число массива; 
* #### Code
    ##### function getMaxArray(arr){
    ##### let min = arr[0]
    ##### for(let i=0; i<=arr.length; i++){
    #####    if(arr[i] > min){
    #####        max = arr[i]
    #####        min = arr[i]
    #####    }
    ##### }
    ##### console.log('Task--6-->',max)
    ##### }
    ##### getMaxArray([3,2,7,1,4,6,5])
* #### Result
    ##### Task--6--> 7

7. ### Создайте функцию который переворачивает значение стринга Например: значение  = ‘test’; после функции значение = ’tset’ 
* #### Code
    ##### function str(text){
    ##### console.log('Task--7-->',text.split('').reverse().join(''))
    ##### }
    ##### str('test')
    ##### str('hello')
* #### Result
    ##### Task--7--> tset
    ##### Task--7--> olleh
