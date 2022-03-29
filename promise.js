// 0. promise 기본 형태
var 프로미스 = new Promise(function(성공,실패){
    var 어려운연산 = 1+1;
    성공()
    실패()
})
프로미스.then(function(){
    console.log('성공')
}).catch(function(){
    console.log('실패')
})

// 1 . 연산 결과 이용
var 프로미스 = new Promise(function(성공,실패){
    var 어려운연산 = 1+1;
    성공(어려운연산)
})
프로미스.then(function(결과){
    console.log('연산이 성공했습니다' + 결과)
}).catch(function(){
    console.log('실패')
})

// 2. Promise 활용 1
// 1초 대기 성공 후에 특정 코드를 실행
var 프로미스 = new Promise(function(성공,실패){
    setTimeout(function(){
        성공()
    },1000)
})
프로미스.then(function(){
    console.log('1초 대기 성공했습니다')
}).catch(function(){
    console.log('실패했습니다')
})

// 3. Promise 특징
// Promise는 동기를 비동기로 만들어주는 코드가 아니다
// Promise는 비동기 실행과 전혀 상관이 없다
// 그냥 코딩을 예쁘게 해주는 일종의 디자인 패턴
// 자바스크립트는 평시엔 동기적으로 실행되며 실행을 지원하는 특수한 함수들 덕분에 가끔 비동기적 실행이 될 뿐


// 4. Promise 활용 1
// <img> 이미지 로딩 성공시 특정 코드를 실행
// 이미지가 로드 되면 콘솔창에 성공,로드가 실패하면 콘솔창에 실패 출력


var Def = new Promise(function(성공,실패){
    var Img = document.getElementById('test').addEventListener('load',function(){
        성공(Img)
    })
})
Def.then(function(){
    console.log('성공')
}).catch(function(){
    console.log('실패')
})
















// 1. 
let 이미지로딩 = new Promise(function(성공,실패){
    let img = document.querySelector('#test')
    img.addEventListener('load', function(){
        성공()
    })
    img.addEventListener('error', function(){
        실패()
    })
})

이미지로딩.then(function(){
    console.log('성공')
}).catch(function(){
    console.log('실패')
})

//2. 
let 프로미스 = new Promise( (성공,실패)=>{
    fetch('https://codingapple1.github.io/hello.txt')
    .then( res=> res.json())
    .then( res => {
        성공(res)
    })
})

프로미스.then(function(res){
    console.log(res)
})