// async/await 활용

// 버튼을 누르면 성공 판정하는 promise 출력
async function Add(){
    var Pro = new Promise(function(성공,실패){
        var Btn = document.querySelector('#btn')
        Btn.addEventListener('click', function(){
            성공('성공했어요')
        })
    })
    try{
        const result = await Pro
        console.log(result)
    }catch{
        console.log('실패')
    }
}
Add()

// 활용 0
function test1(){
    fetch(url)
    .then (res => {})
    .catch(error => {})
}
// 를 async 이용시
async function test2(){
    try{
        const res = await fetch(url)
        console.log(res)
    } catch (error){
        console.log('실패했습니다')
    }
}

// 활용1
const movieAPI = "https://movieapi.com/data";
const tvAPI =  "https://tvapi.com/data";

const getData = async ()=> {
    const movieData = await fetch.then(res => res.json())
    const tvData = await fetch.then(res=>res.json())
    return {
        movies : movieData,
        tvs : tvData
    }
}

//활용2
async function cal(){
    let test = new Promise((성공,실패)=> {
        let sum = 1+1
        성공(sum)
    })
    try{
        let result = await test // test.then(function(){})
        console.log(result)
    }catch {
        console.log('fail')
    }
}
cal()
