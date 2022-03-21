
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
