// sync/ async
// javascript는 항상 동기식 처리 (sync)
// 동기식 처리 : 한번에 코드 한줄씩 차례차례 실행

// javascript는 비동기처리(async)도 가능
console.log(1);
setTimeout(function(){}, 1000);
console.log(2);

// setTimeout()함수는 실행까지 시간이 조금 걸리는 함수
// 웹브라우저에서는 특수한 코드를 발견하면 제쳐두고 다른 코드부터 실행(큐에 저장후 전부 실행되면 스텍에 추가)
// 이는 자바스크립트 언어 자체 기능이 아닌 웹브라우저 덕분에 해낼 수 있음
// 따라서 동기식처리가 가능하다 봄 

// 자바스크립트에서 순차적으로 실행하고 싶을 때  = 콜백함수 사용
console.log(1);
setTimeout(function(){
  console.log(2);
}, 1000);
console.log(3);

 
// 자바스크립트는 파이썬과 다르게 
function 첫째함수(){
    console.log(1)
  }
  
  function 둘째함수(){
    console.log(2)
  }
  
  첫째함수();
  둘째함수(); //오류가 발생할 수 있음

// 함수안에 함수를 넣는 방식 이용(콜백함수)
function 첫째함수(둘째함수){
    console.log(1)
    둘째함수() // 파라미터값은 달라도 됨
}
function 둘째함수(){
    console.log(2)
}
첫째함수(둘째함수)
//또는 함수선언문을 직접 넣을수 있음

첫째함수(functuon(){
    console.log(2)
})

// 순차적 실행을 위해 콜백함수를 여러개 사용시 
// 1. 콜백지옥 일어남
// 2. Promise 패턴 사용시 깔끔해짐

첫째함수().then(function(){
  다음 실행문
}).then( function(){
  다음 실행문
})
