// 1. Template literals
// 문자 중간에 변수를 집어넣을 때 편리
var name = 'Kim'
var text = `hello ${name} 입니다`;

// 2. Tagged Literals
// 문자 해체 분석기능, 문자 중간에 있는 단어 순서를 바꾸거나 변수를 제거할 떄 유용
// 첫 번쨰 parameter는 백틱 내의 순수 문자만 골라서 Array로 만들어 놓은 parameter
// 두 번째 parameter는 백틱 내의 ${}변수를 담는 파라미터
var name = 'Kim'

function Analyze(문자,변수) {
    console.log(문자)
    console.log(변수)
} 

Analyze`안녕하세요 ${name} 입니다`;

// 3. Tagged Literals 활용

var name = 'Kim'

function Analyze(문자,변수){
    console.log(문자[1] + 변수 )
}

Analyze`안녕하세요 ${name} 입니다` // 입니다Kim


