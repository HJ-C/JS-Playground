
// 1. 
class 할아버지 {
    constructor(name){
        this.성 = 'Kim'
        this.이름 = name
    }
    sayHi(){
        console.log('안녕 저는 할아버지에요')
    }
}
// var 할아버지1 = new 할아버지('덕배')

// 2. 
class 아버지 {
    constructor(이름){
        this.name = '이름'
    }
    sayBye(){
        console.log('bye')
        }
    }
var 부모 = new 아버지('Kim')

// 3. 상속
class 아버지 extends 할아버지 {
    constructor(name){
        super(name); //super는 할아버지의 메소드(this.성, this.이름)
        this.나이 = 50;
    }
    sayHi(){
        console.log('안녕 저는 아버지에요')
    }
}

var 아버지1 = new 아버지('만수')    