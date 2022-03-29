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

async function Add(){
    var 연산 = new Promise((성공,실패)=> {
        var 결과 = 1+1
        성공()
    })
    연산.then().catch()
}
Add()
// 이 함수를
async function Add(){
    var 연산 = new Promise((성공, 실패)=>{
      var 결과 = 1 + 1;
      성공(결과);
    });
    var 결과 = await 연산;
  }
  Add();
// 단 성공시에만 이렇게 사용

// 실패()를 출력시
async function Add(){
    var 연산 = new Promise((성공, 실패)=>{
      실패();
    });
    try {  var 결과 = await 어려운연산 }
    catch { 연산 Promise가 실패할 경우 실행할 코드 }
  }
// 오히려 복잡하니 그냥 .then 사용하자


// asyncPro5.js에서 async/await 활용 확인