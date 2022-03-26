// 1. 변수에 함수 추가
// var 학생1 = {
//     name : "Kim",
//     age : 15,
//     sayHi : function() {
//         console.log(`안녕하세요 ${학생1.name}입니다`)
//     }
// }
// 학생1.sayHi()


// 2. Prototype
// function 기계(이름) {
//     this.name = 이름
//     this.age = 15
//     this.sayHi = function(){
//         console.log(`안녕하세요 ${this.name}입니다`)
//     }
// }

//Prototype 추가
// 기계.prototype.gender = '남'

// var 학생1 = new 기계('현준')
// var 학생2 = new 기계()

// prototype = key와 value 값을 추가하면 학생1 or 학생2에 gender가 없어도 사용가능
// console.log(학생1.gender)

// Prototype 특징
// 1.프로토타입은 함수에만 생성가능
// 2. 부모 유전자(부모의 프로토타입)을 검사하고싶다면 __proto__ 사용
// 3. __proto__를 이용해 부모님 강제 등록하기

// var 부모 = { name : 'Kim'}
// var 자식 = {}
// 자식.__proto__ = 부모 
// console.log(자식.name)

// 상속기능 구현 1. constuctor 2. Object.create(물려받을 부모 object)

