// 스프레드 : 대괄호 삭제, 중괄호 삭제
// (...)는 괄호삭제, [...]는 복사/합치기
// spread 연산자는 1. 함수소괄호, 2. 오브젝트 중괄호 내, 배열 대괄호 내에서 보통 사용함

// 1. 배열 스프레드
const Arr = ['안녕', '월드']

console.log(...Arr) // 'hello','world'


// 2. 문자 스프레드
const 문자 = 'hello'

console.log(...문자) // h e l l o


//3 배열 합치기/복사
const a = [1,2,3]
const b = [4,5]

const c= [...a, ...b]
console.log(c) // [1,2,3,4,5]

// 4. 오브젝트 합치기/복사
var o1 = {a:1, b:2}
var o2 = {...o1, c:3}

console.log(o2) // {a:1, b:2, c:3}

// 오브젝트 key값이 중복 됐을 때 => 뒤에 오는 a가 출력
let o1 = {a:1, b:2}
let o2 = {a:3, ...o1}

console.log(o2) // {a:1, b:2}


// 5. Spread operator 활용 
// array를 parameter 형태로 집어 넣고 싶을 때 

function Add(a,b,c){
    console.log(a+b+c)
}
let arr = [10,20,30]

//-> 3개중 1개
Add(10,20,30)
Add(arr[0], arr[1],arr[2])
Add(...arr)


//6. apply call 함수
var person = {
    인사 : function(){
        console.log(this.name + '안녕')
    }
}

var person2 = {
    name : '손흥민',
}

person.인사.apply(person2) //손흥민안녕

// apply() : 이 함수를 실행하는데 저 오브젝트에 적용해 실행
// 실행할함수.apply(적용할 곳)