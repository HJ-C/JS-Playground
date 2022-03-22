// //1
// class Dogs{
//     constructor(종류,색){
//         this.type = 종류
//         this.color = 색
//     }
//     한살먹기(){
//         if(this instanceof Cats){
//             this.age++
//         }
//     }
// }

// let 강아지1 = new Dogs('말티즈','white')
// let 강아지2 = new Dogs('진돗개','brown')


// //2
// class Cats extends Dogs{
//     constructor(종류,색,나이){
//         super(종류,색)
//         this.age = 나이
//     }
// }

// let 고양이1 = new Cats('먼치킨','black',5)



//3 

// class Unit {
//     constructor(){
//         this.atk = 5;
//         this.hp = 100;
//     }
//     get battlePoint(){
//         return this.atk + this.hp;
//     }
//     set heal(a){
//         this.hp = this.hp + a
//     }
// }

// var 쌘애 = new Unit()
// 쌘애.heal = 50
// console.log(쌘애.battlePoint)

//4 
// var data = {
//     odd : [],
//     even : [],
//     setter함수 : function(...rest){
//         rest.forEach( (e)=> {
//             if(e % 2 == 0){
//                 this.odd.push(e)
//             }else{
//                 this.even.push(e)
//             }
//         })
//     }
// }

// console.log(data.setter함수(1,2,3))

