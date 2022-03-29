// Promise가 어렵다면 그보다 훨씬 쉽게 쓸 수 있는 ES8 문법
// async,await 키워드는 Promise와 then을 쉽게 만들어주는 문법

//1 . async
// async 키워드를 쓰면 Promise 오브젝트가 생김(new Promise()를 할 필요 없다)
// function 선언 앞에만 붙을 수 있다(함수형만 쓸 수 있다.)
// 따라서 이 함수 자체가 Promise가 되기에 뒤에 then을 붙일 수 있다
async function Def(){
    1+1
}
Def().then(function(){
    console.log('성공')
})

// 2. 함수안에서 연산한 결과를 then 안에서 사용하고 싶다면?
async function Def(){
    return 1+1
}
Def().then(function(결과){ //parameter 입력시 return 값 호출
    console.log(결과)
})

// 3. await 
// then() 함수가 귀찮다면 await 키워드를 쓸 수 있다.
// await는 그냥 프로미스.then() 대체품으로 생각
