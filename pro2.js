// 1.
let a = [1,2,3]
let b = '김밥'
let c = [...b, ...a]
console.log(c)
// // ["김","밥",1,2,3]

// 2. 
// let a = [1,2,3]
// let b = ['you', 'are']
// let c = function(a,b){
//     console.log( [[...a], ...[b]] [1])
// }
// c(a,b)
// [[1,2,3], ...['you','are'] ] [1]
// [[1,2,3],'you','are'][1]
// //you

// 3.
// function 함수(a=5, b=a*2){
//     console.log(a+b)
//     return 10
// }
// 함수(3)
// // 9

//4 
// function 함수(a=5, b=a*2){
//     console.log(a+b)
// }
// 함수(undefined, undefined)
// //15

//5 
// function 어레이(...rest){
//     return rest
// }
// var newArray = 어레이(1,2,3,4,5)
// console.log(newArray)


//6
// let numbers = [2,3,5,6,4,3,6,1]

// console.log(Math.max(...numbers))

//7 
// function 정렬(a){
//     console.log([...a].sort())
// }
// 정렬('bear')


//8 
// function 글자세기(글){

//     var 결과 = {};
//       [...글].forEach(function(a){
//          if( 결과[a] > 0 ){
//             결과[a]++ 
//         } else{ 
//             결과[a] = 1 
//         } 
//       }); 
//     console.log(결과)
//     }

//     글자세기('aacbbb') 