// class란 constructor, prototype을 이용한 상속기능
// 기존 funtion 부터 시작하는 문법과 기능상 차이는 크게 없음

// 1. class 형태
class 부모{
    constructor(){ //Object를 뽑는 명령어
        this.name = 'Kim'
    }
}
var 자식 = new 부모()

// 2. 상속가능한 함수 추가
class 부모{
    constructor(){
        this.name = 'Kim'
        this.sayHi = function(){
            console.log('hello')
        }
    }
}
var 자식 = new 부모()
// 오브젝트에 함수 추가할땐 sayHi : function(){}
// function 함수(), class에는 this.sayHi = function(){}

// 2.5 class에 prototype 추가
class 부모 {
    constructor(){
      this.name = 'Kim';
    }
    sayHi(){  
      console.log('hello') 
    }
  }
var 자식 = new 부모();
//constructor{} 밖에 있는 범위 = prototype 추가 범위
// 또는 부모.prototype.sayHi = function(){} 로 추가 가능

// 2.5 class에 prototype 여러개 추가
class 부모{
    constructor(이름,나이){
        this.name = 이름
        this.age = 나이
    }
    sayHi(){
        console.log('안녕')
    }
    sayBye(){
        console.log('잘가')
    }
}
var 자식 = new 부모('Park', 20)

// 3. constructor 안에 parameter 추가
class 부모{
    constructor(이름,나이){
        this.name = 이름
        this.age = 나이
    }
}
var 자식 = new 부모('Park',30)

// 4. class를 상속한 class를 만들고 싶을 때  = extends
class 할아버지{
    constructor(name){
        this.성 = 'Kim'
        this.이름 = name
    }
}

class 아버지 extends 할아버지{
    constructor(name){
        super(name)
        this.나이 = 50
    }
}
var a = new 아버지('현준') //{성 :'Kim', 이름: '현준', 나이 : 50}

// super  = 할아버지의 메소드 (this.성, this.이름)
// 상속받을 parameter에도 변수를 넣어줘야함

//5 부모의 메소드에 함수 추가, 상속
class 할아버지{
    constructor(name){
        this.성 = 'Kim'
        this.이름 = name
    }
    sayHi(){
        console.log('안녕')
    }
}

class 아버지 extends 할아버지{
    constructor(name){
        super(name)
        this.나이 = 50
    }
}


