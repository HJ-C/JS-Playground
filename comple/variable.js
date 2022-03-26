
//1
// var : 재선언 가능
// let, const : 재선언 불가능

//2
// const는 변수에 오브젝트를 담으면 오브젝트 내의 데이터는 변경 가능
// const Object = { name : 'Kim'}
// Object.name ='Park'

//3 변수의 범위
// var : function내부
// let, const : {중괄호}

// 4 Hoisting
// 변수나 함수의 선언부분을 변수의 범위 맨 위로 강제로 끌고가서 가장 먼저 해석

// console.log(이름);
// var 이름 = 'Kim';
// console.log(이름);

// -> Hoisting
// var 이름;
// console.log(이름);
// 이름 = 'Kim'
// console.log(이름);

//5 closure
// 전역변수를 함수(){} 안쪽에서 자유롭게 사용가능
// 썡으로 전역변수를 만들면 window에도 보관이 됨(let말고 var키워드만)

