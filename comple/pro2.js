//Spread, Rest parameter Q

// 1.
var a = [1,2,3]
var b = '김밥'
var c = [...b, ...a]
console.log(c) // ["김","밥",1,2,3]

// 2. 
var a = [1,2,3]
var b = ['you', 'are']
var c = function(a,b){
    console.log( [[...a], ...[...b]] [1])
}
c(a,b)

// [[1,2,3], ...['you','are'] ] [1]
// [[1,2,3],'you','are'][1]
// you


// 3.
function 함수(a=5, b=a*2){
    console.log(a+b)
    return 10
}
함수(3) //9

//4 
function 함수(a=5, b=a*2){
    console.log(a+b)
}
함수(undefined, undefined) //15

//5 
function Arr(...rest){
    return rest
}
var newArray = Arr(1,2,3,4,5)
console.log(newArray) //[1,2,3,4,5]


//6
let numbers = [2,3,5,6,4,3,6,1]

console.log(Math.max(...numbers)) //6

//7 
function Sort(a){
    console.log([...a].sort())
}
Sort('bear')


//8 데이터마이닝 기능
function Cnt(text){

    var res = {};
      [...text].forEach(function(a){
         if( res[a] > 0 ){
            res[a]++ 
        } else{ 
            res[a] = 1 
        } 
      }); 
    console.log(res)
    }

    Cnt('aacbbb') 