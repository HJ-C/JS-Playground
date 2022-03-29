// class, extends, getter, setter 활용

//1. class 구조 만들기
// var 강아지1 = {type : '말티즈', color : 'white'}
// var 강아지2 = {type : '진돗개', color : 'brown'}

class Dogs{
    constructor(이름,색){
        this.name = 이름
        this.color = 색
    }
}
var Dog1 = new Dogs('말티즈','white')
var Dog2 = new Dogs('진돗개','brwon')

//2 Object 생성
// 강아지 상속 이용 object생성
// var 고양이1 = { type : '코숏', color : 'white', age : 5 };
// var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 }; 

class Cats extends Dogs{
    constructor(이름,색,나이){
        super(이름,색,나이)
        this.age = 나이
    }
}
var Cat1 = new Cats('코숏', 'white', 5)
var Cat2 = new Cats('먼치킨', 'brwon', 2)

//3. Cats과 Dogs object에 기능 하나씩 추가
// Cats와 Dogs object에 nextAge()함수 추가
// nextAge()는 Dogs class로부터 생성된 object가 사용하면 console창에 error 출력
// nextAge()는 Cats class로부터 생성된 object가 사용하면 현재 가지고 있는 age에 +1 기능 추가

class Dogs{
    constructor(){
        this.name = 이름
        this.color = 색
    }
    nextAge(){
        if(this instanceof Cat){
            this.age++
        }
    }
}
class Cats extends Dogs{
    constructor(이름,색,나이){
        super(이름,색,나이)
        this.age = 나이
    }
}

//4. get/set 활용
// 모든 Unit의 instance는 Atk,Hp 속성이 있으며 기본 Atk = 5, 기본 HP = 1000
// 모든 Unit의 instance는 전투력 측정 해주는 battlePoint라는 getter 존재
// console.log(instance.battlePoint) 사용시 Atk + Hp를 출력
// 모든 Unit instance는 heal이라는 setter 존재
// 인스턴스.heal = 50 사용시 Hp + 50 이 출력되어야함

class Unit{
    constructor(){
        this.Atk = 5;
        this.Hp = 1000
    }
    get battlePoint(){
        return this.Atk + this.Hp;
    }
    set heal(i){
        this.Hp = this.Hp + i
    }
}
var a = new Unit()

console.log(a.battlePoint)
a.heal = 50


//5. get/set 활용 2
// var data = {
//     odd : [],
//     even : []
//   }
// data object에 setter 함수 하나 필요
// setter 함수에 아무 parameter 입력시 홀수는 odd, 짝는 even 속성에 array형태로 저장
// data object에 getter 함수 하나 필요
// getter 함수를 사용하면 odd, even에 저장된 데이터들이 숫자 순으로 정렬

var data = {
    odd: [],
    even : [],
    setter함수 : function(...rest){
        rest.forEach(function(a){
            if(a % 2 == 0){
                this.even.push(a)
            }else{
                this.odd.push(a)
            }
        })
    },
    get getter함수(){
        return [...this.odd, ...this.even].sort()
    }
}
data.setter함수(1,2,3)