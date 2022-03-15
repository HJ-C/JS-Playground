// var 학생1 = {
//     name : "Kim",
//     age : 15,
//     sayHi : function() {
//         console.log(`안녕하세요 ${학생1.name}입니다`)
//     }
// }

// 학생1.sayHi()

function 기계(이름) {
    this.name = 이름
    this.age = 15
    this.sayHi = function(){
        console.log(`안녕하세요 ${this.name}입니다`)
    }
}

var 학생1 = new 기계('현준')
var 학생2 = new 기계()

학생1.sayHi()