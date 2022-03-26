
//Prototype 추가
기계.prototype.gender = '남'

var 학생1 = new 기계('현준')
var 학생2 = new 기계()

// prototype : key와 value 값을 추가하면 학생1 or 학생2에 gender가 없어도 사용가능
console.log(학생1.gender)

// Prototype 특징
// 1.프로토타입은 함수에만 생성가능
// 2. 부모 유전자(부모의 프로토타입)을 검사하고싶다면 __proto__ 사용
// 3. __proto__를 이용해 부모님 강제 등록하기

// var 부모 = { name : 'Kim'}
// var 자식 = {}
// 자식.__proto__ = 부모 
// console.log(자식.name)

// 상속기능 구현 1. constuctor 2. Object.create(물려받을 부모 object)


// // 1. component로 Student 를 만든후 여러 오브젝트 자료를 생성후 실행
// function Student(이름,나이){
//     this.name = 이름,
//     this.age = 나이,
//     this.sayHi = ()=>{
//         console.log(`안녕 나는 ${this.name}이야`)
//     }
// }

// let 학생1  = new Student('Kim',20)
// let 학생2  = new Student('Park',21)
// let 학생3  = new Student('Kim',22)

// 학생1.sayHi()



// // 2. 
// function Parent(){
//     this.name = 'Kim'
// }

// let a = new Parent()

// a.__proto__.name = 'Park'
// console.log(a.name)

// 3. 모든 array에 적용할 수 있는 함수를 새로 만들기

// Array.prototype.remove3 = function() {
//     for (var i=0; i<this.length; i++){
//         if(this[i] === 3){
//             this.splice(i,1)
//         }
//     }
// }

// var arr = [1,2,3,4]
// arr.remove3()

// console.log(arr)



