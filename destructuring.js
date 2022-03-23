// // 1. Object 안에 있는 데이터를 변수에 담는 법
// var { name : a, age = 10 } = {name:'kim'}
// var { name } = {name:'kim'}

// // 2. 변수를 object로 집어 넣고 싶은 경우
// var name = 'kim'
// var obj = {name}

// 3. 파라미터에도 적용 가능

//  var obj =  {name : 'kim', age:30}

//  function 함수({name, age}){
//      console.log(name)
//      console.log(age)
//  }
//  함수(obj)
//  // {} 대신 []도 가능함
