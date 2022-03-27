// prototype, this, class가 아닌 ES5식 상속방법

// Object.create(부모object)

// 1. ES5식 상속 (Object.create(부모) )
var 부모 = {name : 'kim', age : 50 }
var 자식 = Object.create(부모)

console.log(자식.age) //50

//2 ES5식 변경
var 부모 = { anme : 'Kim', age : 50}
var 자식 = Object.create(부모)
자식.age = 20

console.log(자식.age) // 20
// 자식이라는 object가 직접 age메소드를 가지고 있다면 그거 출력
// 없으면 자식의 부모 prototype을 찾아 age가 거기 있으면 그거 출력
// 거기도 없으면 부모의 부모 prototype을 찾아 age출력

//3 상속의 상속
var 부모 = { anme : 'Kim', age : 50}
var 자식 = Object.create(부모)
자식.age = 20

var 손자 = Object(자식)
console.log(손자.age) // 20
// 손자의 age 메소드를 찾고 없으면 prototype에 있는지 확인하고 거기도 없으면
// 부모의 부모 prototype을 찾아 가장 가까운 age출력

