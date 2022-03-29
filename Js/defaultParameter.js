// Default Parameter example

// 1. default parameter에는 함수 입력도 가능
function Def() {
    return 10
}

function Add(a, b = Def()){
    console.log(a+b)
}
Add(1)  //11

//2 .
// Arguments : 모든 parameter를 한번에 다루고 싶을 경우사용 ->현재는 rest parameter 사용
// 배열과 유사한 자료형임 

function Arg(a,b,c){
    console.log(arguments[0])
    console.log(arguments[1])
}
Arg(1,2,3) // 1,2,3

// 옛날 Arguments
function Arg(a,b,c){
    for(let i =0 ; i<arguments.length; i++){
        console.log(arguments[i])
    }
}
Arg(2,3,4)

// 3. Rest Parameter
function Rest( a,b, ...rest) {
    console.log(rest[1])
}
Rest(1,2,3,4,5,6,7)

// -----------------------------
// arguments : 모든 파라미터를 []에 담아줌
// rest parameter : 모든 파라미터를 []에 담아줌, 파라미터 무조건 가장 뒤에 추가, 파라미터가 몇개 들어올지 미리 지정 안해줘도 됨
// rest vs spread : 파라미터 뒤에 붙으면 rest, 그 외의 경우는 spread 
// -----------------------------

// 4 Rest Parameter 예제
// 모든 parameter를 전부 하나 씩 콘솔창에 출력해주는 함수를 만들기

function Def(...rest){
    for (var i =0; i< rest.length; i++){
        console.log(rest[i])
    }
}
함수(1,2,3)

