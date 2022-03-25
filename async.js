

// async function 프로미스(){
//     var 프로미스 = new Promise((성공,실패)=> {
//         var 힘든연산 = 1+1
//         성공(힘든연산)
//     })
//     try{
//         var 결과 = await 프로미스
//         console.log(결과)
//     }
//     catch{
//         console.log('연산실패')
//     }

//   }

//   프로미스()

// async function 버튼(){
//     let Pro = new Promise((성공,실패)=>{
//         let btn = document.getElementById('asy').addEventListener('click',function(){
//             console.log('성공했어요')
//         })
//         성공(btn)
//     })
//     try{
//         let res = await 버튼
//     }
//     catch{
//         console.log('실패했어요')
//     }
// }
// 버튼()