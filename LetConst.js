//스프레드란 대괄호 삭제, 중괄호 삭제
// (...)는 괄호삭제, [...]는 복사/합치기

// 1. 배열 스프레드
// const 어레이 = ['안녕', '월드']

// console.log(...어레이)


// 2. 문자 스프레드
// const 문자 = '안녕'

// console.log(...문자)

// const a = [1,2,3]
// const b = [4,5]

// const c= [...a, ...b]
// console.log(c)

// var o1 = {a:1, b:2}
// var o2 = {...o1, c:3}

// console.log(o2)

// let o1 = {a:1, b:2}

// let o2 = {...o1, c:3}

// console.log(o2)

// function 더하기(a,b,c){
//     console.log(a+b+c)
// }

// let 어레이 = [10,20,30]
// 더하기(어레이[0], 어레이[1],어레이[2])
// 더하기(...어레이)

// var person = {
//     인사 : function(){
//         console.log(this.name + '안녕')
//     }
// }

// var person2 = {
//     name : '손흥민',
// }

// person.인사.apply(person2)
//손흥민안녕

// apply()는 그냥 함수를 옮겨와서 실행해주세요
