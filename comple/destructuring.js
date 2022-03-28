// Array, Object 자료형에 있는 자료들을 변수를 여러개 뽑을 때 = destructuring 문법사용

// 1 .Array 안에 있는 데이터를 변수에 담는 방법
// var array = [2,3,4];
// var a = array[0]; 
// var b = array[1];
// [2,3,4]라는 array에 3개의 데이터들을 전부 밖으로 꺼내 변수에 담고 싶을때
var [a,b,c] = [2,3,4]

// 2 Object 안에 있는 데이터를 변수에 담는 방법
var {name : a, age : b} = {name : 'Kim', age :30}
// 또는
var {name , age} = { name: 'Kim', age : 30}

// 3 default 값 
var [a,b,c=10] = [2,3]
var {name, age =20} = {name :"Kim"}

// 4 destructuring 문법
var name = 'Kim'
var age = 30
var obj = {
    name : name,
    age : age
}
// 다음과 같이 생략 가능
var name = 'Kim'
var age = 30
var obj = {
    name,
    age
}

// 5. 함수의 destructuring
function Def( name,age){
    console.log(name)
    console.log(age)
}
var array = ['Kim', 30]
Def(array[0], array[1])
// 위의 함수를
function Def([name, age]){
    console.log(name)
    console.log(age)
}
var array = ['Kim', 30]
함수( ['kim',30])

// 6 destructuring 활용
var [number, address] = [ 30, 'seoul' ];
var {address : a , number = 20 } = { address, number }; 
// var {address : a , number = 20 } = { address : 'seoul', number : 30 }
// address = seoul, number = 30

