// var 프로미스 = new Promise(function(성공,실패){
//     var 어려운연산 = 1+1;
//     성공()
//     실패()
// })

// 프로미스.then(function(){
//     console.log('성공')
// }).catch(function(){
//     console.log('실패')
// })

//1. 
// let 이미지로딩 = new Promise(function(성공,실패){
//     let img = document.querySelector('#test')
//     img.addEventListener('load', function(){
//         성공()
//     })
//     img.addEventListener('error', function(){
//         실패()
//     })
// })

// 이미지로딩.then(function(){
//     console.log('성공')
// }).catch(function(){
//     console.log('실패')
// })

//2. 

// let 프로미스 = new Promise( (성공,실패)=>{
//     fetch('https://codingapple1.github.io/hello.txt')
//     .then( res=> res.json())
//     .then( res => {
//         성공(res)
//     })
// })

// 프로미스.then(function(res){
//     console.log(res)
// })