var 프로미스 = new Promise(function(성공,실패){
    fetch('https://codingapple1.github.io/hello.txt')
    .then()
    .then( res => {
        return 성공(res)
    })
})
프로미스.then(function(){
    console.log('성공')
}).catch(function(){
    console.log('실패')
})